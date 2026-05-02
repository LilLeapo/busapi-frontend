import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: 32,
        textAlign: 'center',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BusWordmark />
      </Link>
      <div
        className="mono"
        style={{
          fontSize: 96,
          fontWeight: 500,
          color: 'var(--text-4)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1
        style={{
          margin: 0,
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
        }}
      >
        页面未找到
      </h1>
      <p
        style={{
          margin: 0,
          color: 'var(--text-3)',
          fontSize: 14,
          maxWidth: 420,
          lineHeight: 1.6,
        }}
      >
        这个地址不在 BusAPI 的航线上。
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link className="btn btn-primary" to="/">
          回到首页
        </Link>
        <Link className="btn btn-ghost" to="/docs">
          查看文档
        </Link>
      </div>
    </div>
  );
}
