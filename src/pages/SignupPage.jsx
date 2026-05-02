import { Link, useNavigate } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

const socialButtons = [
  ['飞书', true],
  ['企业微信', false],
  ['GitHub', false],
  ['Google', false],
];

const stats = [
  ['¥ 5', '注册赠送'],
  ['200+', '可用模型'],
  ['99.99%', 'SLA 可用率'],
];

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-0)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        color: 'var(--text-1)',
      }}
    >
      <div
        style={{
          padding: '48px 64px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <BusWordmark />
        </Link>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 440,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <div style={{ width: '100%' }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              免费注册 · 赠 ¥ 5
            </div>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 500,
                letterSpacing: '-0.025em',
                margin: '0 0 12px',
              }}
            >
              开始你的第一次调用
            </h1>
            <p
              style={{
                color: 'var(--text-3)',
                fontSize: 14,
                margin: '0 0 32px',
              }}
            >
              只需 30 秒。无需信用卡。
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 8,
                marginBottom: 18,
              }}
            >
              {socialButtons.map(([n, p]) => (
                <button
                  key={n}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 6,
                    background: 'var(--bg-2)',
                    border: '1px solid var(--line-2)',
                    color: 'var(--text-1)',
                    fontSize: 13,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: 'var(--bg-3)',
                      display: 'inline-block',
                    }}
                  />
                  {n}
                  {p ? ' ↗' : ''}
                </button>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                margin: '20px 0',
              }}
            >
              <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                或使用邮箱
              </span>
              <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate('/app/dashboard');
              }}
            >
              <div style={{ display: 'grid', gap: 12 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                  }}
                >
                  <input className="input" placeholder="姓" />
                  <input className="input" placeholder="名" />
                </div>
                <input className="input" placeholder="企业邮箱" type="email" />
                <input
                  className="input"
                  placeholder="设置密码（至少 8 位）"
                  type="password"
                />
                <input className="input" placeholder="工作区名称（可稍后修改）" />
              </div>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                  marginTop: 16,
                  fontSize: 12,
                  color: 'var(--text-3)',
                  lineHeight: 1.55,
                  cursor: 'pointer',
                }}
              >
                <input type="checkbox" defaultChecked style={{ marginTop: 2 }} />
                <span>
                  我已阅读并同意{' '}
                  <a href="#" style={{ color: 'var(--accent)' }}>
                    服务条款
                  </a>{' '}
                  与{' '}
                  <a href="#" style={{ color: 'var(--accent)' }}>
                    隐私政策
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 18,
                  height: 44,
                }}
              >
                创建账户 →
              </button>
            </form>

            <div
              style={{
                marginTop: 18,
                fontSize: 13,
                color: 'var(--text-3)',
                textAlign: 'center',
              }}
            >
              已有账户？
              <Link
                to="/login"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                立即登录 →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mono"
          style={{
            fontSize: 11,
            color: 'var(--text-4)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>© BusAPI 2026</span>
          <span>状态 · 文档 · 帮助</span>
        </div>
      </div>

      <div
        style={{
          background: 'var(--bg-1)',
          borderLeft: '1px solid var(--line-1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: 'var(--text-4)',
            letterSpacing: '0.1em',
            marginBottom: 12,
          }}
        >
          30 秒上手
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            margin: '0 0 32px',
          }}
        >
          注册后立即可以这样调用：
        </h2>

        <div
          style={{
            background: 'var(--bg-0)',
            border: '1px solid var(--line-1)',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderBottom: '1px solid var(--line-1)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--bg-2)',
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#f87171' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#fbbf24' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#34d399' }} />
            <span
              className="mono"
              style={{ fontSize: 11, color: 'var(--text-4)', marginLeft: 8 }}
            >
              terminal · zsh
            </span>
          </div>
          <pre
            className="mono"
            style={{
              margin: 0,
              padding: 22,
              fontSize: 12.5,
              lineHeight: 1.75,
              color: 'var(--text-2)',
            }}
          >
            <span style={{ color: 'var(--text-4)' }}>$ </span>
            curl https://api.busapi.cn/v1/chat/completions \{'\n'}
            {'  '}-H{' '}
            <span style={{ color: 'var(--accent-3)' }}>
              "Authorization: Bearer sk-..."
            </span>{' '}
            \{'\n'}
            {'  '}-H{' '}
            <span style={{ color: 'var(--accent-3)' }}>
              "Content-Type: application/json"
            </span>{' '}
            \{'\n'}
            {'  '}-d <span style={{ color: 'var(--accent-3)' }}>{"'{"}</span>
            {'\n'}
            {'    '}
            <span style={{ color: 'var(--accent-2)' }}>"model"</span>:{' '}
            <span style={{ color: 'var(--accent-3)' }}>"claude-sonnet-4.5"</span>,
            {'\n'}
            {'    '}
            <span style={{ color: 'var(--accent-2)' }}>"messages"</span>: [
            {'{'}
            <span style={{ color: 'var(--accent-2)' }}>"role"</span>:
            <span style={{ color: 'var(--accent-3)' }}>"user"</span>,
            <span style={{ color: 'var(--accent-2)' }}>"content"</span>:
            <span style={{ color: 'var(--accent-3)' }}>"你好"</span>
            {'}'}]{'\n'}
            {'  '}
            <span style={{ color: 'var(--accent-3)' }}>{"}'"}</span>
          </pre>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: 16,
            background: 'var(--bg-2)',
            borderRadius: 8,
            border: '1px dashed var(--line-2)',
            fontSize: 12.5,
            color: 'var(--text-3)',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: 'var(--text-1)' }}>已用 OpenAI SDK？</strong> 仅需把
          base_url 替换为{' '}
          <code
            className="mono"
            style={{
              background: 'var(--bg-3)',
              padding: '1px 6px',
              borderRadius: 3,
              fontSize: 11.5,
            }}
          >
            https://api.busapi.cn/v1
          </code>
          ，其余代码无需改动。
        </div>

        <div
          style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {stats.map(([k, v]) => (
            <div key={k}>
              <div
                className="mono"
                style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}
              >
                {k}
              </div>
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 4 }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
