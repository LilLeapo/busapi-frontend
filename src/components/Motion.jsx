import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/* ========================================================================
   useInView —— 仅触发一次的 IntersectionObserver
   ======================================================================== */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

/* ========================================================================
   FadeUp —— Staggered Fade-up（错峰入场）
     <FadeUp delay={120}>...</FadeUp>
   ======================================================================== */
export function FadeUp({
  as: Tag = 'div',
  delay = 0,
  duration = 700,
  y = 18,
  className,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0,0,0)' : `translate3d(0, ${y}px, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ========================================================================
   SplitText —— 文字按词/字符切开依次浮现（Text Split Reveal）
   ======================================================================== */
export function SplitText({
  text,
  by = 'word', // 'word' | 'char'
  step = 60,
  delay = 0,
  duration = 700,
  className,
  style,
}) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const tokens = useMemo(() => {
    if (by === 'char') return Array.from(text);
    return text.split(/(\s+)/);
  }, [text, by]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', ...style }}
    >
      {tokens.map((t, i) => {
        if (/^\s+$/.test(t)) return <span key={i}>{t}</span>;
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'baseline',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,110%,0)',
                opacity: inView ? 1 : 0,
                transition: `transform ${duration}ms cubic-bezier(.2,.8,.2,1) ${delay + i * step}ms, opacity ${duration}ms ease ${delay + i * step}ms`,
                willChange: 'transform, opacity',
              }}
            >
              {t}
            </span>
          </span>
        );
      })}
    </span>
  );
}

/* ========================================================================
   CountUp —— 数字滚动累加
   ======================================================================== */
export function CountUp({
  to = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className,
  style,
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setVal(to * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = useMemo(() => {
    const fixed = val.toFixed(decimals);
    const [intPart, decPart] = fixed.split('.');
    const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decPart ? `${withSep}.${decPart}` : withSep;
  }, [val, decimals, separator]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ========================================================================
   Parallax —— 背景层比前景慢的视差效果
     speed > 0 = 跟随更慢；负值 = 反向
   ======================================================================== */
export function Parallax({
  speed = 0.3,
  children,
  className,
  style,
}) {
  const ref = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (!ref.current) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const offset = (center - vh / 2) * speed * -1;
      setY(offset);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${y.toFixed(2)}px, 0)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   Marquee —— 无限横向滚动（CSS keyframes 由 tokens.css 提供）
   ======================================================================== */
export function Marquee({
  children,
  duration = 40,
  gap = 48,
  reverse = false,
  pauseOnHover = true,
  className,
  style,
}) {
  return (
    <div
      className={`marquee${pauseOnHover ? ' marquee--pause-hover' : ''}${className ? ' ' + className : ''}`}
      style={style}
    >
      <div
        className="marquee__track"
        style={{
          gap,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="marquee__group" style={{ gap }}>
          {children}
        </div>
        <div className="marquee__group" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   TiltCard —— 鼠标悬停 3D 倾斜
   ======================================================================== */
export function TiltCard({
  max = 8,
  scale = 1.01,
  glare = true,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 2 * max;
    const rx = -(py - 0.5) * 2 * max;
    setT({ rx, ry, gx: px * 100, gy: py * 100, active: true });
  };
  const onLeave = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `perspective(1100px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.active ? scale : 1})`,
        transition: t.active
          ? 'transform 80ms linear'
          : 'transform 500ms cubic-bezier(.2,.7,.2,1)',
        willChange: 'transform',
        ...style,
      }}
      {...rest}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(420px circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.10), transparent 55%)`,
            opacity: t.active ? 1 : 0,
            transition: 'opacity 240ms ease',
            mixBlendMode: 'screen',
          }}
        />
      )}
    </div>
  );
}

/* ========================================================================
   StickySection —— 章节钉住，内部依次切换 N 帧
   children = ({ frame, progress, frames }) => ReactNode
   ======================================================================== */
export function StickySection({
  frames = 3,
  perFrameVh = 0.9, // 每一帧占用的视口高度倍数
  topOffset = 0,
  children,
  className,
  style,
}) {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!wrapRef.current) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const frame = Math.min(frames - 1, Math.floor(progress * frames));
  const localProgress = progress * frames - frame;
  const totalVh = perFrameVh * frames * 100 + 100;

  return (
    <section
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', height: `${totalVh}vh`, ...style }}
    >
      <div
        style={{
          position: 'sticky',
          top: topOffset,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {typeof children === 'function'
          ? children({ frame, progress, localProgress, frames })
          : children}
      </div>
    </section>
  );
}

/* ========================================================================
   HorizontalScroll —— 纵向滚动劫持成横向
     children 渲染在水平 flex 轨道里
   ======================================================================== */
export function HorizontalScroll({
  children,
  trackWidthVw = 320, // 轨道总宽度（vw）
  className,
  style,
}) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [maxShift, setMaxShift] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      const overflow = t.scrollWidth - window.innerWidth;
      setMaxShift(Math.max(0, overflow));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [children]);

  useEffect(() => {
    if (!wrapRef.current) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', height: `${trackWidthVw}vh`, ...style }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            transform: `translate3d(${-progress * maxShift}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
