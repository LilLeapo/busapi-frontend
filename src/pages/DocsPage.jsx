import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

export default function DocsPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <nav
        style={{
          height: 56,
          borderBottom: '1px solid var(--line-1)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          background: 'var(--bg-1)',
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <BusWordmark small />
        </Link>
        <span style={{ marginLeft: 12, fontSize: 13, color: 'var(--text-3)' }}>/ 文档</span>
        <div style={{ flex: 1 }} />
        <input
          className="input"
          placeholder="🔍  搜索文档..."
          style={{ width: 280, height: 32, fontSize: 12 }}
        />
        <Link
          className="btn btn-ghost btn-sm"
          to="/app/dashboard"
          style={{ marginLeft: 12 }}
        >
          控制台 →
        </Link>
      </nav>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr 240px',
          minHeight: 'calc(100vh - 56px)',
        }}
      >
        <aside
          style={{
            borderRight: '1px solid var(--line-1)',
            padding: '24px 16px',
            fontSize: 13,
          }}
        >
          {[
            { t: '入门', items: ['快速开始', '认证', '第一次请求', 'SDK 列表'], active: '快速开始' },
            { t: '指南', items: ['Chat Completions', 'Streaming', '函数调用', '嵌入向量', '图像生成', '内容审核'] },
            { t: '能力', items: ['密钥管理', '速率限制', '重试策略', '故障转移'] },
            { t: '集成', items: ['LangChain', 'LlamaIndex', 'Vercel AI SDK', 'Cursor / Cline'] },
            {
              t: '参考',
              items: [
                { label: 'API 参考', to: '#' },
                { label: '错误码', to: '/docs/errors' },
                { label: '变更日志', to: '#' },
              ],
            },
          ].map((group) => (
            <div key={group.t} style={{ marginBottom: 24 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  letterSpacing: '0.1em',
                  marginBottom: 8,
                  padding: '0 8px',
                  textTransform: 'uppercase',
                }}
              >
                {group.t}
              </div>
              {group.items.map((i) => {
                const label = typeof i === 'string' ? i : i.label;
                const to = typeof i === 'string' ? '#' : i.to;
                const isActive = group.active === label;
                const Component = to && to !== '#' ? Link : 'a';
                const props =
                  Component === Link ? { to } : { href: '#' };
                return (
                  <Component
                    key={label}
                    {...props}
                    style={{
                      display: 'block',
                      padding: '6px 10px',
                      borderRadius: 5,
                      color: isActive ? 'var(--text-1)' : 'var(--text-3)',
                      background: isActive ? 'var(--bg-3)' : 'transparent',
                      textDecoration: 'none',
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </Component>
                );
              })}
            </div>
          ))}
        </aside>

        <main style={{ padding: '40px 56px', maxWidth: 760 }}>
          <div
            className="mono"
            style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 8 }}
          >
            入门 / 快速开始
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: '0 0 12px',
            }}
          >
            快速开始
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.65 }}>
            BusAPI 完全兼容 OpenAI Chat Completions 协议。如果你已经在使用 OpenAI SDK，只需修改{' '}
            <code
              style={{
                background: 'var(--bg-3)',
                padding: '1px 6px',
                borderRadius: 3,
                fontSize: 13,
                color: 'var(--accent)',
              }}
            >
              base_url
            </code>{' '}
            即可切换到 BusAPI。
          </p>

          <h2 style={{ marginTop: 40, fontSize: 20, fontWeight: 500 }}>
            1. 获取 API 密钥
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.65 }}>
            登录控制台后，进入「API 密钥」页面，点击「+ 新建密钥」，命名后即可复制使用。
            <strong style={{ color: 'var(--text-1)' }}>密钥仅在创建时完整显示一次</strong>。
          </p>

          <h2 style={{ marginTop: 40, fontSize: 20, fontWeight: 500 }}>
            2. 发送第一个请求
          </h2>
          <div
            style={{
              marginTop: 16,
              border: '1px solid var(--line-1)',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                borderBottom: '1px solid var(--line-1)',
                background: 'var(--bg-1)',
              }}
            >
              {['Python', 'Node.js', 'curl', 'Go'].map((t, i) => (
                <button
                  key={t}
                  style={{
                    padding: '10px 16px',
                    fontSize: 12,
                    borderRadius: 0,
                    border: 'none',
                    borderBottom:
                      i === 0 ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                    background: 'transparent',
                    color: i === 0 ? 'var(--text-1)' : 'var(--text-3)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <pre
              className="mono"
              style={{
                margin: 0,
                padding: 22,
                fontSize: 13,
                lineHeight: 1.7,
                color: 'var(--text-2)',
                background: 'var(--bg-1)',
                overflow: 'auto',
              }}
            >
              <span style={{ color: 'var(--accent-2)' }}>from</span> openai{' '}
              <span style={{ color: 'var(--accent-2)' }}>import</span> OpenAI{'\n\n'}
              client = OpenAI({'\n'}
              {'    '}
              <span style={{ color: 'var(--accent)' }}>api_key</span>=
              <span style={{ color: 'var(--accent-3)' }}>"sk-bus-..."</span>,{'\n'}
              {'    '}
              <span style={{ color: 'var(--accent)' }}>base_url</span>=
              <span style={{ color: 'var(--accent-3)' }}>
                "https://api.busapi.cn/v1"
              </span>
              {'\n'}
              ){'\n\n'}
              resp = client.chat.completions.create({'\n'}
              {'    '}
              <span style={{ color: 'var(--accent)' }}>model</span>=
              <span style={{ color: 'var(--accent-3)' }}>"claude-sonnet-4-5"</span>,{'\n'}
              {'    '}
              <span style={{ color: 'var(--accent)' }}>messages</span>=[
              {'{'}
              <span style={{ color: 'var(--accent-3)' }}>"role"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>"user"</span>,{' '}
              <span style={{ color: 'var(--accent-3)' }}>"content"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>"你好"</span>
              {'}'}]{'\n'}
              ){'\n\n'}
              <span style={{ color: 'var(--text-4)' }}>print</span>(resp.choices[
              <span style={{ color: 'var(--accent-4)' }}>0</span>].message.content)
            </pre>
          </div>

          <div
            style={{
              marginTop: 24,
              padding: 16,
              borderRadius: 8,
              background: 'rgba(125,211,252,0.06)',
              border: '1px solid rgba(125,211,252,0.2)',
            }}
          >
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ color: 'var(--accent)', fontSize: 14 }}>ⓘ</span>
              <div style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.6 }}>
                所有 BusAPI 端点都接受 OpenAI 格式的请求。要切换到 Claude 或 Gemini，仅需修改{' '}
                <code
                  className="mono"
                  style={{
                    background: 'var(--bg-3)',
                    padding: '1px 6px',
                    borderRadius: 3,
                    fontSize: 12,
                  }}
                >
                  model
                </code>{' '}
                字段。
              </div>
            </div>
          </div>

          <h2 style={{ marginTop: 40, fontSize: 20, fontWeight: 500 }}>
            3. 处理响应
          </h2>
          <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.65 }}>
            响应格式与 OpenAI 完全一致。如果你的代码已经在处理 OpenAI 响应，无需任何改动即可工作。
          </p>
        </main>

        <aside style={{ borderLeft: '1px solid var(--line-1)', padding: '40px 20px', fontSize: 12.5 }}>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            本页内容
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            {['1. 获取 API 密钥', '2. 发送第一个请求', '3. 处理响应', '4. 错误处理', '5. 下一步'].map(
              (t, i) => (
                <li key={t}>
                  <a
                    href="#"
                    style={{
                      color: i === 0 ? 'var(--accent)' : 'var(--text-3)',
                      textDecoration: 'none',
                      borderLeft:
                        i === 0 ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                      paddingLeft: 10,
                      display: 'block',
                    }}
                  >
                    {t}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
}
