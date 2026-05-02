import { AppShell, PageHeader } from '../components/AppShell.jsx';
import { SparkLine } from '../components/SparkLine.jsx';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <AppShell active="overview">
      <PageHeader
        title="总览 · 飞书智能"
        subtitle="WORKSPACE OVERVIEW"
        actions={
          <>
            <button className="btn btn-ghost btn-sm">导出 CSV</button>
            <button className="btn btn-primary btn-sm">+ 新建密钥</button>
          </>
        }
      />
      <div style={{ padding: 32 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginBottom: 24,
          }}
        >
          {[
            {
              l: '总请求 (本月)',
              v: '12.4M',
              d: '+18.2%',
              c: 'var(--accent-3)',
              spark: [40, 42, 38, 46, 48, 52, 58, 62, 60, 68, 72, 78, 82, 88],
              color: '#7dd3fc',
            },
            {
              l: '消耗 (¥)',
              v: '2,567.40',
              d: '+12.1%',
              c: 'var(--accent-3)',
              spark: [20, 22, 18, 28, 30, 34, 38, 42, 40, 48, 52, 55, 60, 65],
              color: '#a78bfa',
            },
            {
              l: 'P50 延迟',
              v: '187ms',
              d: '-8ms',
              c: 'var(--accent-3)',
              spark: [50, 48, 52, 46, 44, 42, 40, 38, 36, 38, 40, 38, 36, 34],
              color: '#34d399',
            },
            {
              l: '错误率',
              v: '0.03%',
              d: '稳定',
              c: 'var(--text-3)',
              spark: [15, 12, 18, 14, 10, 16, 12, 8, 12, 14, 10, 12, 8, 10],
              color: '#fbbf24',
            },
          ].map((m) => (
            <div key={m.l} className="card" style={{ padding: 18 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-4)' }}>
                  {m.l}
                </div>
                <span style={{ fontSize: 10.5, color: m.c }}>{m.d}</span>
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 28,
                  fontWeight: 500,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.02em',
                }}
              >
                {m.v}
              </div>
              <div style={{ marginTop: 8 }}>
                <SparkLine data={m.spark} color={m.color} width={160} height={40} />
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 24, marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 18,
            }}
          >
            <div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>请求量 · 按厂商</div>
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 2 }}
              >
                过去 30 天 · 按天聚合
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['24h', '7d', '30d', '90d'].map((t, i) => (
                <button
                  key={t}
                  style={{
                    padding: '5px 12px',
                    fontSize: 12,
                    borderRadius: 5,
                    border: '1px solid var(--line-1)',
                    background: i === 2 ? 'var(--bg-3)' : 'transparent',
                    color: i === 2 ? 'var(--text-1)' : 'var(--text-3)',
                    cursor: 'pointer',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <svg width="100%" height="220" viewBox="0 0 1000 220" preserveAspectRatio="none">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * 44}
                x2="1000"
                y2={i * 44}
                stroke="rgba(255,255,255,0.04)"
              />
            ))}
            {(() => {
              const pts = (offset, amp, freq, phase) =>
                Array.from({ length: 30 }, (_, i) => {
                  const x = (i / 29) * 1000;
                  const y = 220 - offset - Math.sin(i * freq + phase) * amp - i * 2;
                  return [x, y];
                });
              const a1 = pts(20, 18, 0.4, 0);
              const a2 = pts(60, 16, 0.5, 1);
              const a3 = pts(100, 12, 0.3, 2);
              return (
                <>
                  <polyline
                    points={[...a1, [1000, 220], [0, 220]]
                      .map((p) => p.join(','))
                      .join(' ')}
                    fill="rgba(125,211,252,0.18)"
                    stroke="#7dd3fc"
                    strokeWidth="1.6"
                  />
                  <polyline
                    points={[...a2, [1000, 220], [0, 220]]
                      .map((p) => p.join(','))
                      .join(' ')}
                    fill="rgba(167,139,250,0.18)"
                    stroke="#a78bfa"
                    strokeWidth="1.6"
                  />
                  <polyline
                    points={[...a3, [1000, 220], [0, 220]]
                      .map((p) => p.join(','))
                      .join(' ')}
                    fill="rgba(52,211,153,0.16)"
                    stroke="#34d399"
                    strokeWidth="1.6"
                  />
                </>
              );
            })()}
          </svg>
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 16,
              fontSize: 12,
              color: 'var(--text-3)',
            }}
          >
            {[
              ['#7dd3fc', 'OpenAI', '5.4M'],
              ['#a78bfa', 'Anthropic', '4.8M'],
              ['#34d399', 'Google', '2.2M'],
            ].map(([c, n, v]) => (
              <span
                key={n}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{ width: 10, height: 10, background: c, borderRadius: 2 }} />
                <span style={{ color: 'var(--text-2)' }}>{n}</span>
                <span className="mono" style={{ color: 'var(--text-4)' }}>
                  {v}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
          <div className="card" style={{ padding: 22 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 500 }}>API 密钥</div>
              <Link
                to="/app/keys"
                style={{
                  fontSize: 12,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                全部 →
              </Link>
            </div>
            {[
              { name: 'production-飞书', key: 'sk-bus-···7Yhq', usage: '1.2M', limit: '5M', pct: 24 },
              { name: 'staging-doc', key: 'sk-bus-···Bd9k', usage: '420K', limit: '1M', pct: 42 },
              { name: 'mobile-ios', key: 'sk-bus-···Lp3v', usage: '64K', limit: '200K', pct: 32 },
              { name: 'data-pipeline', key: 'sk-bus-···Q2ws', usage: '892K', limit: '2M', pct: 45 },
            ].map((k) => (
              <div
                key={k.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 100px',
                  alignItems: 'center',
                  padding: '14px 0',
                  borderTop: '1px solid var(--line-1)',
                }}
              >
                <div>
                  <div style={{ fontSize: 13.5 }}>{k.name}</div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 3 }}
                  >
                    {k.key}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      height: 4,
                      background: 'var(--bg-3)',
                      borderRadius: 999,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${k.pct}%`,
                        height: '100%',
                        background: 'var(--accent)',
                      }}
                    />
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 5 }}
                  >
                    {k.usage} / {k.limit}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 11.5, color: 'var(--accent-3)' }}>● 活跃</span>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 16 }}>实时活动</div>
            {[
              { t: '14:23:12', e: 'gpt-5', tok: '412 tok', c: '#7dd3fc' },
              { t: '14:23:11', e: 'claude-haiku-4.5', tok: '89 tok', c: '#a78bfa' },
              { t: '14:23:10', e: 'gemini-2.5-pro', tok: '1.2K', c: '#34d399' },
              { t: '14:23:08', e: '密钥 mobile-ios 速率受限', tok: '429', c: '#fbbf24' },
              { t: '14:23:05', e: 'gpt-5', tok: '234 tok', c: '#7dd3fc' },
              { t: '14:23:01', e: 'claude-sonnet-4.5', tok: '672 tok', c: '#a78bfa' },
              { t: '14:22:58', e: 'o4-mini', tok: '1.8K', c: '#7dd3fc' },
            ].map((a, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 0',
                  borderTop: i === 0 ? 'none' : '1px solid var(--line-1)',
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    background: a.c,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="mono"
                  style={{ fontSize: 10.5, color: 'var(--text-4)', width: 64 }}
                >
                  {a.t}
                </span>
                <span style={{ fontSize: 12.5, color: 'var(--text-2)', flex: 1 }}>{a.e}</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                  {a.tok}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
