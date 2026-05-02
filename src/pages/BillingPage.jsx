import { AppShell, PageHeader } from '../components/AppShell.jsx';

export default function BillingPage() {
  const invoices = [
    ['2026-04', '按量计费', '¥ 2,567.40', '已结算', '已开具', '查看 / PDF'],
    ['2026-03', '按量计费', '¥ 3,128.20', '已结算', '已开具', '查看 / PDF'],
    ['2026-03', '充值', '+ ¥ 5,000.00', '成功', '—', '收据'],
    ['2026-02', '按量计费', '¥ 2,894.50', '已结算', '已开具', '查看 / PDF'],
    ['2026-02', '充值', '+ ¥ 5,000.00', '成功', '—', '收据'],
    ['2026-01', '按量计费', '¥ 1,890.10', '已结算', '已开具', '查看 / PDF'],
  ];
  return (
    <AppShell active="billing">
      <PageHeader
        title="账单与发票"
        subtitle="BILLING"
        actions={<button className="btn btn-primary btn-sm">+ 充值</button>}
      />
      <div style={{ padding: 32 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div className="card" style={{ padding: 28 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                  账户余额
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: 'var(--font-display)',
                    fontSize: 48,
                    letterSpacing: '-0.03em',
                    fontWeight: 500,
                  }}
                >
                  ¥ 8,432.10
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: 'var(--text-3)' }}>
                  预计可使用 32 天 · 按近 7 天平均消耗
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-ghost btn-sm">自动续费 ●</button>
                <button className="btn btn-primary btn-sm">立即充值</button>
              </div>
            </div>
            <div
              style={{
                marginTop: 24,
                padding: 16,
                background: 'var(--bg-2)',
                borderRadius: 8,
                border: '1px solid var(--line-1)',
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 10 }}
              >
                充值套餐 · 按金额阶梯返赠
              </div>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}
              >
                {[
                  ['¥ 100', '+0%'],
                  ['¥ 500', '+3%'],
                  ['¥ 2,000', '+6%'],
                  ['¥ 10,000', '+10%'],
                ].map(([a, b], i) => (
                  <button
                    key={i}
                    style={{
                      padding: '14px 12px',
                      borderRadius: 6,
                      border: i === 2 ? '1px solid var(--accent)' : '1px solid var(--line-2)',
                      background: i === 2 ? 'rgba(125,211,252,0.05)' : 'var(--bg-1)',
                      color: 'var(--text-1)',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div className="mono" style={{ fontSize: 14, fontWeight: 500 }}>
                      {a}
                    </div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: 'var(--accent-3)',
                        marginTop: 4,
                      }}
                    >
                      赠 {b}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
              支付方式
            </div>
            <div
              style={{
                marginTop: 12,
                padding: 14,
                background: 'var(--bg-2)',
                borderRadius: 6,
                border: '1px solid var(--line-1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 24,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #1a1f3a, #3a4068)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 8,
                      color: '#fff',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    VISA
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 12.5 }}>
                    ···· 4242
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 2 }}
                  >
                    到期 12 / 28
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}
            >
              + 添加支付方式
            </button>
            <div
              style={{
                marginTop: 20,
                paddingTop: 18,
                borderTop: '1px solid var(--line-1)',
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                开票信息
              </div>
              <div style={{ marginTop: 8, fontSize: 13 }}>北京字节跳动科技有限公司</div>
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 4 }}
              >
                91110108××××××××4N · 一般纳税人
              </div>
              <a
                href="#"
                style={{
                  display: 'inline-block',
                  marginTop: 10,
                  fontSize: 12,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                修改 →
              </a>
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
            <div style={{ fontSize: 15, fontWeight: 500 }}>账单历史</div>
            <a
              href="#"
              style={{ fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}
            >
              下载全部 CSV →
            </a>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr 1fr',
              padding: '12px 22px',
              background: 'var(--bg-1)',
            }}
          >
            {['账期', '类型', '金额', '状态', '发票', '操作'].map((h) => (
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
          {invoices.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr 1fr',
                padding: '14px 22px',
                alignItems: 'center',
                borderTop: '1px solid var(--line-1)',
              }}
            >
              <div className="mono" style={{ fontSize: 12.5 }}>
                {r[0]}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>{r[1]}</div>
              <div
                className="mono"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: r[1] === '充值' ? 'var(--accent-3)' : 'var(--text-1)',
                }}
              >
                {r[2]}
              </div>
              <div>
                <span className="badge badge-dot">{r[3]}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{r[4]}</div>
              <div>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                  }}
                >
                  {r[5]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
