import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

const codes = [
  [400, 'invalid_request_error', '请求格式错误，例如 JSON 解析失败、字段类型不匹配。', '检查 Content-Type 和请求体格式。'],
  [401, 'authentication_error', 'API 密钥缺失、无效或已撤销。', '在控制台 → API 密钥重新生成。'],
  [403, 'permission_denied', '密钥权限不足，或访问的资源不属于当前工作区。', '检查密钥的作用域与工作区匹配。'],
  [404, 'not_found', '模型 ID 错误或资源已删除。', '在 /v1/models 列出当前可用模型。'],
  [422, 'invalid_parameter', '某个参数值超出范围（如 temperature > 2）。', '参考各模型参数限制说明。'],
  [429, 'rate_limit_exceeded', '触发了 RPM 或 TPM 限制。', '指数退避后重试，或申请提高配额。'],
  [499, 'request_canceled', '客户端断开连接，请求被取消。', '检查超时设置；流式响应建议保持连接。'],
  [500, 'internal_server_error', '我们这边出了问题，已自动告警。', '请重试，若持续请联系支持。'],
  [502, 'upstream_error', '上游模型厂商返回了非 2xx 响应。', '通常是临时性，开启 Failover 可缓解。'],
  [503, 'service_unavailable', '当前节点维护或负载过高。', '客户端应自动重试。'],
  [504, 'upstream_timeout', '上游响应超过 60 秒未返回。', '减小输入长度或使用 stream:true。'],
];

const sevColor = (c) => (c >= 500 ? '#f87171' : c >= 400 ? '#fbbf24' : 'var(--accent)');

const sidebarGroups = [
  ['入门', ['快速开始', '认证', 'SDK 安装']],
  ['核心', ['Chat Completions', 'Embeddings', 'Images', 'Audio']],
  ['高级', ['流式响应', '函数调用', '结构化输出', 'Vision']],
  ['参考', ['模型列表', '参数说明', '限速规则', '错误码']],
];

export default function ErrorsPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <nav
        style={{
          height: 64,
          borderBottom: '1px solid var(--line-1)',
          background: 'var(--bg-1)',
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <BusWordmark />
          </Link>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
            DOCS · 错误码参考
          </div>
        </div>
      </nav>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr 220px',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        <aside
          style={{
            borderRight: '1px solid var(--line-1)',
            padding: '32px 18px',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          {sidebarGroups.map(([g, items]) => (
            <div key={g} style={{ marginBottom: 24 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: 'var(--text-4)',
                  letterSpacing: '0.12em',
                  marginBottom: 10,
                }}
              >
                {g.toUpperCase()}
              </div>
              {items.map((it) => {
                const isActive = g === '参考' && it === '错误码';
                const linkTo = isActive ? '/docs/errors' : '/docs';
                return (
                  <Link
                    key={it}
                    to={linkTo}
                    style={{
                      display: 'block',
                      padding: '6px 10px',
                      fontSize: 12.5,
                      color: isActive ? 'var(--accent)' : 'var(--text-2)',
                      background: isActive ? 'rgba(125,211,252,0.06)' : 'transparent',
                      borderRadius: 5,
                      textDecoration: 'none',
                      marginBottom: 1,
                    }}
                  >
                    {it}
                  </Link>
                );
              })}
            </div>
          ))}
        </aside>

        <article style={{ padding: '48px 56px', minWidth: 0 }}>
          <div
            className="mono"
            style={{ fontSize: 11, color: 'var(--text-4)', letterSpacing: '0.1em' }}
          >
            参考 / 错误码
          </div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: '8px 0 16px',
            }}
          >
            错误码参考
          </h1>
          <p
            style={{
              fontSize: 14.5,
              color: 'var(--text-3)',
              lineHeight: 1.7,
              margin: '0 0 32px',
            }}
          >
            所有错误响应使用统一格式。HTTP 状态码 + 错误对象帮助你定位问题并自动重试。
          </p>

          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line-1)',
              borderRadius: 8,
              overflow: 'hidden',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                padding: '10px 14px',
                borderBottom: '1px solid var(--line-1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--bg-2)',
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                JSON · 错误响应示例
              </span>
              <button className="btn btn-ghost btn-sm" style={{ padding: '4px 10px' }}>
                复制
              </button>
            </div>
            <pre
              className="mono"
              style={{
                margin: 0,
                padding: 18,
                fontSize: 12,
                lineHeight: 1.7,
                color: 'var(--text-2)',
              }}
            >
              {'{'}
              {'\n  '}
              <span style={{ color: 'var(--accent-2)' }}>"error"</span>: {'{'}
              {'\n    '}
              <span style={{ color: 'var(--accent-2)' }}>"type"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>"rate_limit_exceeded"</span>,
              {'\n    '}
              <span style={{ color: 'var(--accent-2)' }}>"message"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>
                "You exceeded 10000 TPM for claude-sonnet-4.5."
              </span>
              ,{'\n    '}
              <span style={{ color: 'var(--accent-2)' }}>"code"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>"tpm_exceeded"</span>,
              {'\n    '}
              <span style={{ color: 'var(--accent-2)' }}>"request_id"</span>:{' '}
              <span style={{ color: 'var(--accent-3)' }}>
                "req_01JXKM7Q2N4P9R8S3T6V8W0Z2Y"
              </span>
              {'\n  }'}
              {'\n}'}
            </pre>
          </div>

          <h2
            style={{
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: '-0.018em',
              margin: '0 0 16px',
            }}
          >
            状态码列表
          </h2>

          <div style={{ display: 'grid', gap: 10 }}>
            {codes.map(([code, type, desc, fix]) => (
              <div
                key={code}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 200px 1fr',
                  gap: 20,
                  padding: 18,
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line-1)',
                  borderRadius: 8,
                  alignItems: 'start',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    color: sevColor(code),
                    letterSpacing: '-0.01em',
                  }}
                >
                  {code}
                </div>
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 12.5,
                      color: 'var(--text-1)',
                      wordBreak: 'break-all',
                    }}
                  >
                    {type}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    {desc}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'var(--text-4)',
                      marginTop: 6,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 6,
                    }}
                  >
                    <span style={{ color: 'var(--accent-3)' }}>↳</span>
                    <span>{fix}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2
            style={{
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: '-0.018em',
              margin: '40px 0 16px',
            }}
          >
            重试策略
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7 }}>
            建议对{' '}
            {['429', '500', '502', '503', '504'].map((c, i, arr) => (
              <span key={c}>
                <code
                  className="mono"
                  style={{
                    background: 'var(--bg-2)',
                    padding: '1px 6px',
                    borderRadius: 3,
                    fontSize: 12.5,
                    color: 'var(--accent)',
                  }}
                >
                  {c}
                </code>
                {i < arr.length - 1 ? '、' : ''}
              </span>
            ))}{' '}
            实施指数退避，最多重试 3 次。所有官方 SDK 已默认启用。
          </p>
        </article>

        <aside style={{ padding: '48px 24px', minWidth: 0 }}>
          <div
            className="mono"
            style={{
              fontSize: 10,
              color: 'var(--text-4)',
              letterSpacing: '0.12em',
              marginBottom: 12,
            }}
          >
            本页
          </div>
          {['错误响应格式', '状态码列表', '重试策略', '幂等键', 'request_id 排查'].map(
            (t, i) => (
              <a
                key={t}
                href="#"
                style={{
                  display: 'block',
                  padding: '5px 0',
                  fontSize: 12,
                  color: i === 1 ? 'var(--text-1)' : 'var(--text-3)',
                  textDecoration: 'none',
                  borderLeft:
                    i === 1 ? '2px solid var(--accent)' : '2px solid transparent',
                  paddingLeft: 12,
                  marginLeft: -2,
                }}
              >
                {t}
              </a>
            )
          )}
        </aside>
      </div>
    </div>
  );
}
