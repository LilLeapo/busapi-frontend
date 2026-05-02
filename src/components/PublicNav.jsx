import { Link, NavLink } from 'react-router-dom';
import { BusWordmark } from './BusLogo.jsx';

/**
 * Simple top nav used on public marketing-style pages where we want
 * to highlight a specific label (e.g. pricing, models). Keeps navigation
 * consistent with the main TopNav but allows page-level highlighting.
 */
export const PublicNav = ({ active }) => (
  <nav
    style={{
      height: 64,
      borderBottom: '1px solid var(--line-1)',
      background: 'rgba(7,8,10,0.72)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
    }}
  >
    <div
      className="container"
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <BusWordmark />
        </Link>
        <div style={{ display: 'flex', gap: 4 }}>
          {[
            { l: '产品', to: '/' },
            { l: '模型', to: '/models' },
            { l: '定价', to: '/pricing' },
            { l: '文档', to: '/docs' },
            { l: '对比', to: '/compare' },
            { l: '企业', to: '/enterprise' },
          ].map(({ l, to }) => {
            const isActive = active === l;
            return (
              <NavLink
                key={l}
                to={to}
                end={to === '/'}
                style={{
                  padding: '6px 12px',
                  fontSize: 13.5,
                  color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                  textDecoration: 'none',
                }}
              >
                {l}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link className="btn btn-sm" style={{ color: 'var(--text-2)' }} to="/login">
          登录
        </Link>
        <Link className="btn btn-primary btn-sm" to="/signup">
          免费试用 →
        </Link>
      </div>
    </div>
  </nav>
);
