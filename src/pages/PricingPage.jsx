import { Link } from 'react-router-dom';
import { PublicNav } from '../components/PublicNav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Provider } from '../components/Provider.jsx';

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <PublicNav active="定价" />

      <section style={{ padding: '80px 0 48px', textAlign: 'center' }}>
        <div className="container">
          <div className="eyebrow">定价</div>
          <h1
            className="h-display"
            style={{ marginTop: 16, maxWidth: 800, margin: '16px auto 0' }}
          >
            透明、按量、随用随停。
          </h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: 540, margin: '20px auto 0' }}>
            所有计划共享相同的 SLA 与延迟。根据团队规模选择能力与服务级别。
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
            }}
          >
            {[
              {
                t: '开发者',
                p: '¥0',
                s: '注册即用',
                items: ['¥10 体验额度', '按量后付费', '社区支持', '5 个密钥', '邮件接入'],
                hl: false,
                cta: '开始使用',
                to: '/signup',
              },
              {
                t: '团队',
                p: '¥299',
                s: '/ 月起',
                items: ['10 个成员席位', '100 个密钥', '项目级配额', '邮件支持', '审计日志 30 天', '成本归因'],
                hl: false,
                cta: '开始 14 天试用',
                to: '/signup',
              },
              {
                t: '商业',
                p: '¥1,499',
                s: '/ 月起',
                items: ['50 个成员席位', '无限密钥', 'SAML SSO', '7×24 工单支持', '审计日志 90 天', '自定义模型路由'],
                hl: true,
                cta: '联系销售',
                to: '/enterprise',
              },
              {
                t: '企业',
                p: '定制',
                s: '联系销售',
                items: ['无限成员', '私有部署/VPC', '客户成功经理', '99.99% SLA', '合规报告', '本地化推理'],
                hl: false,
                cta: '联系销售',
                to: '/enterprise',
              },
            ].map((p) => (
              <div
                key={p.t}
                className="card"
                style={{
                  padding: 28,
                  position: 'relative',
                  ...(p.hl && {
                    borderColor: 'var(--accent)',
                    boxShadow:
                      '0 0 0 1px var(--accent), 0 20px 60px rgba(125,211,252,0.10)',
                  }),
                }}
              >
                {p.hl && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -10,
                      left: 24,
                      fontSize: 10.5,
                      padding: '3px 10px',
                      background: 'var(--accent)',
                      color: '#052330',
                      borderRadius: 999,
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    RECOMMENDED
                  </div>
                )}
                <div style={{ fontSize: 14, fontWeight: 500 }}>{p.t}</div>
                <div style={{ marginTop: 16, marginBottom: 22 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 36,
                      fontWeight: 500,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {p.p}
                  </span>
                  <span
                    style={{ fontSize: 12.5, color: 'var(--text-3)', marginLeft: 6 }}
                  >
                    {p.s}
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 24px',
                    display: 'grid',
                    gap: 10,
                  }}
                >
                  {p.items.map((i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 13,
                        color: 'var(--text-2)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          fontSize: 11,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  className={p.hl ? 'btn btn-primary' : 'btn btn-ghost'}
                  to={p.to}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 96 }}>
            <div className="eyebrow">按 Token 定价 · 比官方便宜 20%</div>
            <h2 className="h-2" style={{ marginTop: 14, marginBottom: 32 }}>
              常用模型价格
            </h2>
            <div className="card" style={{ overflow: 'hidden' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                  padding: '14px 22px',
                  borderBottom: '1px solid var(--line-1)',
                  background: 'var(--bg-1)',
                }}
              >
                {['模型', '上下文', '输入 (¥/1K)', '输出 (¥/1K)', '官方对比'].map((h) => (
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
              {[
                ['gpt-5', 'OpenAI', '256K', '¥0.018', '¥0.072', '-22%'],
                ['claude-sonnet-4.5', 'Anthropic', '200K', '¥0.021', '¥0.105', '-20%'],
                ['gemini-2.5-pro', 'Google', '2M', '¥0.009', '¥0.036', '-25%'],
                ['o4-mini', 'OpenAI', '128K', '¥0.008', '¥0.032', '-20%'],
                ['claude-haiku-4.5', 'Anthropic', '200K', '¥0.006', '¥0.030', '-18%'],
              ].map((r, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                    padding: '16px 22px',
                    alignItems: 'center',
                    borderBottom:
                      i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Provider name={r[1]} size={22} />
                    <span className="mono" style={{ fontSize: 13 }}>
                      {r[0]}
                    </span>
                  </div>
                  <div className="mono" style={{ fontSize: 12.5 }}>
                    {r[2]}
                  </div>
                  <div className="mono" style={{ fontSize: 12.5 }}>
                    {r[3]}
                  </div>
                  <div className="mono" style={{ fontSize: 12.5 }}>
                    {r[4]}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--accent-3)' }}>
                    {r[5]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
