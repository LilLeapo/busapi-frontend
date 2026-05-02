import { Link, useNavigate } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'var(--bg-0)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: 40,
            }}
          >
            <BusWordmark />
          </Link>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: '0 0 8px',
            }}
          >
            登录控制台
          </h1>
          <p style={{ fontSize: 14.5, color: 'var(--text-3)', margin: '0 0 32px' }}>
            欢迎回来。还没有账户？
            <Link
              to="/signup"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              免费注册 →
            </Link>
          </p>

          <div style={{ display: 'grid', gap: 8, marginBottom: 24 }}>
            {[
              ['使用 Google 登录', '#fff'],
              ['使用 微信 登录', '#1aad19'],
              ['使用 飞书 登录', '#0080ff'],
            ].map(([label, color]) => (
              <button
                key={label}
                className="btn btn-ghost"
                style={{ width: '100%', justifyContent: 'center', height: 42 }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    background: color,
                    borderRadius: 3,
                    display: 'inline-block',
                  }}
                />
                {label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              margin: '24px 0',
            }}
          >
            <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              OR
            </span>
            <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/app/dashboard');
            }}
            style={{ display: 'grid', gap: 14 }}
          >
            <div>
              <label
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--text-3)',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                邮箱
              </label>
              <input
                className="input"
                type="email"
                placeholder="you@company.com"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <label
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-3)' }}
                >
                  密码
                </label>
                <a
                  href="#"
                  style={{
                    fontSize: 11,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                  }}
                >
                  忘记密码?
                </a>
              </div>
              <input
                className="input"
                type="password"
                placeholder="••••••••••"
                style={{ width: '100%' }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginTop: 6,
                height: 42,
              }}
            >
              登录
            </button>
          </form>

          <div
            style={{
              marginTop: 32,
              paddingTop: 20,
              borderTop: '1px solid var(--line-1)',
              fontSize: 12,
              color: 'var(--text-4)',
              lineHeight: 1.6,
            }}
          >
            登录即表示同意 BusAPI 的{' '}
            <a href="#" style={{ color: 'var(--text-3)' }}>
              服务条款
            </a>{' '}
            与{' '}
            <a href="#" style={{ color: 'var(--text-3)' }}>
              隐私政策
            </a>
            。
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, var(--bg-1), var(--bg-0))',
          borderLeft: '1px solid var(--line-1)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle, rgba(125,211,252,0.15), transparent 60%)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 420, padding: 40 }}>
          <blockquote
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              lineHeight: 1.45,
              letterSpacing: '-0.018em',
              color: 'var(--text-1)',
              fontWeight: 400,
            }}
          >
            "我们三个产品线共用一份配额，财务对账时间从两天缩短到二十分钟。"
          </blockquote>
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: 'linear-gradient(135deg, #7dd3fc, #a78bfa)',
              }}
            />
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>陈晓东</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-3)', marginTop: 2 }}>
                头部短视频平台 · AI 平台负责人
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
