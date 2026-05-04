import { useState, useEffect, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const TabularNum = ({ value, prefix = '', suffix = '', decimals = 0 }) => {
  const [v, setV] = useState(value * 0.7);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const from = value * 0.7;
    const to = value;
    const dur = 900;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum"' }}>
      {prefix}
      {v.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

const LiveDot = ({ color = 'var(--accent-3)' }) => (
  <span
    style={{
      position: 'relative',
      width: 8,
      height: 8,
      display: 'inline-block',
      flexShrink: 0,
    }}
  >
    <span
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 999,
        background: color,
        opacity: 0.4,
        animation: 'v2pulse 1.8s ease-out infinite',
      }}
    />
    <span
      style={{
        position: 'absolute',
        inset: 1,
        borderRadius: 999,
        background: color,
      }}
    />
  </span>
);

const navWorkspace = [
  { k: 'overview', l: '总览', to: '/app/dashboard', icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z' },
  { k: 'playground', l: 'Playground', to: '/app/playground', icon: 'M8 5v14l11-7z' },
  { k: 'models', l: '模型市场', to: '/models', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
  { k: 'keys', l: 'API 密钥', to: '/app/keys', icon: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4', badge: 12 },
  { k: 'usage', l: '用量', to: '/app/usage', icon: 'M3 3v18h18M7 14l4-4 4 4 5-5' },
  { k: 'billing', l: '账单', to: '/app/billing', icon: 'M2 7h20v10H2zM2 11h20M6 15h2' },
];

const navManage = [
  { k: 'team', l: '团队', to: '/app/team', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { k: 'audit', l: '审计', to: '/app/audit', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { k: 'settings', l: '设置', to: '/app/settings', icon: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
];

const SidebarV2 = ({ collapsed, onToggle, active }) => {
  const W = collapsed ? 64 : 248;

  const Item = ({ it }) => {
    const isActive = active === it.k;
    return (
      <NavLink
        to={it.to}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: collapsed ? '10px' : '8px 10px',
          margin: collapsed ? '2px 8px' : '1px 0',
          borderRadius: 7,
          fontSize: 13,
          color: isActive ? 'var(--text-1)' : 'var(--text-3)',
          background: isActive
            ? 'linear-gradient(180deg, rgba(125,211,252,0.06), rgba(125,211,252,0.02))'
            : 'transparent',
          border: isActive ? '1px solid rgba(125,211,252,0.18)' : '1px solid transparent',
          textDecoration: 'none',
          position: 'relative',
          justifyContent: collapsed ? 'center' : 'flex-start',
          transition: 'all .15s ease',
        }}
      >
        {isActive && !collapsed && (
          <span
            style={{
              position: 'absolute',
              left: -1,
              top: 6,
              bottom: 6,
              width: 2,
              borderRadius: 999,
              background: 'var(--accent)',
            }}
          />
        )}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? 'var(--accent)' : 'currentColor'}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <path d={it.icon} />
        </svg>
        {!collapsed && (
          <>
            <span style={{ flex: 1 }}>{it.l}</span>
            {it.badge && (
              <span
                style={{
                  fontSize: 10.5,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-3)',
                  background: 'var(--bg-2)',
                  padding: '1px 6px',
                  borderRadius: 4,
                  border: '1px solid var(--line-1)',
                }}
              >
                {it.badge}
              </span>
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <aside
      style={{
        width: W,
        flexShrink: 0,
        background: 'linear-gradient(180deg, var(--bg-1), var(--bg-0))',
        borderRight: '1px solid var(--line-1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width .25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'sticky',
        top: 0,
        height: '100vh',
      }}
    >
      <div
        style={{
          padding: collapsed ? '20px 8px' : '20px 16px 16px',
          borderBottom: '1px solid var(--line-1)',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: collapsed ? 'center' : 'flex-start',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="v2br" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <circle cx="6" cy="8" r="2.2" fill="url(#v2br)" />
            <circle cx="6" cy="16" r="2.2" fill="url(#v2br)" />
            <circle cx="6" cy="24" r="2.2" fill="url(#v2br)" />
            <path
              d="M8 8 L18 16 L8 24"
              stroke="url(#v2br)"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M8 16 H18" stroke="url(#v2br)" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="22" cy="16" r="3.5" fill="none" stroke="url(#v2br)" strokeWidth="1.6" />
            <circle cx="22" cy="16" r="1.4" fill="url(#v2br)" />
          </svg>
          {!collapsed && (
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em' }}>BusAPI</span>
          )}
        </Link>

        {!collapsed && (
          <button
            type="button"
            style={{
              width: '100%',
              marginTop: 14,
              padding: '8px 10px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line-2)',
              borderRadius: 7,
              color: 'var(--text-1)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 5,
                background: 'linear-gradient(135deg, #7dd3fc, #a78bfa)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 600,
                color: '#0a0a0a',
              }}
            >
              飞
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                飞书智能
              </div>
              <div
                className="mono"
                style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 1 }}
              >
                PRO · 14 成员
              </div>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2">
              <path d="M8 9l4-4 4 4M8 15l4 4 4-4" />
            </svg>
          </button>
        )}
      </div>

      {!collapsed && (
        <div style={{ padding: '14px 12px 6px' }}>
          <button
            type="button"
            style={{
              width: '100%',
              padding: '7px 10px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line-1)',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-3)',
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span style={{ flex: 1, textAlign: 'left' }}>搜索…</span>
            <kbd
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                background: 'var(--bg-3)',
                padding: '1px 5px',
                borderRadius: 3,
                border: '1px solid var(--line-2)',
                color: 'var(--text-3)',
              }}
            >
              ⌘K
            </kbd>
          </button>
        </div>
      )}

      <nav style={{ flex: 1, padding: collapsed ? '8px 0' : '10px 12px', overflowY: 'auto' }}>
        {!collapsed && (
          <div
            className="mono"
            style={{
              fontSize: 9.5,
              color: 'var(--text-4)',
              letterSpacing: '0.14em',
              padding: '8px 10px 6px',
            }}
          >
            WORKSPACE
          </div>
        )}
        {navWorkspace.map((it) => (
          <Item key={it.k} it={it} />
        ))}

        <div style={{ height: 18 }} />

        {!collapsed && (
          <div
            className="mono"
            style={{
              fontSize: 9.5,
              color: 'var(--text-4)',
              letterSpacing: '0.14em',
              padding: '8px 10px 6px',
            }}
          >
            管理
          </div>
        )}
        {navManage.map((it) => (
          <Item key={it.k} it={it} />
        ))}
      </nav>

      <div
        style={{
          padding: collapsed ? '12px 8px' : '12px',
          borderTop: '1px solid var(--line-1)',
          background: 'var(--bg-1)',
        }}
      >
        {!collapsed ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 8px',
              borderRadius: 6,
            }}
          >
            <LiveDot />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 500 }}>所有系统正常</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
                API 187ms · uptime 99.99%
              </div>
            </div>
            <button
              type="button"
              onClick={onToggle}
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--text-4)',
                cursor: 'pointer',
                padding: 4,
              }}
              aria-label="折叠侧栏"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            style={{
              width: '100%',
              padding: 6,
              background: 'transparent',
              border: 0,
              color: 'var(--text-4)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
            }}
            aria-label="展开侧栏"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
};

const TopBarV2 = ({ env, setEnv, onOpenPalette }) => (
  <div
    style={{
      height: 56,
      borderBottom: '1px solid var(--line-1)',
      background: 'var(--bg-0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
      <span style={{ color: 'var(--text-3)' }}>飞书智能</span>
      <span style={{ color: 'var(--text-4)' }}>/</span>
      <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>总览</span>
      <span
        style={{
          marginLeft: 14,
          padding: '3px 8px',
          borderRadius: 4,
          background: 'rgba(125,211,252,0.06)',
          border: '1px solid rgba(125,211,252,0.2)',
          fontSize: 10.5,
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.05em',
        }}
      >
        PRO PLAN
      </span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          display: 'flex',
          background: 'var(--bg-2)',
          border: '1px solid var(--line-1)',
          borderRadius: 6,
          padding: 2,
        }}
      >
        {['production', 'staging', 'dev'].map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setEnv(e)}
            style={{
              padding: '4px 10px',
              fontSize: 11.5,
              background: env === e ? 'var(--bg-3)' : 'transparent',
              border: env === e ? '1px solid var(--line-2)' : '1px solid transparent',
              color: env === e ? 'var(--text-1)' : 'var(--text-3)',
              borderRadius: 4,
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: 999,
                background:
                  e === 'production' ? '#34d399' : e === 'staging' ? '#fbbf24' : '#7dd3fc',
              }}
            />
            {e}
          </button>
        ))}
      </div>

      <div style={{ height: 20, width: 1, background: 'var(--line-1)' }} />

      <button
        type="button"
        onClick={onOpenPalette}
        style={{
          width: 32,
          height: 32,
          background: 'transparent',
          border: 0,
          color: 'var(--text-3)',
          cursor: 'pointer',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="打开命令面板"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>

      {[
        {
          ic: 'M9 5h6m-6 4h6m-6 4h4m1 7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
          t: '文档',
        },
        {
          ic: 'M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9',
          t: '通知',
          dot: true,
        },
      ].map((b, i) => (
        <button
          key={i}
          type="button"
          style={{
            position: 'relative',
            width: 32,
            height: 32,
            background: 'transparent',
            border: 0,
            color: 'var(--text-3)',
            cursor: 'pointer',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label={b.t}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d={b.ic} />
          </svg>
          {b.dot && (
            <span
              style={{
                position: 'absolute',
                top: 7,
                right: 8,
                width: 6,
                height: 6,
                borderRadius: 999,
                background: '#f87171',
                border: '1px solid var(--bg-0)',
              }}
            />
          )}
        </button>
      ))}

      <button
        type="button"
        style={{
          padding: '6px 12px',
          background: 'var(--text-1)',
          color: 'var(--bg-0)',
          border: 0,
          borderRadius: 6,
          fontSize: 12.5,
          fontWeight: 500,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
        新建密钥
      </button>

      <div style={{ height: 20, width: 1, background: 'var(--line-1)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: 'linear-gradient(135deg, #7dd3fc, #a78bfa)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11.5,
            fontWeight: 600,
            color: '#0a0a0a',
          }}
        >
          陈
        </div>
      </div>
    </div>
  </div>
);

const HeroV2 = () => {
  const stats = [
    {
      l: '请求总数',
      v: 1284530,
      d: '+12.4%',
      up: true,
      spark: [40, 42, 41, 48, 52, 49, 56, 61, 58, 64, 70, 68, 74, 78],
    },
    {
      l: '消耗成本',
      v: 12847.3,
      prefix: '¥ ',
      decimals: 2,
      d: '+8.1%',
      up: true,
      spark: [22, 24, 26, 28, 27, 31, 33, 36, 38, 40, 42, 43, 45, 48],
      color: 'var(--accent-2)',
    },
    {
      l: '平均延迟',
      v: 187,
      suffix: ' ms',
      d: '-14ms',
      up: false,
      good: true,
      spark: [56, 54, 58, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32],
      color: 'var(--accent-3)',
    },
    {
      l: '错误率',
      v: 0.04,
      suffix: '%',
      decimals: 2,
      d: '-0.02%',
      up: false,
      good: true,
      spark: [12, 14, 11, 10, 9, 8, 7, 7, 6, 5, 5, 4, 4, 4],
      color: 'var(--accent-4)',
    },
  ];

  return (
    <div
      style={{
        padding: '32px 32px 28px',
        borderBottom: '1px solid var(--line-1)',
        background: 'radial-gradient(ellipse at top right, rgba(125,211,252,0.04), transparent 60%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(167,139,250,0.06), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 28,
          position: 'relative',
        }}
      >
        <div>
          <div
            className="mono"
            style={{ fontSize: 10.5, color: 'var(--text-4)', letterSpacing: '0.14em' }}
          >
            下午好，陈晓东
          </div>
          <h1
            style={{
              margin: '6px 0 0',
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: '-0.025em',
            }}
          >
            飞书智能 · 工作区总览
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            type="button"
            style={{
              padding: '6px 12px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line-2)',
              borderRadius: 6,
              color: 'var(--text-2)',
              fontSize: 12,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            近 7 天
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            style={{
              padding: '6px 12px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line-2)',
              borderRadius: 6,
              color: 'var(--text-2)',
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            导出
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          position: 'relative',
        }}
      >
        {stats.map((s, i, arr) => (
          <div
            key={s.l}
            style={{
              padding: '0 24px',
              borderRight: i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
              paddingLeft: i === 0 ? 0 : 24,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 10.5, color: 'var(--text-4)', letterSpacing: '0.1em' }}
            >
              {s.l.toUpperCase()}
            </div>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                <TabularNum
                  value={s.v}
                  prefix={s.prefix || ''}
                  suffix={s.suffix || ''}
                  decimals={s.decimals || 0}
                />
              </span>
            </div>
            <div
              style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 11.5,
                  fontFamily: 'var(--font-mono)',
                  color: s.good
                    ? 'var(--accent-3)'
                    : s.up
                    ? 'var(--accent-3)'
                    : 'var(--accent-5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path
                    d={s.up ? 'M7 17l5-5 5 5M7 11l5-5 5 5' : 'M7 7l5 5 5-5M7 13l5 5 5-5'}
                  />
                </svg>
                {s.d}
              </span>
              <svg
                width="80"
                height="22"
                viewBox="0 0 80 22"
                preserveAspectRatio="none"
                style={{ flexShrink: 0 }}
              >
                <defs>
                  <linearGradient id={`sg${i}`} x1="0" y1="0" x2="0" y2="22">
                    <stop offset="0" stopColor={s.color || 'var(--accent)'} stopOpacity="0.3" />
                    <stop offset="1" stopColor={s.color || 'var(--accent)'} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {(() => {
                  const max = Math.max(...s.spark);
                  const min = Math.min(...s.spark);
                  const pts = s.spark
                    .map(
                      (v, j) =>
                        `${(j / (s.spark.length - 1)) * 80},${
                          22 - ((v - min) / (max - min || 1)) * 18 - 2
                        }`,
                    )
                    .join(' ');
                  return (
                    <>
                      <polygon points={`0,22 ${pts} 80,22`} fill={`url(#sg${i})`} />
                      <polyline
                        points={pts}
                        fill="none"
                        stroke={s.color || 'var(--accent)'}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RequestsChart = () => {
  const days = 30;
  const success = Array.from(
    { length: days },
    (_, i) => 30 + Math.sin(i * 0.4) * 12 + ((i * 7919) % 100) / 5.5 + i * 0.6,
  );
  const errors = Array.from(
    { length: days },
    (_, i) => 1.5 + ((i * 6173) % 100) / 50 + (i > 22 && i < 25 ? 4 : 0),
  );
  const W = 720;
  const H = 220;
  const P = 32;
  const max = Math.max(...success.map((s, i) => s + errors[i]));
  const xs = (i) => P + (i / (days - 1)) * (W - P * 2);
  const ys = (v) => H - P - (v / max) * (H - P * 2);

  const successPath = success.map((v, i) => `${i ? 'L' : 'M'} ${xs(i)},${ys(v)}`).join(' ');
  const successArea = `${successPath} L ${xs(days - 1)},${H - P} L ${xs(0)},${H - P} Z`;
  const errorPath = errors
    .map((v, i) => `${i ? 'L' : 'M'} ${xs(i)},${ys(v + (success[i] || 0))}`)
    .join(' ');

  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 8', overflow: 'hidden' }}>
      <div
        style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--line-1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>请求趋势</div>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              marginTop: 3,
              letterSpacing: '0.06em',
            }}
          >
            30 DAYS · 5 MIN INTERVAL
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11.5,
              color: 'var(--text-3)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ width: 8, height: 2, background: 'var(--accent)', borderRadius: 1 }} />
            成功
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11.5,
              color: 'var(--text-3)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span
              style={{ width: 8, height: 2, background: 'var(--accent-5)', borderRadius: 1 }}
            />
            错误
          </span>
        </div>
      </div>
      <div style={{ padding: 22 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 220, display: 'block' }}>
          <defs>
            <linearGradient id="rcs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--accent)" stopOpacity="0.22" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
            <g key={i}>
              <line
                x1={P}
                y1={P + p * (H - P * 2)}
                x2={W - P}
                y2={P + p * (H - P * 2)}
                stroke="var(--line-1)"
                strokeDasharray="2 4"
              />
              <text
                x={P - 6}
                y={P + p * (H - P * 2) + 3}
                fontSize="9.5"
                fill="var(--text-4)"
                textAnchor="end"
                fontFamily="var(--font-mono)"
              >
                {Math.round(max * (1 - p))}
              </text>
            </g>
          ))}
          {[0, 7, 14, 21, 29].map((i) => (
            <text
              key={i}
              x={xs(i)}
              y={H - 12}
              fontSize="9.5"
              fill="var(--text-4)"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
            >
              {30 - i}d
            </text>
          ))}
          <path d={successArea} fill="url(#rcs)" />
          <path
            d={successPath}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={errorPath}
            fill="none"
            stroke="var(--accent-5)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
          />
          <line
            x1={xs(22)}
            y1={P}
            x2={xs(22)}
            y2={H - P}
            stroke="var(--text-1)"
            strokeOpacity="0.3"
            strokeDasharray="2 3"
          />
          <circle
            cx={xs(22)}
            cy={ys(success[22])}
            r="4"
            fill="var(--accent)"
            stroke="var(--bg-0)"
            strokeWidth="2"
          />
          <g transform={`translate(${xs(22) + 8} ${ys(success[22]) - 28})`}>
            <rect x="0" y="0" width="106" height="44" rx="6" fill="var(--bg-2)" stroke="var(--line-2)" />
            <text
              x="10"
              y="16"
              fontSize="9.5"
              fill="var(--text-4)"
              fontFamily="var(--font-mono)"
              letterSpacing="0.06em"
            >
              APR 22 · 14:00
            </text>
            <text
              x="10"
              y="30"
              fontSize="11.5"
              fill="var(--text-1)"
              fontFamily="var(--font-mono)"
              fontWeight="500"
            >
              {Math.round(success[22])}.4k req
            </text>
            <text x="10" y="40" fontSize="9" fill="var(--accent-5)" fontFamily="var(--font-mono)">
              err {errors[22].toFixed(1)}%
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

const LatencyHeatmap = () => {
  const rows = 6;
  const cols = 24;
  const labels = ['gpt-5', 'sonnet-4.5', 'gemini-2.5', 'o4-mini', 'deepseek-v4', 'llama-4'];
  const data = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => {
      const x = (r * 1131 + c * 4271) % 1000;
      return x / 1000;
    }),
  );

  const colorFor = (v) => {
    if (v < 0.2) return 'rgba(52,211,153,0.15)';
    if (v < 0.4) return 'rgba(52,211,153,0.4)';
    if (v < 0.6) return 'rgba(125,211,252,0.55)';
    if (v < 0.8) return 'rgba(251,191,36,0.6)';
    return 'rgba(248,113,113,0.7)';
  };

  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 4', overflow: 'hidden' }}>
      <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line-1)' }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>P95 延迟热力图</div>
        <div
          className="mono"
          style={{
            fontSize: 10.5,
            color: 'var(--text-4)',
            marginTop: 3,
            letterSpacing: '0.06em',
          }}
        >
          BY MODEL · 24H
        </div>
      </div>
      <div style={{ padding: '20px 22px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '64px 1fr',
            gap: 10,
            alignItems: 'center',
          }}
        >
          {data.map((row, ri) => (
            <Fragment key={ri}>
              <div
                className="mono"
                style={{ fontSize: 10.5, color: 'var(--text-3)', textAlign: 'right' }}
              >
                {labels[ri]}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gap: 2,
                }}
              >
                {row.map((v, ci) => (
                  <div
                    key={ci}
                    style={{
                      aspectRatio: '1',
                      borderRadius: 2,
                      background: colorFor(v),
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}
                  />
                ))}
              </div>
            </Fragment>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 14,
            paddingLeft: 74,
            alignItems: 'center',
          }}
        >
          <div className="mono" style={{ fontSize: 9.5, color: 'var(--text-4)' }}>
            00:00
          </div>
          <div className="mono" style={{ fontSize: 9.5, color: 'var(--text-4)' }}>
            12:00
          </div>
          <div className="mono" style={{ fontSize: 9.5, color: 'var(--text-4)' }}>
            23:00
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 14,
            fontSize: 10,
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-4)',
          }}
        >
          <span>快</span>
          <div
            style={{
              display: 'flex',
              flex: 1,
              height: 6,
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            {[0.1, 0.3, 0.5, 0.7, 0.9].map((v) => (
              <div key={v} style={{ flex: 1, background: colorFor(v) }} />
            ))}
          </div>
          <span>慢</span>
        </div>
      </div>
    </div>
  );
};

const ModelBreakdown = () => {
  const data = [
    { n: 'Claude Sonnet 4.5', v: 38.4, c: '#7dd3fc', cost: 4942, vendor: 'Anthropic' },
    { n: 'GPT-5', v: 24.7, c: '#a78bfa', cost: 3174, vendor: 'OpenAI' },
    { n: 'Gemini 2.5 Pro', v: 18.2, c: '#34d399', cost: 2342, vendor: 'Google' },
    { n: 'o4-mini', v: 12.1, c: '#fbbf24', cost: 1556, vendor: 'OpenAI' },
    { n: 'DeepSeek V4', v: 6.6, c: '#f87171', cost: 833, vendor: 'DeepSeek' },
  ];
  const total = data.reduce((a, b) => a + b.v, 0);
  let acc = 0;
  const R = 60;
  const S = 14;
  const C = 80;
  const arcs = data.map((d) => {
    const start = (acc / total) * Math.PI * 2 - Math.PI / 2;
    acc += d.v;
    const end = (acc / total) * Math.PI * 2 - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = C + R * Math.cos(start);
    const y1 = C + R * Math.sin(start);
    const x2 = C + R * Math.cos(end);
    const y2 = C + R * Math.sin(end);
    return { ...d, path: `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2}` };
  });

  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 5', overflow: 'hidden' }}>
      <div
        style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--line-1)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>模型用量分布</div>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              marginTop: 3,
              letterSpacing: '0.06em',
            }}
          >
            BY % OF REQUESTS · 7D
          </div>
        </div>
        <Link
          to="/app/usage"
          style={{
            fontSize: 11.5,
            color: 'var(--accent)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
          }}
        >
          详细 →
        </Link>
      </div>
      <div
        style={{
          padding: 22,
          display: 'grid',
          gridTemplateColumns: '160px 1fr',
          gap: 22,
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative', width: 160, height: 160 }}>
          <svg width="160" height="160" viewBox="0 0 160 160">
            {arcs.map((a, i) => (
              <path key={i} d={a.path} fill="none" stroke={a.c} strokeWidth={S} strokeLinecap="butt" />
            ))}
          </svg>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.1em' }}
            >
              TOTAL
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                fontVariantNumeric: 'tabular-nums',
                marginTop: 2,
              }}
            >
              1.28M
            </div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 2 }}>
              requests
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {data.map((d) => (
            <div key={d.n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: d.c,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                  <span
                    style={{
                      color: 'var(--text-1)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {d.n}
                  </span>
                  <span
                    className="mono"
                    style={{ color: 'var(--text-2)', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {d.v}%
                  </span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 2 }}>
                  {d.vendor} · ¥{d.cost.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ActivityStream = () => {
  const evs = [
    { t: '刚刚', who: '林思远', what: '调用了 claude-sonnet-4.5', meta: '2,341 tok · ¥0.041', tag: 'call', live: true },
    { t: '2 分钟前', who: '王明月', what: '创建了密钥 sk-prod-doc-***p82a', meta: 'production · 完整权限', tag: 'key' },
    { t: '14 分钟前', who: '陈晓东', what: '更新了团队配额', meta: '飞书智能 5K → 8K req/min', tag: 'config' },
    { t: '32 分钟前', who: 'system', what: '触发预算告警 · 80% 阈值', meta: '本月已用 ¥40,672', tag: 'warn' },
    { t: '1 小时前', who: '赵雪琳', what: '邀请新成员加入', meta: 'liu.mengqi@bytedance.com', tag: 'team' },
    { t: '2 小时前', who: '林思远', what: '撤销了密钥 sk-test-***l4nm', meta: 'staging · 发现泄漏', tag: 'security' },
  ];
  const tagColors = {
    call: 'var(--accent)',
    key: 'var(--accent-2)',
    config: 'var(--text-3)',
    warn: 'var(--accent-4)',
    team: 'var(--accent-3)',
    security: 'var(--accent-5)',
  };

  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 7', overflow: 'hidden' }}>
      <div
        style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--line-1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            活动流 <LiveDot />
          </div>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              marginTop: 3,
              letterSpacing: '0.06em',
            }}
          >
            LIVE · 24H
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['全部', '调用', '密钥', '团队', '告警'].map((t, i) => (
            <button
              key={t}
              type="button"
              style={{
                padding: '4px 10px',
                fontSize: 11,
                borderRadius: 4,
                background: i === 0 ? 'var(--bg-3)' : 'transparent',
                border: i === 0 ? '1px solid var(--line-2)' : '1px solid transparent',
                color: i === 0 ? 'var(--text-1)' : 'var(--text-3)',
                cursor: 'pointer',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div>
        {evs.map((e, i, arr) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr auto',
              gap: 16,
              padding: '14px 22px',
              alignItems: 'center',
              borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
              background: e.live ? 'rgba(125,211,252,0.025)' : 'transparent',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 10.5,
                color: 'var(--text-4)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {e.live && <LiveDot />}
              {e.t}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, color: 'var(--text-1)' }}>
                <span style={{ fontWeight: 500 }}>{e.who}</span>
                <span style={{ color: 'var(--text-3)' }}> {e.what}</span>
              </div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 3 }}>
                {e.meta}
              </div>
            </div>
            <div
              style={{
                fontSize: 9.5,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                padding: '2px 7px',
                borderRadius: 3,
                color: tagColors[e.tag],
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${tagColors[e.tag]}30`,
                textTransform: 'uppercase',
              }}
            >
              {e.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickActions = () => {
  const actions = [
    {
      t: 'Playground',
      d: '试用提示词与函数调用',
      ic: 'M8 5v14l11-7z',
      accent: 'var(--accent)',
      to: '/app/playground',
    },
    {
      t: '新密钥',
      d: '创建 production 密钥',
      ic: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3',
      accent: 'var(--accent-2)',
      to: '/app/keys',
    },
    {
      t: '邀请成员',
      d: '通过邮箱发送邀请',
      ic: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10 0v6m3-3h-6',
      accent: 'var(--accent-3)',
      to: '/app/team',
    },
    {
      t: '查看文档',
      d: 'API 参考 + SDK 示例',
      ic: 'M9 5h6m-6 4h6m-6 4h4m1 7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
      accent: 'var(--accent-4)',
      to: '/docs',
    },
  ];
  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 5', overflow: 'hidden' }}>
      <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line-1)' }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>快捷操作</div>
        <div
          className="mono"
          style={{
            fontSize: 10.5,
            color: 'var(--text-4)',
            marginTop: 3,
            letterSpacing: '0.06em',
          }}
        >
          QUICK ACTIONS
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {actions.map((a, i) => (
          <Link
            key={a.t}
            to={a.to}
            style={{
              padding: '20px 22px',
              textDecoration: 'none',
              color: 'var(--text-1)',
              borderRight: i % 2 === 0 ? '1px solid var(--line-1)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--line-1)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 80,
                height: 80,
                background: `radial-gradient(circle at top right, ${a.accent}10, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 7,
                background: `${a.accent}10`,
                border: `1px solid ${a.accent}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: a.accent,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={a.ic} />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{a.t}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-4)', marginTop: 3 }}>{a.d}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const TopKeysTable = () => {
  const keys = [
    { name: '飞书机器人 · 生产', id: 'sk-prod-feishu-***k29x', env: 'production', req: 487231, cost: 5023.4, last: '21 秒前' },
    { name: '文档 AI · OCR', id: 'sk-prod-doc-***p82a', env: 'production', req: 312540, cost: 3286.2, last: '2 分钟前' },
    { name: '内部测试', id: 'sk-staging-test-***m4n2', env: 'staging', req: 184320, cost: 1842.1, last: '14 分钟前' },
    { name: 'Mobile · iOS', id: 'sk-prod-mob-***q8r1', env: 'production', req: 156040, cost: 1562.8, last: '5 分钟前' },
    { name: '本地开发', id: 'sk-dev-local-***z3y8', env: 'dev', req: 89421, cost: 421.3, last: '1 小时前' },
  ];
  const envColor = {
    production: 'var(--accent-3)',
    staging: 'var(--accent-4)',
    dev: 'var(--accent)',
  };

  return (
    <div className="card-v2" style={{ padding: 0, gridColumn: 'span 12', overflow: 'hidden' }}>
      <div
        style={{
          padding: '18px 22px',
          borderBottom: '1px solid var(--line-1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>密钥用量 · TOP 5</div>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              marginTop: 3,
              letterSpacing: '0.06em',
            }}
          >
            BY REQUESTS · 7D
          </div>
        </div>
        <Link
          to="/app/keys"
          className="mono"
          style={{ fontSize: 11.5, color: 'var(--accent)', textDecoration: 'none' }}
        >
          查看全部 (12) →
        </Link>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.2fr 1fr 1.4fr 1fr 90px',
          padding: '10px 22px',
          borderBottom: '1px solid var(--line-1)',
          background: 'var(--bg-1)',
        }}
      >
        {['名称', '密钥 ID', '环境', '请求 / 成本', '最近使用', ''].map((h, idx) => (
          <div
            key={`${h}-${idx}`}
            className="mono"
            style={{
              fontSize: 10,
              color: 'var(--text-4)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {h}
          </div>
        ))}
      </div>
      {keys.map((k, i, arr) => {
        const pct = (k.req / keys[0].req) * 100;
        return (
          <div
            key={k.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.2fr 1fr 1.4fr 1fr 90px',
              padding: '14px 22px',
              alignItems: 'center',
              borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: `${pct}%`,
                background: 'linear-gradient(90deg, rgba(125,211,252,0.04), transparent)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', fontSize: 13, fontWeight: 500 }}>{k.name}</div>
            <div className="mono" style={{ position: 'relative', fontSize: 11.5, color: 'var(--text-3)' }}>
              {k.id}
            </div>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  fontSize: 10.5,
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 7px',
                  borderRadius: 3,
                  color: envColor[k.env],
                  background: `${envColor[k.env]}10`,
                  border: `1px solid ${envColor[k.env]}30`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {k.env}
              </span>
            </div>
            <div
              style={{
                position: 'relative',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              <div style={{ color: 'var(--text-1)' }}>{k.req.toLocaleString()}</div>
              <div style={{ color: 'var(--text-4)', fontSize: 10.5, marginTop: 2 }}>
                ¥{' '}
                {k.cost.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
            <div className="mono" style={{ position: 'relative', fontSize: 11.5, color: 'var(--text-3)' }}>
              {k.last}
            </div>
            <div style={{ position: 'relative', textAlign: 'right' }}>
              <button
                type="button"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--line-2)',
                  color: 'var(--text-3)',
                  borderRadius: 5,
                  padding: '3px 10px',
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                管理
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const BudgetCard = () => {
  const used = 12847.3;
  const cap = 50000;
  const pct = (used / cap) * 100;

  return (
    <div
      className="card-v2"
      style={{ padding: 0, gridColumn: 'span 4', overflow: 'hidden', position: 'relative' }}
    >
      <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line-1)' }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>本月预算</div>
        <div
          className="mono"
          style={{
            fontSize: 10.5,
            color: 'var(--text-4)',
            marginTop: 3,
            letterSpacing: '0.06em',
          }}
        >
          BUDGET · APR 2026
        </div>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            ¥ <TabularNum value={used} decimals={2} />
          </span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--text-4)' }}>
            / ¥ {cap.toLocaleString()}
          </span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 6 }}>
          {pct.toFixed(1)}% · 预计月底 ¥ 38,540
        </div>

        <div style={{ marginTop: 18, position: 'relative' }}>
          <div
            style={{
              height: 8,
              background: 'var(--bg-3)',
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                borderRadius: 4,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: -2,
                  bottom: -2,
                  width: 2,
                  background: '#fff',
                  borderRadius: 1,
                  boxShadow: '0 0 8px rgba(255,255,255,0.6)',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '77%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.15))',
                borderRadius: 4,
                pointerEvents: 'none',
              }}
            />
          </div>
          <div style={{ position: 'relative', height: 16, marginTop: 4 }}>
            {[
              { p: 25.7, l: '今日' },
              { p: 80, l: '告警', warn: true },
              { p: 100, l: '上限' },
            ].map((m) => (
              <div
                key={m.l}
                style={{
                  position: 'absolute',
                  left: `${m.p}%`,
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 1,
                    height: 4,
                    background: m.warn ? 'var(--accent-4)' : 'var(--line-3)',
                    margin: '0 auto',
                  }}
                />
                <div
                  className="mono"
                  style={{
                    fontSize: 9.5,
                    color: m.warn ? 'var(--accent-4)' : 'var(--text-4)',
                    marginTop: 2,
                  }}
                >
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div
            className="mono"
            style={{
              fontSize: 10,
              color: 'var(--text-4)',
              letterSpacing: '0.1em',
              marginBottom: 10,
            }}
          >
            BY GROUP
          </div>
          {[
            { g: '飞书智能', v: 6420, p: 50.0, c: 'var(--accent)' },
            { g: '文档 AI', v: 3814, p: 29.7, c: 'var(--accent-2)' },
            { g: '移动客户端', v: 1834, p: 14.3, c: 'var(--accent-3)' },
            { g: '其他', v: 779.3, p: 6.0, c: 'var(--text-4)' },
          ].map((g) => (
            <div
              key={g.g}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: g.c,
                  flexShrink: 0,
                }}
              />
              <span style={{ flex: 1, fontSize: 12, color: 'var(--text-2)' }}>{g.g}</span>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--text-3)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                ¥ {g.v.toLocaleString()}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  minWidth: 36,
                  textAlign: 'right',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {g.p}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommandPalette = ({ onClose }) => {
  const items = [
    { ic: '↗', t: '前往 Playground', s: 'NAV', kbd: '⏎' },
    { ic: '+', t: '创建新的 API 密钥', s: 'ACTION' },
    { ic: '⚙', t: '工作区设置', s: 'NAV' },
    { ic: '◇', t: '切换工作区 → 文档AI', s: 'WORKSPACE' },
    { ic: '◐', t: '切换主题 / 背景色调', s: 'PREFERENCE' },
    { ic: '⌘', t: '邀请成员', s: 'TEAM' },
    { ic: '?', t: '查看文档 → 错误码参考', s: 'DOCS' },
  ];
  return (
    <div
      onClick={onClose}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '14vh',
        zIndex: 100,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="命令面板"
        style={{
          width: 580,
          background: 'var(--bg-1)',
          border: '1px solid var(--line-2)',
          borderRadius: 12,
          boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(125,211,252,0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '14px 18px',
            borderBottom: '1px solid var(--line-1)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            placeholder="输入命令、跳转、或搜索…"
            style={{
              flex: 1,
              background: 'transparent',
              border: 0,
              color: 'var(--text-1)',
              fontSize: 14,
              outline: 'none',
              fontFamily: 'var(--font-sans)',
            }}
            autoFocus
          />
          <kbd
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              background: 'var(--bg-3)',
              padding: '2px 7px',
              borderRadius: 4,
              border: '1px solid var(--line-2)',
              color: 'var(--text-3)',
            }}
          >
            ESC
          </kbd>
        </div>
        <div style={{ padding: 8, maxHeight: 400, overflowY: 'auto' }}>
          <div
            className="mono"
            style={{
              fontSize: 10,
              color: 'var(--text-4)',
              letterSpacing: '0.12em',
              padding: '8px 12px 4px',
            }}
          >
            建议
          </div>
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '9px 12px',
                borderRadius: 6,
                cursor: 'pointer',
                background: i === 0 ? 'var(--bg-3)' : 'transparent',
                border: i === 0 ? '1px solid var(--line-2)' : '1px solid transparent',
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 5,
                  background: 'var(--bg-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: 'var(--text-3)',
                  flexShrink: 0,
                }}
              >
                {it.ic}
              </span>
              <span style={{ flex: 1, fontSize: 13 }}>{it.t}</span>
              <span
                className="mono"
                style={{ fontSize: 9.5, color: 'var(--text-4)', letterSpacing: '0.08em' }}
              >
                {it.s}
              </span>
              {it.kbd && (
                <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>
                  {it.kbd}
                </kbd>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            padding: '10px 14px',
            borderTop: '1px solid var(--line-1)',
            display: 'flex',
            justifyContent: 'space-between',
            background: 'var(--bg-0)',
          }}
        >
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
            ↑↓ 选择 · ⏎ 确认 · ESC 退出
          </div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
            BUSAPI · ⌘K
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [env, setEnv] = useState('production');
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === 'Escape' && paletteOpen) {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paletteOpen]);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--bg-0)',
        color: 'var(--text-1)',
        fontFamily: 'var(--font-sans)',
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes v2pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(2.4); opacity: 0; }
        }
        .card-v2 {
          background: linear-gradient(180deg, var(--bg-1), rgba(12,14,18,0.6));
          border: 1px solid var(--line-1);
          border-radius: 12px;
          transition: border-color .2s ease, transform .2s ease;
        }
        .card-v2:hover { border-color: var(--line-2); }
      `}</style>

      <SidebarV2
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        active="overview"
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBarV2 env={env} setEnv={setEnv} onOpenPalette={() => setPaletteOpen(true)} />

        <main style={{ flex: 1, overflowY: 'auto' }}>
          <HeroV2 />

          <div style={{ padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }}>
              <RequestsChart />
              <LatencyHeatmap />
              <ModelBreakdown />
              <ActivityStream />
              <QuickActions />
              <BudgetCard />
              <TopKeysTable />
            </div>

            <div
              style={{
                marginTop: 32,
                padding: '20px 24px',
                borderRadius: 10,
                background:
                  'linear-gradient(90deg, rgba(125,211,252,0.05), rgba(167,139,250,0.05))',
                border: '1px solid var(--line-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(125,211,252,0.1)',
                    border: '1px solid rgba(125,211,252,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>建议：开启跨厂商自动 Failover</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 3 }}>
                    过去 7 天上游有 3 次短暂故障，启用后可将受影响请求自动切换到备用厂商。
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <button
                  type="button"
                  style={{
                    padding: '7px 14px',
                    background: 'transparent',
                    border: '1px solid var(--line-2)',
                    borderRadius: 6,
                    color: 'var(--text-3)',
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  稍后
                </button>
                <button
                  type="button"
                  style={{
                    padding: '7px 14px',
                    background: 'var(--accent)',
                    color: '#052330',
                    border: 0,
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  立即开启 →
                </button>
              </div>
            </div>

            <div style={{ height: 24 }} />
          </div>
        </main>
      </div>

      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </div>
  );
}
