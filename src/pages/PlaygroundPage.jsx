import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

const history = [
  '调试函数调用提示词',
  '中文翻译质量对比',
  'JSON Mode 测试',
  'Vision: 发票 OCR',
  '长文档摘要 (Gemini 2M)',
];

export default function PlaygroundPage() {
  return (
    <div
      style={{
        background: 'var(--bg-0)',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '232px 1fr',
        color: 'var(--text-1)',
      }}
    >
      <aside
        style={{
          borderRight: '1px solid var(--line-1)',
          padding: '20px 14px',
          background: 'var(--bg-1)',
        }}
      >
        <div style={{ padding: '6px 8px', marginBottom: 20 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <BusWordmark />
          </Link>
        </div>
        <Link
          to="/app/dashboard"
          style={{
            display: 'block',
            padding: '8px 10px',
            borderRadius: 6,
            fontSize: 13,
            color: 'var(--text-2)',
            textDecoration: 'none',
          }}
        >
          ← 返回控制台
        </Link>
        <div
          className="mono"
          style={{
            fontSize: 10,
            color: 'var(--text-4)',
            padding: '12px 8px 6px',
            letterSpacing: '0.1em',
          }}
        >
          对话历史
        </div>
        {history.map((t, i) => (
          <div
            key={t}
            style={{
              padding: '8px 10px',
              borderRadius: 6,
              fontSize: 12.5,
              color: i === 0 ? 'var(--text-1)' : 'var(--text-2)',
              background: i === 0 ? 'var(--bg-3)' : 'transparent',
              cursor: 'pointer',
              marginBottom: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {t}
          </div>
        ))}
      </aside>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              padding: '18px 28px',
              borderBottom: '1px solid var(--line-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                PLAYGROUND
              </div>
              <h1
                style={{ margin: 0, marginTop: 2, fontSize: 18, fontWeight: 500 }}
              >
                调试函数调用提示词
              </h1>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm">分享</button>
              <button className="btn btn-ghost btn-sm">查看 cURL</button>
              <button className="btn btn-primary btn-sm">保存到代码片段</button>
            </div>
          </div>

          <div style={{ flex: 1, padding: '24px 28px', overflowY: 'auto' }}>
            <div style={{ marginBottom: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  marginBottom: 6,
                  letterSpacing: '0.08em',
                }}
              >
                SYSTEM
              </div>
              <div
                style={{
                  padding: 14,
                  background: 'var(--bg-2)',
                  borderRadius: 8,
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: 'var(--text-2)',
                  border: '1px dashed var(--line-2)',
                }}
              >
                你是一个客服助手。当用户询问订单状态时，调用{' '}
                <code
                  className="mono"
                  style={{
                    background: 'var(--bg-3)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    fontSize: 12,
                    color: 'var(--accent)',
                  }}
                >
                  get_order_status
                </code>{' '}
                函数。
              </div>
            </div>

            <div
              style={{
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: 'var(--text-4)',
                    marginBottom: 6,
                    letterSpacing: '0.08em',
                    textAlign: 'right',
                  }}
                >
                  USER
                </div>
                <div
                  style={{
                    padding: 14,
                    background: 'rgba(125,211,252,0.08)',
                    border: '1px solid rgba(125,211,252,0.2)',
                    borderRadius: 8,
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  我的订单 #A7820391 现在到哪儿了？
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  marginBottom: 6,
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span>ASSISTANT · claude-sonnet-4.5</span>
                <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
                <span>412 tok · 1.23s · ¥ 0.0089</span>
              </div>
              <div
                style={{
                  padding: 14,
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line-1)',
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '4px 10px',
                    borderRadius: 5,
                    background: 'var(--bg-3)',
                    border: '1px solid var(--line-2)',
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: 'var(--accent-2)',
                    }}
                  />
                  <span className="mono" style={{ fontSize: 11.5 }}>
                    tool_call · get_order_status
                  </span>
                </div>
                <pre
                  className="mono"
                  style={{
                    margin: 0,
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: 'var(--text-2)',
                    background: 'var(--bg-2)',
                    padding: 12,
                    borderRadius: 6,
                    overflow: 'auto',
                  }}
                >
                  {'{\n  '}
                  <span style={{ color: 'var(--accent-2)' }}>"order_id"</span>:{' '}
                  <span style={{ color: 'var(--accent-3)' }}>"A7820391"</span>
                  {'\n}'}
                </pre>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  marginBottom: 6,
                  letterSpacing: '0.08em',
                }}
              >
                TOOL · get_order_status
              </div>
              <pre
                className="mono"
                style={{
                  margin: 0,
                  padding: 14,
                  fontSize: 12,
                  lineHeight: 1.65,
                  color: 'var(--text-2)',
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line-1)',
                  borderRadius: 8,
                  overflow: 'auto',
                }}
              >
                {`{ "status": "in_transit", "carrier": "顺丰", "eta": "2026-05-04" }`}
              </pre>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  marginBottom: 6,
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span>ASSISTANT · claude-sonnet-4.5</span>
                <span style={{ flex: 1, height: 1, background: 'var(--line-1)' }} />
                <span>168 tok · 0.84s · ¥ 0.0036</span>
              </div>
              <div
                style={{
                  padding: 14,
                  background: 'var(--bg-1)',
                  border: '1px solid var(--line-1)',
                  borderRadius: 8,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'var(--text-2)',
                }}
              >
                你的订单{' '}
                <strong className="mono" style={{ color: 'var(--text-1)' }}>
                  #A7820391
                </strong>{' '}
                已由顺丰运输中，预计{' '}
                <strong style={{ color: 'var(--text-1)' }}>
                  2026 年 5 月 4 日
                </strong>{' '}
                送达。是否需要我帮你联系派件员？
              </div>
            </div>
          </div>

          <div
            style={{
              padding: 20,
              borderTop: '1px solid var(--line-1)',
              background: 'var(--bg-1)',
            }}
          >
            <div
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--line-2)',
                borderRadius: 10,
                padding: 12,
              }}
            >
              <textarea
                placeholder="继续对话…"
                rows={2}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 0,
                  color: 'var(--text-1)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13.5,
                  resize: 'none',
                  outline: 'none',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: 6 }}>
                  {['📎', '🖼', '🔧'].map((i) => (
                    <button
                      key={i}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--line-1)',
                        borderRadius: 5,
                        padding: '4px 8px',
                        color: 'var(--text-3)',
                        fontSize: 12,
                        cursor: 'pointer',
                      }}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                <button className="btn btn-primary btn-sm">发送 ⏎</button>
              </div>
            </div>
          </div>
        </div>

        <aside
          style={{
            borderLeft: '1px solid var(--line-1)',
            padding: 20,
            background: 'var(--bg-1)',
            overflowY: 'auto',
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: 'var(--text-4)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            参数
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: 'var(--text-2)',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                模型
              </label>
              <select
                className="input"
                style={{ width: '100%' }}
                defaultValue="claude-sonnet-4.5"
              >
                <option>gpt-5</option>
                <option>claude-sonnet-4.5</option>
                <option>gemini-2.5-pro</option>
                <option>o4-mini</option>
              </select>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <label style={{ fontSize: 12, color: 'var(--text-2)' }}>
                  Temperature
                </label>
                <span
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-3)' }}
                >
                  0.7
                </span>
              </div>
              <input type="range" min="0" max="2" step="0.1" defaultValue="0.7" />
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <label style={{ fontSize: 12, color: 'var(--text-2)' }}>Top P</label>
                <span
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-3)' }}
                >
                  1.0
                </span>
              </div>
              <input type="range" min="0" max="1" step="0.05" defaultValue="1" />
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6,
                }}
              >
                <label style={{ fontSize: 12, color: 'var(--text-2)' }}>
                  Max tokens
                </label>
                <span
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-3)' }}
                >
                  4096
                </span>
              </div>
              <input
                type="range"
                min="256"
                max="32000"
                step="256"
                defaultValue="4096"
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: 'var(--text-2)',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                Streaming
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'var(--bg-2)',
                  borderRadius: 6,
                  border: '1px solid var(--line-1)',
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 16,
                    borderRadius: 999,
                    background: 'var(--accent)',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      right: 2,
                      top: 2,
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: '#fff',
                    }}
                  />
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-2)' }}>
                  启用流式响应
                </span>
              </div>
            </div>
            <div>
              <label
                style={{
                  fontSize: 12,
                  color: 'var(--text-2)',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                函数 / 工具
              </label>
              <div
                style={{
                  padding: 10,
                  background: 'var(--bg-2)',
                  borderRadius: 6,
                  border: '1px dashed var(--line-2)',
                  fontSize: 11.5,
                  color: 'var(--text-3)',
                }}
              >
                <span className="mono" style={{ color: 'var(--accent-2)' }}>
                  get_order_status
                </span>
                <span style={{ marginLeft: 8, color: 'var(--text-4)' }}>
                  1 个已配置
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: '1px solid var(--line-1)',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 10.5,
                color: 'var(--text-4)',
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}
            >
              本次会话
            </div>
            {[
              ['总 Token', '580'],
              ['总成本', '¥ 0.0125'],
              ['平均延迟', '1.04s'],
              ['消息数', '4'],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '6px 0',
                  fontSize: 12,
                }}
              >
                <span style={{ color: 'var(--text-3)' }}>{k}</span>
                <span className="mono" style={{ color: 'var(--text-1)' }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
