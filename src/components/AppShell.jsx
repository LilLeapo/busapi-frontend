import { Link, NavLink } from 'react-router-dom';
import { BusWordmark } from './BusLogo.jsx';

const items = [
  { l: '总览', icon: '◆', k: 'overview', to: '/app/dashboard' },
  { l: '模型市场', icon: '◇', k: 'models', to: '/models' },
  { l: 'API 密钥', icon: '⌗', k: 'keys', to: '/app/keys' },
  { l: '用量统计', icon: '⌐', k: 'usage', to: '/app/usage' },
  { l: '账单', icon: '¥', k: 'billing', to: '/app/billing' },
  { l: '团队', icon: '◉', k: 'team', to: '/app/team' },
  { l: '审计日志', icon: '☰', k: 'audit', to: '/app/audit' },
  { l: '设置', icon: '✦', k: 'settings', to: '/app/settings' },
];

const resources = [
  { l: '文档', to: '/docs' },
  { l: '状态', to: '/status' },
  { l: 'Playground', to: '/app/playground' },
];

export const AppShell = ({ active, children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '232px 1fr',
        minHeight: '100vh',
        background: 'var(--bg-0)',
      }}
    >
      <aside
        style={{
          borderRight: '1px solid var(--line-1)',
          padding: '20px 14px',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
          background: 'var(--bg-1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ padding: '6px 8px', marginBottom: 20 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <BusWordmark />
          </Link>
        </div>

        <div
          style={{
            padding: '8px 10px',
            marginBottom: 14,
            borderRadius: 8,
            border: '1px solid var(--line-1)',
            background: 'var(--bg-2)',
            cursor: 'pointer',
          }}
        >
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
            WORKSPACE
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 3,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 500 }}>飞书智能</span>
            <span style={{ fontSize: 10, color: 'var(--text-4)' }}>▾</span>
          </div>
        </div>

        <div
          className="mono"
          style={{
            fontSize: 10,
            color: 'var(--text-4)',
            padding: '12px 8px 6px',
            letterSpacing: '0.1em',
          }}
        >
          WORKSPACE
        </div>
        {items.map((item) => (
          <NavLink
            key={item.k}
            to={item.to}
            style={() => {
              const isActive = active === item.k;
              return {
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 6,
                marginBottom: 1,
                fontSize: 13,
                color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                background: isActive ? 'var(--bg-3)' : 'transparent',
                textDecoration: 'none',
              };
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: active === item.k ? 'var(--accent)' : 'var(--text-4)',
                width: 12,
                textAlign: 'center',
              }}
            >
              {item.icon}
            </span>
            <span>{item.l}</span>
          </NavLink>
        ))}
        <div
          className="mono"
          style={{
            fontSize: 10,
            color: 'var(--text-4)',
            padding: '20px 8px 6px',
            letterSpacing: '0.1em',
          }}
        >
          资源
        </div>
        {resources.map((r) => (
          <Link
            key={r.l}
            to={r.to}
            style={{
              display: 'block',
              padding: '8px 10px',
              borderRadius: 6,
              fontSize: 13,
              color: 'var(--text-2)',
              textDecoration: 'none',
            }}
          >
            {r.l}
          </Link>
        ))}

        <div style={{ flex: 1 }} />

        <div
          style={{
            padding: 12,
            borderRadius: 8,
            background: 'var(--bg-2)',
            border: '1px solid var(--line-1)',
            marginTop: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: 'linear-gradient(135deg, #7dd3fc, #a78bfa)',
                flexShrink: 0,
              }}
            />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                陈晓东
              </div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
                admin
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main style={{ minWidth: 0 }}>{children}</main>
    </div>
  );
};

export const PageHeader = ({ title, subtitle, actions }) => (
  <div
    style={{
      padding: '24px 32px',
      borderBottom: '1px solid var(--line-1)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
    }}
  >
    <div>
      <div
        className="mono"
        style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 4 }}
      >
        {subtitle}
      </div>
      <h1 style={{ margin: 0, fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em' }}>
        {title}
      </h1>
    </div>
    {actions ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{actions}</div>
    ) : null}
  </div>
);
