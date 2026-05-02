import { AppShell, PageHeader } from '../components/AppShell.jsx';

export default function KeysPage() {
  const rows = [
    ['production-飞书', 'sk-bus-···7Yhq', '1,243,892', '2025-08-12', '2 分钟前', '活跃'],
    ['staging-doc', 'sk-bus-···Bd9k', '420,118', '2025-09-04', '3 小时前', '活跃'],
    ['mobile-ios', 'sk-bus-···Lp3v', '64,201', '2025-11-22', '5 分钟前', '受限'],
    ['data-pipeline', 'sk-bus-···Q2ws', '892,456', '2025-07-01', '1 分钟前', '活跃'],
    ['internal-research', 'sk-bus-···Rk8m', '12,890', '2025-12-15', '昨天', '活跃'],
    ['contractor-zhang', 'sk-bus-···Tn4j', '— ', '2026-03-02', '—', '停用'],
  ];
  return (
    <AppShell active="keys">
      <PageHeader
        title="API 密钥"
        subtitle="API KEYS · 12 个活跃"
        actions={<button className="btn btn-primary btn-sm">+ 新建密钥</button>}
      />
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <input
            className="input"
            placeholder="搜索密钥名称、ID..."
            style={{ flex: 1, maxWidth: 320 }}
          />
          <button className="btn btn-ghost btn-sm">所有项目 ▾</button>
          <button className="btn btn-ghost btn-sm">所有状态 ▾</button>
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.4fr 1.2fr 1.2fr 1fr 60px',
              padding: '14px 22px',
              borderBottom: '1px solid var(--line-1)',
              background: 'var(--bg-1)',
            }}
          >
            {['名称', '密钥', '本月用量', '创建', '最近使用', ''].map((h) => (
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
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.4fr 1.2fr 1.2fr 1fr 60px',
                padding: '14px 22px',
                alignItems: 'center',
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--line-1)',
              }}
            >
              <div>
                <div style={{ fontSize: 13.5 }}>{row[0]}</div>
                <div
                  className="mono"
                  style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 3 }}
                >
                  {row[5] === '受限'
                    ? '已达本月配额 50%'
                    : row[5] === '停用'
                    ? '已停用'
                    : '生产'}
                </div>
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
                {row[1]}
              </div>
              <div className="mono" style={{ fontSize: 12.5 }}>
                {row[2]}
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-3)' }}>
                {row[3]}
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-3)' }}>
                {row[4]}
              </div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    fontSize: 11,
                    padding: '3px 8px',
                    borderRadius: 999,
                    background:
                      row[5] === '活跃'
                        ? 'rgba(52,211,153,0.1)'
                        : row[5] === '受限'
                        ? 'rgba(251,191,36,0.1)'
                        : 'rgba(255,255,255,0.04)',
                    color:
                      row[5] === '活跃'
                        ? 'var(--accent-3)'
                        : row[5] === '受限'
                        ? 'var(--accent-4)'
                        : 'var(--text-4)',
                    border: `1px solid ${
                      row[5] === '活跃'
                        ? 'rgba(52,211,153,0.3)'
                        : row[5] === '受限'
                        ? 'rgba(251,191,36,0.3)'
                        : 'var(--line-2)'
                    }`,
                  }}
                >
                  {row[5]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 24, padding: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 20,
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                密钥配置
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 500, margin: '4px 0 0' }}>
                production-飞书
              </h3>
            </div>
            <button className="btn btn-ghost btn-sm">编辑</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { l: '月配额', v: '5,000,000 tok' },
              { l: '速率限制', v: '60 RPM / 100K TPM' },
              { l: '可访问模型', v: '全部' },
              { l: '允许 IP', v: '10.0.0.0/16, ...' },
              { l: '过期时间', v: '永不过期' },
              { l: '所属项目', v: '飞书智能 / production' },
            ].map((c) => (
              <div
                key={c.l}
                style={{
                  padding: 14,
                  background: 'var(--bg-2)',
                  borderRadius: 8,
                  border: '1px solid var(--line-1)',
                }}
              >
                <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-4)' }}>
                  {c.l}
                </div>
                <div style={{ fontSize: 13, marginTop: 4 }}>{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
