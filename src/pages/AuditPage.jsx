import { AppShell, PageHeader } from '../components/AppShell.jsx';

export default function AuditPage() {
  const events = [
    ['2026-04-30 14:32:18', '陈晓东', '创建密钥', 'sk-prod-feishu-***k29x', '成功', '118.89.21.4', '北京'],
    ['2026-04-30 14:01:02', '林思远', '调用模型', 'claude-sonnet-4.5 · 2,341 tok', '成功', '220.181.38.150', '北京'],
    ['2026-04-30 13:48:55', '王明月', '更新组配额', '文档 AI · 2000→5000', '成功', '118.89.21.4', '北京'],
    ['2026-04-30 11:22:09', 'system', '超过预算预警', '本月已用 80%', '—', '—', '—'],
    ['2026-04-30 09:15:33', '陈晓东', '邀请成员', 'liu.mengqi@bytedance.com', '成功', '118.89.21.4', '北京'],
    ['2026-04-29 22:08:41', '赵雪琳', '登录', '邮箱密码 + 2FA', '成功', '61.135.169.121', '上海'],
    ['2026-04-29 19:45:12', 'unknown', '登录失败', 'admin@bytedance.com', '拒绝', '45.227.253.98', '未知'],
    ['2026-04-29 16:33:27', '陈晓东', '撤销密钥', 'sk-test-***l4nm', '成功', '118.89.21.4', '北京'],
    ['2026-04-29 14:12:54', '周宇航', '导出账单', '2026-03 月账单', '成功', '220.181.38.150', '北京'],
    ['2026-04-29 10:08:01', '林思远', '更新提示词', '函数调用模板 v2', '成功', '220.181.38.150', '北京'],
    ['2026-04-28 23:50:33', 'system', '上游故障', 'DeepSeek 延迟升高', '—', '—', '—'],
    ['2026-04-28 17:24:18', '王明月', '创建密钥', 'sk-dev-doc-***p82a', '成功', '118.89.21.4', '北京'],
  ];
  return (
    <AppShell active="audit">
      <PageHeader
        title="审计日志"
        subtitle="AUDIT LOG · 近 30 天 · 共 4,827 条"
        actions={
          <>
            <button className="btn btn-ghost btn-sm">导出 CSV</button>
            <button className="btn btn-ghost btn-sm">SIEM 集成</button>
          </>
        }
      />
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
          <input
            className="input"
            placeholder="搜索资源 / IP / 用户..."
            style={{ flex: 1, minWidth: 280 }}
          />
          <select className="input">
            <option>所有事件类型</option>
            <option>认证</option>
            <option>密钥</option>
            <option>调用</option>
            <option>计费</option>
          </select>
          <select className="input">
            <option>所有用户</option>
          </select>
          <select className="input">
            <option>近 30 天</option>
            <option>近 7 天</option>
            <option>今天</option>
            <option>自定义...</option>
          </select>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            ['事件总数', '4,827', '+12% vs 上月'],
            ['认证事件', '238', '22 失败'],
            ['密钥操作', '47', '5 撤销'],
            ['告警', '3', '1 待处理'],
          ].map(([k, v, sub]) => (
            <div key={k} className="card" style={{ padding: 18 }}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--text-4)',
                  letterSpacing: '0.08em',
                }}
              >
                {k}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  marginTop: 8,
                  letterSpacing: '-0.01em',
                }}
              >
                {v}
              </div>
              <div
                className="mono"
                style={{ fontSize: 10.5, color: 'var(--text-3)', marginTop: 4 }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 130px 160px 1.5fr 90px 130px 90px',
              padding: '12px 22px',
              borderBottom: '1px solid var(--line-1)',
              background: 'var(--bg-1)',
            }}
          >
            {['时间', '操作者', '事件', '资源', '结果', 'IP', '地区'].map((h) => (
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
          {events.map((e, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 130px 160px 1.5fr 90px 130px 90px',
                padding: '11px 22px',
                alignItems: 'center',
                borderBottom:
                  i === events.length - 1 ? 'none' : '1px solid var(--line-1)',
                cursor: 'pointer',
              }}
            >
              <div className="mono" style={{ fontSize: 11.5, color: 'var(--text-3)' }}>
                {e[0]}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color:
                    e[1] === 'system'
                      ? 'var(--text-4)'
                      : e[1] === 'unknown'
                      ? '#f87171'
                      : 'var(--text-2)',
                  fontStyle: e[1] === 'system' ? 'italic' : 'normal',
                }}
              >
                {e[1]}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-1)' }}>{e[2]}</div>
              <div
                className="mono"
                style={{
                  fontSize: 11.5,
                  color: 'var(--text-3)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {e[3]}
              </div>
              <div>
                <span
                  style={{
                    fontSize: 10.5,
                    padding: '2px 7px',
                    borderRadius: 3,
                    color:
                      e[4] === '成功'
                        ? 'var(--accent-3)'
                        : e[4] === '拒绝'
                        ? '#f87171'
                        : 'var(--text-4)',
                    background:
                      e[4] === '成功'
                        ? 'rgba(52,211,153,0.08)'
                        : e[4] === '拒绝'
                        ? 'rgba(248,113,113,0.08)'
                        : 'var(--bg-2)',
                    border: `1px solid ${
                      e[4] === '成功'
                        ? 'rgba(52,211,153,0.25)'
                        : e[4] === '拒绝'
                        ? 'rgba(248,113,113,0.25)'
                        : 'var(--line-1)'
                    }`,
                  }}
                >
                  {e[4]}
                </span>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                {e[5]}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{e[6]}</div>
            </div>
          ))}
          <div
            style={{
              padding: '14px 22px',
              borderTop: '1px solid var(--line-1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--bg-1)',
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              显示 1–12 / 4,827
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                className="btn btn-ghost btn-sm"
                disabled
                style={{ opacity: 0.4 }}
              >
                ← 上一页
              </button>
              <button className="btn btn-ghost btn-sm">下一页 →</button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
