import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';
import { Provider } from '../components/Provider.jsx';

const models = [
  { name: 'GPT-5', vendor: 'OpenAI', ctx: '256K', input: 5.0, output: 15.0, lat: 720, mmlu: 89.7, mt: 89.2, swe: 71.2, vis: '✓', tools: '✓', json: '✓' },
  { name: 'Claude Sonnet 4.5', vendor: 'Anthropic', ctx: '500K', input: 3.0, output: 15.0, lat: 580, mmlu: 88.4, mt: 90.1, swe: 73.8, vis: '✓', tools: '✓', json: '✓' },
  { name: 'Gemini 2.5 Pro', vendor: 'Google', ctx: '2M', input: 2.5, output: 10.0, lat: 690, mmlu: 87.2, mt: 88.4, swe: 67.4, vis: '✓', tools: '✓', json: '✓' },
  { name: 'o4-mini', vendor: 'OpenAI', ctx: '128K', input: 1.1, output: 4.4, lat: 1840, mmlu: 86.1, mt: 84.2, swe: 68.9, vis: '—', tools: '✓', json: '✓' },
  { name: 'DeepSeek V4', vendor: 'DeepSeek', ctx: '128K', input: 0.27, output: 1.1, lat: 920, mmlu: 84.8, mt: 82.5, swe: 64.2, vis: '—', tools: '✓', json: '✓' },
];

const Bar = ({ v, max, color = 'var(--accent)' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div
      style={{
        flex: 1,
        height: 4,
        background: 'var(--bg-3)',
        borderRadius: 999,
        overflow: 'hidden',
        minWidth: 60,
      }}
    >
      <div
        style={{
          width: `${(v / max) * 100}%`,
          height: '100%',
          background: color,
          borderRadius: 999,
        }}
      />
    </div>
    <span
      className="mono"
      style={{ fontSize: 11, color: 'var(--text-2)', minWidth: 36, textAlign: 'right' }}
    >
      {v}
    </span>
  </div>
);

export default function ComparePage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <nav style={{ height: 64, borderBottom: '1px solid var(--line-1)' }}>
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
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ghost btn-sm">+ 添加模型</button>
            <Link className="btn btn-primary btn-sm" to="/app/playground">
              在 Playground 试用
            </Link>
          </div>
        </div>
      </nav>

      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            模型对比 · COMPARE
          </div>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: '0 0 12px',
            }}
          >
            选择最适合你场景的模型
          </h1>
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-3)',
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            数据来自 BusAPI 公开 benchmark · 价格按 USD / 1M Token · 延迟为 P50 中位值，基于近 7 天真实生产流量。
          </p>

          <div className="card" style={{ marginTop: 32, overflow: 'auto' }}>
            <table
              style={{
                width: '100%',
                minWidth: 1100,
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr
                  style={{
                    background: 'var(--bg-1)',
                    borderBottom: '1px solid var(--line-1)',
                  }}
                >
                  {[
                    '模型',
                    '上下文',
                    '输入 / 输出 ($/1M)',
                    '延迟 P50',
                    'MMLU',
                    'MT-Bench',
                    'SWE-Bench',
                    '能力',
                  ].map((h, i) => (
                    <th
                      key={h}
                      className="mono"
                      style={{
                        padding: '14px 12px',
                        textAlign: i === 7 ? 'center' : 'left',
                        fontSize: 11,
                        fontWeight: 500,
                        color: 'var(--text-4)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.map((m, i) => (
                  <tr
                    key={m.name}
                    style={{
                      borderBottom:
                        i === models.length - 1 ? 'none' : '1px solid var(--line-1)',
                    }}
                  >
                    <td style={{ padding: '16px 18px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Provider name={m.vendor} size={20} />
                        <div>
                          <div style={{ fontSize: 13.5, fontWeight: 500 }}>
                            {m.name}
                          </div>
                          <div
                            className="mono"
                            style={{
                              fontSize: 10.5,
                              color: 'var(--text-4)',
                              marginTop: 2,
                            }}
                          >
                            {m.vendor}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="mono" style={{ padding: '16px 12px' }}>
                      <span style={{ fontSize: 12.5 }}>{m.ctx}</span>
                    </td>
                    <td className="mono" style={{ padding: '16px 12px' }}>
                      <span style={{ fontSize: 12.5 }}>
                        ${m.input.toFixed(2)} / ${m.output.toFixed(2)}
                      </span>
                    </td>
                    <td style={{ padding: '16px 12px', minWidth: 140 }}>
                      <Bar
                        v={m.lat}
                        max={2000}
                        color={
                          m.lat > 1500
                            ? '#f87171'
                            : m.lat > 800
                            ? '#fbbf24'
                            : '#34d399'
                        }
                      />
                    </td>
                    <td style={{ padding: '16px 12px', minWidth: 130 }}>
                      <Bar v={m.mmlu} max={100} />
                    </td>
                    <td style={{ padding: '16px 12px', minWidth: 130 }}>
                      <Bar v={m.mt} max={100} />
                    </td>
                    <td style={{ padding: '16px 12px', minWidth: 130 }}>
                      <Bar v={m.swe} max={100} />
                    </td>
                    <td
                      className="mono"
                      style={{ padding: '16px 12px', textAlign: 'center' }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          gap: 8,
                          fontSize: 11.5,
                          color: 'var(--text-3)',
                        }}
                      >
                        <span title="Vision">
                          {m.vis === '✓' ? (
                            <span style={{ color: 'var(--accent)' }}>👁</span>
                          ) : (
                            <span style={{ opacity: 0.3 }}>—</span>
                          )}
                        </span>
                        <span title="Tools">
                          {m.tools === '✓' ? (
                            <span style={{ color: 'var(--accent)' }}>🔧</span>
                          ) : (
                            <span style={{ opacity: 0.3 }}>—</span>
                          )}
                        </span>
                        <span title="JSON Mode">
                          {m.json === '✓' ? (
                            <span style={{ color: 'var(--accent)' }}>{'{}'}</span>
                          ) : (
                            <span style={{ opacity: 0.3 }}>—</span>
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
            }}
          >
            {[
              {
                tag: '通用 / 推荐',
                name: 'Claude Sonnet 4.5',
                why: '在 MT-Bench 和编码任务中保持领先，500K 长上下文 + 中等价格。',
                color: 'var(--accent)',
              },
              {
                tag: '极致性价比',
                name: 'DeepSeek V4',
                why: '$0.27/1M 输入价格，能力接近一线模型 90%，适合大规模批处理。',
                color: '#34d399',
              },
              {
                tag: '超长文档',
                name: 'Gemini 2.5 Pro',
                why: '2M Token 上下文，单次可处理整本书或大型代码库。',
                color: '#a78bfa',
              },
            ].map((r) => (
              <div
                key={r.name}
                className="card"
                style={{ padding: 22, position: 'relative', overflow: 'hidden' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: r.color,
                  }}
                />
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: r.color,
                    letterSpacing: '0.1em',
                    marginBottom: 10,
                  }}
                >
                  {r.tag.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  {r.name}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--text-3)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {r.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
