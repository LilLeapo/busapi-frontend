import { AppShell, PageHeader } from '../components/AppShell.jsx';
import { Provider } from '../components/Provider.jsx';

export default function UsagePage() {
  const rows = [
    ['claude-sonnet-4.5', 'Anthropic', 5102843, '4.2M', '920K', 1142.5, 0.445],
    ['gpt-5', 'OpenAI', 3892012, '2.8M', '580K', 896.2, 0.349],
    ['gemini-2.5-pro', 'Google', 1842091, '1.1M', '280K', 287.4, 0.112],
    ['o4-mini', 'OpenAI', 982432, '0.4M', '120K', 128.1, 0.05],
    ['claude-haiku-4.5', 'Anthropic', 612908, '0.5M', '80K', 82.3, 0.032],
    ['gpt-image-1', 'OpenAI', 8421, '—', '—', 30.9, 0.012],
  ];
  return (
    <AppShell active="usage">
      <PageHeader
        title="用量统计"
        subtitle="USAGE · 2026-04-01 到 2026-04-30"
        actions={
          <>
            <button className="btn btn-ghost btn-sm">本月 ▾</button>
            <button className="btn btn-ghost btn-sm">导出 CSV</button>
          </>
        }
      />
      <div style={{ padding: 32 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div className="card" style={{ padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              本月消耗
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                letterSpacing: '-0.025em',
              }}
            >
              ¥ 2,567.40
            </div>
            <div
              style={{
                marginTop: 6,
                height: 6,
                background: 'var(--bg-3)',
                borderRadius: 999,
              }}
            >
              <div
                style={{
                  width: '23%',
                  height: '100%',
                  background: 'var(--accent)',
                  borderRadius: 999,
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8,
              }}
            >
              <span style={{ fontSize: 12, color: 'var(--text-3)' }}>预算 ¥ 11,000</span>
              <span style={{ fontSize: 12, color: 'var(--accent-3)' }}>剩余 77%</span>
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              本月请求
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                letterSpacing: '-0.025em',
              }}
            >
              12.4M
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 14 }}>
              输入 8.4M tok · 输出 1.9M tok
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              预计本月总消耗
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                letterSpacing: '-0.025em',
              }}
            >
              ¥ 3,890
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 14 }}>
              按当前节奏推算 · 不会超出预算
            </div>
          </div>
        </div>

        <div className="card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              padding: '18px 22px',
              borderBottom: '1px solid var(--line-1)',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 500 }}>按模型分布</div>
            <button className="btn btn-ghost btn-sm">按项目 / 密钥 / 用户 ▾</button>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1.2fr 1.2fr 1fr 1.4fr',
              padding: '12px 22px',
              background: 'var(--bg-1)',
            }}
          >
            {['模型', '请求数', '输入 tok', '输出 tok', '成本 (¥)', '占比'].map((h) => (
              <div
                key={h}
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1.2fr 1.2fr 1fr 1.4fr',
                padding: '14px 22px',
                alignItems: 'center',
                borderTop: '1px solid var(--line-1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Provider name={r[1]} size={20} />
                <span className="mono" style={{ fontSize: 12.5 }}>
                  {r[0]}
                </span>
              </div>
              <div className="mono" style={{ fontSize: 12 }}>
                {r[2].toLocaleString()}
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
                {r[3]}
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
                {r[4]}
              </div>
              <div className="mono" style={{ fontSize: 12.5, fontWeight: 500 }}>
                ¥ {r[5].toLocaleString()}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    flex: 1,
                    height: 4,
                    background: 'var(--bg-3)',
                    borderRadius: 999,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${r[6] * 100}%`,
                      height: '100%',
                      background:
                        i === 0
                          ? 'var(--accent-2)'
                          : i === 1
                          ? 'var(--accent)'
                          : i === 2
                          ? 'var(--accent-3)'
                          : 'var(--text-4)',
                    }}
                  />
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                    width: 38,
                    textAlign: 'right',
                  }}
                >
                  {(r[6] * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
