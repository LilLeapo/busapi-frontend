import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';
import { Provider } from '../components/Provider.jsx';

const histBars = (good = 0.97) =>
  Array.from({ length: 90 }, () =>
    Math.random() < good ? 'ok' : Math.random() < 0.5 ? 'partial' : 'down'
  );

export default function StatusPage() {
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              STATUS
            </span>
            <a className="btn btn-ghost btn-sm" href="#">
              订阅更新
            </a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: 24,
              background: 'rgba(52,211,153,0.06)',
              border: '1px solid rgba(52,211,153,0.25)',
              borderRadius: 12,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: 'var(--accent-3)',
                boxShadow: '0 0 0 6px rgba(52,211,153,0.18)',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 500 }}>所有系统正常运行</div>
              <div
                className="mono"
                style={{ fontSize: 11.5, color: 'var(--text-3)', marginTop: 4 }}
              >
                最后检查 · 22 秒前 · 滚动 90 天可用率 99.997%
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              核心服务 · 90 天历史
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              {[
                ['API 网关 (api.busapi.cn)', 'ok', '99.998%'],
                ['Chat Completions', 'ok', '99.997%'],
                ['Embeddings', 'ok', '99.999%'],
                ['Image Generation', 'ok', '99.991%'],
                ['控制台 (app.busapi.cn)', 'ok', '99.999%'],
                ['计费系统', 'ok', '100.00%'],
                ['文档中心', 'ok', '100.00%'],
              ].map((s, i, arr) => (
                <div
                  key={s[0]}
                  style={{
                    padding: '18px 24px',
                    borderBottom:
                      i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 999,
                          background: 'var(--accent-3)',
                        }}
                      />
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{s[0]}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span
                        className="mono"
                        style={{ fontSize: 11.5, color: 'var(--text-3)' }}
                      >
                        {s[2]}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--accent-3)' }}>
                        正常
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 1.5 }}>
                    {histBars(0.985 + Math.random() * 0.013).map((b, j) => (
                      <div
                        key={j}
                        style={{
                          flex: 1,
                          height: 26,
                          borderRadius: 1.5,
                          background:
                            b === 'ok'
                              ? 'rgba(52,211,153,0.55)'
                              : b === 'partial'
                              ? 'rgba(251,191,36,0.7)'
                              : 'rgba(248,113,113,0.7)',
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 6,
                    }}
                  >
                    <span
                      className="mono"
                      style={{ fontSize: 10, color: 'var(--text-4)' }}
                    >
                      90 天前
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: 10, color: 'var(--text-4)' }}
                    >
                      今天
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              上游模型厂商 · 实时
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }}
            >
              {[
                ['OpenAI', 'ok', '187ms'],
                ['Anthropic', 'ok', '212ms'],
                ['Google', 'ok', '174ms'],
                ['Meta (Llama)', 'ok', '196ms'],
                ['DeepSeek', 'partial', '420ms'],
                ['Mistral', 'ok', '203ms'],
              ].map(([n, st, lat]) => (
                <div
                  key={n}
                  className="card"
                  style={{
                    padding: 18,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Provider name={n.split(' ')[0]} size={20} />
                    <span style={{ fontSize: 13.5 }}>{n}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      className="mono"
                      style={{ fontSize: 11, color: 'var(--text-3)' }}
                    >
                      {lat}
                    </span>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: st === 'ok' ? 'var(--accent-3)' : 'var(--accent-4)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              近期事件
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              {[
                { d: '2026-04-28', t: '14:32', e: 'DeepSeek 上游延迟升高', s: '已恢复', dur: '14 分钟', sev: 'partial' },
                { d: '2026-04-22', t: '03:18', e: '计划维护：网关节点升级', s: '已完成', dur: '32 分钟', sev: 'maint' },
                { d: '2026-04-09', t: '09:47', e: 'OpenAI 区域性限流', s: '已恢复', dur: '8 分钟', sev: 'partial' },
              ].map((it, i, arr) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 24px',
                    borderBottom:
                      i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr 100px 80px',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div
                    className="mono"
                    style={{ fontSize: 11.5, color: 'var(--text-3)' }}
                  >
                    {it.d} {it.t}
                  </div>
                  <div style={{ fontSize: 13.5 }}>{it.e}</div>
                  <div
                    className="mono"
                    style={{ fontSize: 11.5, color: 'var(--text-4)' }}
                  >
                    {it.dur}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 11,
                        padding: '3px 8px',
                        borderRadius: 4,
                        background:
                          it.sev === 'maint'
                            ? 'rgba(125,211,252,0.1)'
                            : 'rgba(251,191,36,0.1)',
                        color:
                          it.sev === 'maint' ? 'var(--accent)' : 'var(--accent-4)',
                        border: `1px solid ${
                          it.sev === 'maint'
                            ? 'rgba(125,211,252,0.3)'
                            : 'rgba(251,191,36,0.3)'
                        }`,
                      }}
                    >
                      {it.s}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
