import { Link } from 'react-router-dom';
import { TopNav } from '../components/TopNav.jsx';
import { Footer } from '../components/Footer.jsx';
import { BusWordmark } from '../components/BusLogo.jsx';
import { SparkLine } from '../components/SparkLine.jsx';
import {
  CountUp,
  FadeUp,
  HorizontalScroll,
  Marquee,
  Parallax,
  SplitText,
  StickySection,
  TiltCard,
} from '../components/Motion.jsx';

/* ============================================================
   1. HeroB —— Parallax 背景 + SplitText H1 + Staggered FadeUp + TiltCard
   ============================================================ */
const HeroB = () => (
  <section
    style={{
      paddingTop: 96,
      paddingBottom: 64,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 'min(820px, 100vh)',
    }}
  >
    {/* —— Parallax 背景层 —— */}
    <Parallax
      speed={0.15}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: '-10% -5%',
          opacity: 0.5,
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)',
        }}
      />
    </Parallax>
    <Parallax
      speed={0.35}
      style={{
        position: 'absolute',
        top: -120,
        left: '50%',
        width: 1200,
        height: 700,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse, rgba(125,211,252,0.18), transparent 60%)',
        }}
      />
    </Parallax>
    <Parallax
      speed={0.55}
      style={{
        position: 'absolute',
        top: 80,
        left: '8%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: 220,
          height: 220,
          borderRadius: 999,
          border: '1px solid rgba(125,211,252,0.18)',
          background:
            'radial-gradient(circle at 30% 30%, rgba(125,211,252,0.12), transparent 60%)',
        }}
      />
    </Parallax>
    <Parallax
      speed={-0.25}
      style={{
        position: 'absolute',
        top: 240,
        right: '6%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: 28,
          transform: 'rotate(18deg)',
          border: '1px solid rgba(167,139,250,0.22)',
          background:
            'linear-gradient(135deg, rgba(167,139,250,0.10), transparent)',
        }}
      />
    </Parallax>
    <Parallax
      speed={0.45}
      style={{
        position: 'absolute',
        bottom: 60,
        right: '20%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: 14,
          border: '1px solid rgba(52,211,153,0.20)',
          background:
            'linear-gradient(135deg, rgba(52,211,153,0.10), transparent)',
        }}
      />
    </Parallax>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: 940, margin: '0 auto' }}>
        <FadeUp delay={0}>
          <span className="badge" style={{ marginBottom: 24 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: 'var(--accent-3)',
              }}
            />
            已通过 ISO 27001 与等保三级认证
          </span>
        </FadeUp>

        <h1 className="h-display" style={{ marginTop: 8 }}>
          <SplitText text="把 200+ 模型" by="word" step={70} />
          <br />
          <span style={{ color: 'var(--accent)' }}>
            <SplitText
              text="变成一个 API。"
              by="word"
              step={70}
              delay={350}
            />
          </span>
        </h1>

        <FadeUp
          delay={1100}
          as="p"
          className="lead"
          style={{ marginTop: 28, maxWidth: 660, marginInline: 'auto' }}
        >
          一个控制台，管理团队对所有 AI 模型的访问。密钥分发、用量配额、成本归因、合规审计 —— 全部内建。
        </FadeUp>

        <FadeUp delay={1220} style={{ marginTop: 36 }}>
          <div style={{ display: 'inline-flex', gap: 12 }}>
            <Link className="btn btn-primary btn-lg" to="/signup">
              注册控制台 →
            </Link>
            <Link className="btn btn-ghost btn-lg" to="/enterprise">
              预约演示
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={1340} style={{ marginTop: 14 }}>
          <div className="mono" style={{ fontSize: 12, color: 'var(--text-4)' }}>
            无需信用卡 · 5 分钟接入 · 兼容 OpenAI SDK
          </div>
        </FadeUp>
      </div>

      {/* Hero 下方的浮窗 —— TiltCard 包裹 */}
      <FadeUp delay={1500} style={{ marginTop: 72 }}>
        <TiltCard
          max={5}
          style={{
            maxWidth: 980,
            margin: '0 auto',
            borderRadius: 16,
          }}
        >
          <div
            style={{
              borderRadius: 16,
              border: '1px solid var(--line-2)',
              background:
                'linear-gradient(180deg, rgba(20,24,32,0.9), rgba(8,10,14,0.9))',
              boxShadow:
                '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              padding: 22,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
            }}
          >
            {[
              {
                label: '总请求 / 24h',
                value: '12.4M',
                spark: [40, 42, 38, 46, 48, 52, 58, 62, 60, 68, 72, 78, 82, 88],
                color: '#7dd3fc',
              },
              {
                label: 'P50 延迟',
                value: '187 ms',
                spark: [50, 48, 52, 46, 44, 42, 40, 38, 36, 38, 40, 38, 36, 34],
                color: '#34d399',
              },
              {
                label: '本月费用',
                value: '¥ 8,432',
                spark: [20, 22, 18, 28, 30, 34, 38, 42, 40, 48, 52, 55, 60, 65],
                color: '#a78bfa',
              },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  padding: 14,
                  borderRadius: 10,
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line-1)',
                }}
              >
                <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-4)' }}>
                  {m.label}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 26,
                    fontWeight: 500,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {m.value}
                </div>
                <div style={{ marginTop: 8 }}>
                  <SparkLine data={m.spark} color={m.color} />
                </div>
              </div>
            ))}
          </div>
        </TiltCard>
      </FadeUp>
    </div>
  </section>
);

/* ============================================================
   2. LogoMarqueeB —— 客户 logo 无限横向滚动
   ============================================================ */
const LOGOS = [
  '字节跳动',
  '美团',
  '小红书',
  'Shein',
  '理想汽车',
  '蔚来',
  '招商证券',
  '平安科技',
  '京东物流',
  'BIGO',
  '好未来',
  '声网',
];

const LogoMarqueeB = () => (
  <section
    style={{
      padding: '40px 0',
      borderTop: '1px solid var(--line-1)',
      borderBottom: '1px solid var(--line-1)',
    }}
  >
    <div className="container">
      <FadeUp>
        <div
          className="mono"
          style={{
            textAlign: 'center',
            fontSize: 11,
            letterSpacing: '0.18em',
            color: 'var(--text-4)',
            marginBottom: 28,
          }}
        >
          已为 <CountUp to={4200} suffix="+" duration={1600} /> 个团队提供模型基础设施
        </div>
      </FadeUp>
      <Marquee duration={42} gap={64}>
        {LOGOS.map((name) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 22px',
              border: '1px solid var(--line-1)',
              borderRadius: 999,
              color: 'var(--text-3)',
              fontSize: 14,
              fontWeight: 500,
              background: 'var(--bg-1)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: 'var(--text-4)',
              }}
            />
            {name}
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

/* ============================================================
   3. StatsCountUpB —— 数字滚动累加
   ============================================================ */
const StatsCountUpB = () => {
  const stats = [
    { v: 4200, suffix: '+', label: '服务团队' },
    { v: 200, suffix: '+', label: '可调用模型' },
    { v: 99.99, suffix: '%', decimals: 2, label: '近 90 天 SLA' },
    { v: 8, suffix: '', label: '全球边缘区域' },
  ];
  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            background: 'var(--line-1)',
            border: '1px solid var(--line-1)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {stats.map((s, i) => (
            <FadeUp
              key={s.label}
              delay={i * 90}
              style={{ background: 'var(--bg-0)', padding: '36px 28px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 56,
                  fontWeight: 500,
                  letterSpacing: '-0.035em',
                  lineHeight: 1,
                  color: 'var(--text-1)',
                }}
              >
                <CountUp
                  to={s.v}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                  duration={2000}
                />
              </div>
              <div
                className="mono"
                style={{
                  marginTop: 14,
                  fontSize: 11.5,
                  letterSpacing: '0.12em',
                  color: 'var(--text-4)',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   4. StickyDashboardB —— 章节钉住，依次切换 密钥页 → 用量页 → 团队页
   ============================================================ */
const FRAMES = [
  {
    key: 'keys',
    title: 'API 密钥',
    desc: '为每个项目、环境、成员发放独立密钥，单独配额与速率上限。',
  },
  {
    key: 'usage',
    title: '用量统计',
    desc: '请求自动按模型 / 部门 / 项目归集，账单一目了然，可导出对账。',
  },
  {
    key: 'team',
    title: '团队',
    desc: 'SCIM / SSO 一键同步，按角色分配权限，全程审计可追溯。',
  },
];

const KeysPanel = () => (
  <div style={{ padding: 22 }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 500 }}>API 密钥</div>
      <button className="btn btn-primary btn-sm">+ 新建密钥</button>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1.4fr 1fr 0.6fr',
        padding: '10px 14px',
        background: 'var(--bg-3)',
        borderRadius: 8,
        fontSize: 11,
        color: 'var(--text-4)',
        letterSpacing: '0.06em',
      }}
      className="mono"
    >
      <span>名称</span>
      <span>密钥</span>
      <span>本月用量</span>
      <span>状态</span>
    </div>
    {[
      { name: 'production-飞书', key: 'sk-bus-···7Yhq', usage: '1.2M / 5M', pct: 24 },
      { name: 'staging-doc', key: 'sk-bus-···Bd9k', usage: '420K / 1M', pct: 42 },
      { name: 'mobile-ios', key: 'sk-bus-···Lp3v', usage: '64K / 200K', pct: 32 },
      { name: 'analytics-bot', key: 'sk-bus-···Qm2x', usage: '912K / 2M', pct: 46 },
    ].map((k) => (
      <div
        key={k.name}
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1.4fr 1fr 0.6fr',
          alignItems: 'center',
          padding: '14px',
          borderBottom: '1px solid var(--line-1)',
          fontSize: 13,
        }}
      >
        <span>{k.name}</span>
        <span className="mono" style={{ color: 'var(--text-3)' }}>
          {k.key}
        </span>
        <div>
          <div
            style={{
              height: 4,
              background: 'var(--bg-3)',
              borderRadius: 999,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${k.pct}%`,
                height: '100%',
                background: 'var(--accent)',
              }}
            />
          </div>
          <div
            className="mono"
            style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 4 }}
          >
            {k.usage}
          </div>
        </div>
        <span style={{ fontSize: 11.5, color: 'var(--accent-3)' }}>● 活跃</span>
      </div>
    ))}
  </div>
);

const UsagePanel = () => (
  <div style={{ padding: 22 }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      <div>
        <div style={{ fontSize: 16, fontWeight: 500 }}>请求量 · 按模型</div>
        <div
          className="mono"
          style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 2 }}
        >
          过去 30 天
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {['24h', '7d', '30d', '90d'].map((t, i) => (
          <button
            key={t}
            style={{
              padding: '4px 10px',
              fontSize: 11.5,
              borderRadius: 4,
              border: '1px solid var(--line-1)',
              background: i === 2 ? 'var(--bg-3)' : 'transparent',
              color: i === 2 ? 'var(--text-1)' : 'var(--text-3)',
              cursor: 'pointer',
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
    <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none">
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          y1={i * 40}
          x2="800"
          y2={i * 40}
          stroke="rgba(255,255,255,0.04)"
        />
      ))}
      {(() => {
        const pts = (offset, amp, freq, phase) =>
          Array.from({ length: 30 }, (_, i) => {
            const x = (i / 29) * 800;
            const y = 200 - offset - Math.sin(i * freq + phase) * amp - i * 1.8;
            return [x, y];
          });
        const a1 = pts(20, 12, 0.4, 0);
        const a2 = pts(50, 14, 0.5, 1);
        const a3 = pts(80, 10, 0.3, 2);
        return (
          <>
            <polyline
              points={[...a1, [800, 200], [0, 200]].map((p) => p.join(',')).join(' ')}
              fill="rgba(125,211,252,0.20)"
              stroke="#7dd3fc"
              strokeWidth="1.4"
            />
            <polyline
              points={[...a2, [800, 200], [0, 200]].map((p) => p.join(',')).join(' ')}
              fill="rgba(167,139,250,0.20)"
              stroke="#a78bfa"
              strokeWidth="1.4"
            />
            <polyline
              points={[...a3, [800, 200], [0, 200]].map((p) => p.join(',')).join(' ')}
              fill="rgba(52,211,153,0.18)"
              stroke="#34d399"
              strokeWidth="1.4"
            />
          </>
        );
      })()}
    </svg>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginTop: 14,
      }}
    >
      {[
        { l: 'OpenAI', v: '6.2M', c: '#7dd3fc' },
        { l: 'Anthropic', v: '4.1M', c: '#a78bfa' },
        { l: 'Google', v: '2.1M', c: '#34d399' },
      ].map((it) => (
        <div
          key={it.l}
          style={{
            padding: '10px 12px',
            borderRadius: 8,
            border: '1px solid var(--line-1)',
            background: 'var(--bg-1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              color: 'var(--text-3)',
            }}
          >
            <span style={{ width: 8, height: 8, background: it.c, borderRadius: 2 }} />
            {it.l}
          </div>
          <div style={{ marginTop: 4, fontSize: 18, fontWeight: 500 }}>{it.v}</div>
        </div>
      ))}
    </div>
  </div>
);

const TeamPanel = () => (
  <div style={{ padding: 22 }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 500 }}>团队成员</div>
      <button className="btn btn-ghost btn-sm">+ 邀请</button>
    </div>
    {[
      { n: '陈晓东', e: 'chen.xd@acme.cn', r: 'Owner', c: '#7dd3fc' },
      { n: '林沁', e: 'lin.q@acme.cn', r: 'Admin', c: '#a78bfa' },
      { n: '王阳', e: 'wang.y@acme.cn', r: 'Developer', c: '#34d399' },
      { n: '苏倩', e: 'su.q@acme.cn', r: 'Developer', c: '#fbbf24' },
      { n: 'Billing-Bot', e: 'bot@acme.cn', r: 'Read-only', c: '#f87171' },
    ].map((m) => (
      <div
        key={m.e}
        style={{
          display: 'grid',
          gridTemplateColumns: '40px 1fr 120px 80px',
          alignItems: 'center',
          padding: '12px 4px',
          borderBottom: '1px solid var(--line-1)',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            background: m.c,
            opacity: 0.8,
            color: '#0b1216',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {m.n.slice(0, 1)}
        </div>
        <div>
          <div style={{ fontSize: 13.5 }}>{m.n}</div>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-4)' }}>
            {m.e}
          </div>
        </div>
        <span
          style={{
            fontSize: 11.5,
            color: 'var(--text-2)',
            border: '1px solid var(--line-2)',
            padding: '3px 8px',
            borderRadius: 999,
            justifySelf: 'start',
          }}
        >
          {m.r}
        </span>
        <span style={{ fontSize: 11, color: 'var(--text-4)' }}>· · ·</span>
      </div>
    ))}
  </div>
);

const PANELS = [<KeysPanel key="k" />, <UsagePanel key="u" />, <TeamPanel key="t" />];

const StickyDashboardB = () => (
  <StickySection
    frames={3}
    perFrameVh={1.0}
    style={{ borderTop: '1px solid var(--line-1)' }}
  >
    {({ frame }) => (
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* 左侧标题 + 段落（随 frame 切换） */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              控制台导览 · {String(frame + 1).padStart(2, '0')} / 03
            </div>
            <h2
              className="h-1"
              style={{ marginBottom: 18, transition: 'all 360ms cubic-bezier(.2,.7,.2,1)' }}
            >
              {FRAMES[frame].title}
            </h2>
            <p className="lead" style={{ color: 'var(--text-3)' }}>
              {FRAMES[frame].desc}
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FRAMES.map((f, i) => (
                <div
                  key={f.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 13.5,
                    color: i === frame ? 'var(--text-1)' : 'var(--text-4)',
                    transition: 'color 320ms ease',
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 2,
                      borderRadius: 999,
                      background: i === frame ? 'var(--accent)' : 'var(--line-2)',
                      transition: 'all 320ms ease',
                    }}
                  />
                  {f.title}
                </div>
              ))}
            </div>
            <div
              className="mono"
              style={{ marginTop: 32, fontSize: 11, color: 'var(--text-4)' }}
            >
              ↓ 继续滚动切换面板
            </div>
          </div>

          {/* 右侧浏览器外壳 + 切换的面板 */}
          <div
            style={{
              borderRadius: 14,
              border: '1px solid var(--line-2)',
              overflow: 'hidden',
              background: 'var(--bg-1)',
              boxShadow:
                '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              minHeight: 540,
            }}
          >
            <div
              style={{
                height: 38,
                padding: '0 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                borderBottom: '1px solid var(--line-1)',
                background: 'var(--bg-1)',
              }}
            >
              <div style={{ display: 'flex', gap: 6 }}>
                {['#3a3f49', '#3a3f49', '#3a3f49'].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: c,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  marginLeft: 14,
                  height: 24,
                  background: 'var(--bg-3)',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  fontSize: 11,
                  color: 'var(--text-3)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ marginRight: 6, opacity: 0.6 }}>🔒</span>
                app.busapi.cn/{FRAMES[frame].key}
              </div>
              <BusWordmark small />
            </div>

            <div style={{ position: 'relative', minHeight: 502 }}>
              {PANELS.map((p, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: i === frame ? 1 : 0,
                    transform: i === frame ? 'translateY(0)' : 'translateY(16px)',
                    transition:
                      'opacity 460ms cubic-bezier(.2,.7,.2,1), transform 460ms cubic-bezier(.2,.7,.2,1)',
                    pointerEvents: i === frame ? 'auto' : 'none',
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </StickySection>
);

/* ============================================================
   5. HorizontalFeaturesB —— 4 个核心卖点横向滚动劫持
   ============================================================ */
const PILLARS = [
  {
    n: '01',
    t: '一个 API · 全部模型',
    d: '兼容 OpenAI SDK，一行 base_url 切到 BusAPI，立刻拿到 200+ 模型与统一计费。',
    c: '#7dd3fc',
  },
  {
    n: '02',
    t: '密钥 / 配额 / 团队',
    d: '为项目、环境、成员发放独立密钥，单独限速与配额，离职即撤销。',
    c: '#a78bfa',
  },
  {
    n: '03',
    t: '成本归因 + 审计日志',
    d: '请求按部门、项目自动归集；30 天可回溯审计，满足等保 SOC2。',
    c: '#34d399',
  },
  {
    n: '04',
    t: '智能路由 · 国内直连',
    d: '故障自动切换、多 region 备份；Claude / Gemini 国内 380ms 直连不出域。',
    c: '#fbbf24',
  },
];

const HorizontalFeaturesB = () => (
  <div style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--line-1)' }}>
    <HorizontalScroll trackWidthVw={400}>
      <div
        style={{
          width: '50vw',
          flexShrink: 0,
          padding: '0 64px 0 96px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          四大支柱
        </div>
        <h2 className="h-1" style={{ maxWidth: 480 }}>
          不只是中转，
          <br />
          是 AI 的
          <span style={{ color: 'var(--accent)' }}>基础设施</span>。
        </h2>
        <p className="lead" style={{ marginTop: 18, color: 'var(--text-3)', maxWidth: 420 }}>
          继续向下滚动 →
        </p>
      </div>

      {PILLARS.map((p) => (
        <div
          key={p.n}
          style={{
            width: '38vw',
            minWidth: 460,
            flexShrink: 0,
            padding: '0 24px',
          }}
        >
          <TiltCard max={6} style={{ height: '100%' }}>
            <div
              style={{
                height: '70vh',
                maxHeight: 540,
                padding: 36,
                borderRadius: 18,
                background:
                  'linear-gradient(180deg, var(--bg-1), var(--bg-0))',
                border: '1px solid var(--line-2)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -120,
                  right: -80,
                  width: 320,
                  height: 320,
                  borderRadius: 999,
                  background: `radial-gradient(circle, ${p.c}33, transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  color: p.c,
                  marginBottom: 18,
                }}
              >
                / {p.n}
              </div>
              <h3
                className="h-2"
                style={{ marginBottom: 16, position: 'relative', zIndex: 1 }}
              >
                {p.t}
              </h3>
              <p
                className="lead"
                style={{
                  color: 'var(--text-3)',
                  fontSize: 16,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {p.d}
              </p>
              <div style={{ flex: 1 }} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 28,
                }}
              >
                <span style={{ fontSize: 13, color: 'var(--text-2)' }}>
                  了解更多 →
                </span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                  {p.n} / 04
                </span>
              </div>
            </div>
          </TiltCard>
        </div>
      ))}

      <div style={{ width: '6vw', flexShrink: 0 }} />
    </HorizontalScroll>
  </div>
);

/* ============================================================
   6. FeaturesB —— 保留的 6 卡 grid（交错入场）
   ============================================================ */
const FeaturesB = () => {
  const items = [
    { t: '密钥层级管理', d: '为每个项目、环境、成员发放独立密钥，单独配额与限速。' },
    { t: '成本归因', d: '请求自动按部门、项目、用户标签归集，账单一目了然。' },
    { t: '审计日志', d: '完整的请求审计链路，30 天可回溯，满足等保与 SOC2 要求。' },
    { t: '智能路由', d: '故障自动切换，多 region 多 provider 备份，保证服务连续性。' },
    { t: '内容安全', d: '内置敏感词与提示词注入检测，可定制企业自有词库。' },
    { t: '私有部署', d: '支持 VPC 专线、混合云、本地化推理网关，数据不出域。' },
  ];
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line-1)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <FadeUp>
            <div className="eyebrow">企业能力</div>
          </FadeUp>
          <FadeUp delay={120}>
            <h2 className="h-1" style={{ marginTop: 16 }}>
              开箱即用的所有
              <span style={{ color: 'var(--accent)' }}>企业件</span>。
            </h2>
          </FadeUp>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--line-1)',
            border: '1px solid var(--line-1)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {items.map((it, i) => (
            <FadeUp
              key={it.t}
              delay={(i % 3) * 100}
              style={{ background: 'var(--bg-0)', padding: 32 }}
            >
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 14 }}
              >
                {String(i + 1).padStart(2, '0')} · {it.t}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  margin: '0 0 10px',
                  letterSpacing: '-0.015em',
                }}
              >
                {it.t}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: 'var(--text-3)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {it.d}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   7. TestimonialB —— 文字逐词浮现 + 错峰入场
   ============================================================ */
const TestimonialB = () => (
  <section className="section" style={{ borderTop: '1px solid var(--line-1)' }}>
    <div className="container" style={{ maxWidth: 920 }}>
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: 32,
          lineHeight: 1.4,
          letterSpacing: '-0.02em',
          color: 'var(--text-1)',
          fontWeight: 400,
        }}
      >
        <SplitText
          text='"迁移到 BusAPI 后，我们三个产品线共用一份配额，财务对账时间从两天缩短到二十分钟。国内调用 Claude 也从 1.4 秒降到 380 毫秒。"'
          by="word"
          step={45}
          duration={800}
        />
      </blockquote>
      <FadeUp delay={300} style={{ marginTop: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: 'var(--bg-3)',
              border: '1px solid var(--line-2)',
            }}
          />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>陈晓东</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-3)', marginTop: 2 }}>
              某头部短视频平台 · AI 平台负责人
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

/* ============================================================
   HomePage 拼装
   ============================================================ */
export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <TopNav activeLabel="产品" />
      <HeroB />
      <LogoMarqueeB />
      <StatsCountUpB />
      <StickyDashboardB />
      <HorizontalFeaturesB />
      <FeaturesB />
      <TestimonialB />
      <Footer />
    </div>
  );
}
