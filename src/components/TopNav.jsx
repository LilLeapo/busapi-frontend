import { Link, NavLink } from 'react-router-dom';
import { BusWordmark } from './BusLogo.jsx';

const navLinks = [
  { label: '产品', to: '/' },
  { label: '模型', to: '/models' },
  { label: '定价', to: '/pricing' },
  { label: '文档', to: '/docs' },
  { label: '对比', to: '/compare' },
  { label: '企业', to: '/enterprise' },
];

export const TopNav = ({ activeLabel }) => (
  <nav
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 64,
      borderBottom: '1px solid var(--line-1)',
      background: 'rgba(7,8,10,0.72)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
    }}
  >
    <div
      className="container"
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <BusWordmark />
        </Link>
        <div style={{ display: 'flex', gap: 4 }}>
          {navLinks.map((l) => {
            const active = activeLabel ? activeLabel === l.label : false;
            return (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.to === '/'}
                style={({ isActive }) => ({
                  padding: '6px 12px',
                  fontSize: 13.5,
                  color: active || isActive ? 'var(--text-1)' : 'var(--text-2)',
                  textDecoration: 'none',
                  borderRadius: 6,
                })}
              >
                {l.label}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link
          className="btn btn-sm"
          style={{ color: 'var(--text-2)' }}
          to="/login"
        >
          登录
        </Link>
        <Link className="btn btn-primary btn-sm" to="/signup">
          免费试用 →
        </Link>
      </div>
    </div>
  </nav>
);
