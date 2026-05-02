import { AppShell, PageHeader } from '../components/AppShell.jsx';

export default function TeamPage() {
  const members = [
    ['陈晓东', 'admin@bytedance.com', '管理员', '—', '—', '2025-08-01', '#7dd3fc'],
    ['林思远', 'lin.siyuan@bytedance.com', '成员', '飞书智能', '¥ 1,247.30', '2025-08-12', '#a78bfa'],
    ['王明月', 'wang.mingyue@bytedance.com', '成员', '飞书智能', '¥ 892.10', '2025-09-04', '#34d399'],
    ['赵雪琳', 'zhao.xuelin@bytedance.com', '成员', '文档 AI', '¥ 612.50', '2025-10-18', '#fbbf24'],
    ['李建国', 'li.jianguo@bytedance.com', '只读', '文档 AI', '—', '2025-11-22', '#f87171'],
    ['周宇航', 'zhou.yh@bytedance.com', '计费', '—', '—', '2026-01-15', '#7dd3fc'],
    ['刘梦琪', 'liu.mengqi@bytedance.com', '成员', '移动客户端', '¥ 234.80', '2026-02-08', '#a78bfa'],
  ];
  return (
    <AppShell active="team">
      <PageHeader
        title="团队成员"
        subtitle="TEAM · 14 名成员 · 3 个小组"
        actions={
          <>
            <button className="btn btn-ghost btn-sm">导出</button>
            <button className="btn btn-primary btn-sm">+ 邀请成员</button>
          </>
        }
      />
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <input
            className="input"
            placeholder="搜索成员..."
            style={{ flex: 1, maxWidth: 320 }}
          />
          <button className="btn btn-ghost btn-sm">所有角色 ▾</button>
          <button className="btn btn-ghost btn-sm">所有小组 ▾</button>
        </div>

        <div className="card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px',
              padding: '14px 22px',
              borderBottom: '1px solid var(--line-1)',
              background: 'var(--bg-1)',
            }}
          >
            {['成员', '角色', '小组', '本月用量', '加入时间', ''].map((h) => (
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
          {members.map((m, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px',
                padding: '14px 22px',
                alignItems: 'center',
                borderBottom:
                  i === members.length - 1 ? 'none' : '1px solid var(--line-1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: m[6],
                    opacity: 0.85,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: '#0a0a0a',
                    fontWeight: 600,
                  }}
                >
                  {m[0][0]}
                </div>
                <div>
                  <div style={{ fontSize: 13.5 }}>{m[0]}</div>
                  <div
                    className="mono"
                    style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 2 }}
                  >
                    {m[1]}
                  </div>
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: 11.5,
                    padding: '3px 8px',
                    borderRadius: 4,
                    color:
                      m[2] === '管理员'
                        ? 'var(--accent)'
                        : m[2] === '只读'
                        ? 'var(--text-3)'
                        : m[2] === '计费'
                        ? 'var(--accent-4)'
                        : 'var(--text-2)',
                    background:
                      m[2] === '管理员'
                        ? 'rgba(125,211,252,0.08)'
                        : m[2] === '计费'
                        ? 'rgba(251,191,36,0.08)'
                        : 'var(--bg-2)',
                    border: '1px solid var(--line-1)',
                  }}
                >
                  {m[2]}
                </span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>{m[3]}</div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-1)' }}>
                {m[4]}
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-3)' }}>
                {m[5]}
              </div>
              <div style={{ textAlign: 'right' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-3)',
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  ···
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 className="h-3" style={{ marginBottom: 16 }}>
            小组与配额
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { name: '飞书智能', members: 6, used: 2140, cap: 5000, color: 'var(--accent)' },
              { name: '文档 AI', members: 4, used: 612, cap: 2000, color: 'var(--accent-2)' },
              { name: '移动客户端', members: 4, used: 235, cap: 1500, color: 'var(--accent-3)' },
            ].map((g) => (
              <div key={g.name} className="card" style={{ padding: 22 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{g.name}</div>
                    <div
                      className="mono"
                      style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 3 }}
                    >
                      {g.members} 名成员
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm">管理</button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 12,
                    color: 'var(--text-3)',
                    marginBottom: 6,
                  }}
                >
                  <span>本月用量</span>
                  <span className="mono">
                    ¥ {g.used.toLocaleString()} / {g.cap.toLocaleString()}
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: 'var(--bg-3)',
                    borderRadius: 999,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${(g.used / g.cap) * 100}%`,
                      height: '100%',
                      background: g.color,
                      borderRadius: 999,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
