import { Link } from 'react-router-dom';
import { BusWordmark } from '../components/BusLogo.jsx';

const capabilities = [
  ['SAML / OIDC SSO', '与 Okta、飞书、钉钉、企业微信集成。'],
  ['VPC 专线接入', '私有网络直连，数据不经公网。'],
  ['本地化推理网关', '在客户机房部署 BusAPI Edge，模型调用在本地完成。'],
  ['SOC2 Type II', '已通过 SOC2、ISO 27001、等保三级。'],
  ['DPA / SCC', '提供数据处理协议与跨境标准合同条款。'],
  ['7×24 高级支持', '专属 Slack/飞书频道，30 分钟响应。'],
];

const logos = ['字节跳动', '网易', 'OPPO', '商汤', '理想汽车', '作业帮', 'Boss直聘', '蔚来'];

export default function EnterprisePage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <nav
        style={{
          height: 64,
          borderBottom: '1px solid var(--line-1)',
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
          <div style={{ display: 'flex', gap: 8 }}>
            <Link
              className="btn btn-sm"
              style={{ color: 'var(--text-2)' }}
              to="/login"
            >
              登录
            </Link>
          </div>
        </div>
      </nav>

      <section
        style={{
          padding: '80px 0',
          borderBottom: '1px solid var(--line-1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 700,
            height: 700,
            background:
              'radial-gradient(circle, rgba(125,211,252,0.10), transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              BUSAPI · 企业方案
            </div>
            <h1 className="h-display" style={{ marginBottom: 24 }}>
              为大规模 AI 部署而生。
            </h1>
            <p className="lead" style={{ maxWidth: 540 }}>
              私有部署、SAML 单点登录、专属客户成功经理、99.99% SLA、合规报告。从 PoC 到全球生产，我们与你一起。
            </p>
            <div style={{ marginTop: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                企业能力
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 0,
                  borderTop: '1px solid var(--line-1)',
                  borderLeft: '1px solid var(--line-1)',
                }}
              >
                {capabilities.map(([t, d]) => (
                  <div
                    key={t}
                    style={{
                      padding: 22,
                      borderRight: '1px solid var(--line-1)',
                      borderBottom: '1px solid var(--line-1)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      {t}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: 'var(--text-3)',
                        lineHeight: 1.55,
                      }}
                    >
                      {d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ padding: 32, position: 'sticky', top: 88 }}
          >
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              预约咨询
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: '-0.018em',
                margin: '0 0 6px',
              }}
            >
              联系企业销售
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 24 }}>
              1 个工作日内回复，提供定制化方案与价格。
            </p>

            <form
              style={{ display: 'grid', gap: 14 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('感谢咨询！我们会在 1 个工作日内与你联系。');
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--text-3)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    姓名 *
                  </label>
                  <input className="input" placeholder="陈晓东" style={{ width: '100%' }} required />
                </div>
                <div>
                  <label
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--text-3)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    职位
                  </label>
                  <input
                    className="input"
                    placeholder="技术负责人"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  企业邮箱 *
                </label>
                <input
                  className="input"
                  placeholder="you@company.com"
                  type="email"
                  style={{ width: '100%' }}
                  required
                />
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  公司名称 *
                </label>
                <input
                  className="input"
                  placeholder="北京某某科技有限公司"
                  style={{ width: '100%' }}
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--text-3)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    团队规模
                  </label>
                  <select className="input" style={{ width: '100%' }}>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                </div>
                <div>
                  <label
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--text-3)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    预算 (¥/月)
                  </label>
                  <select className="input" style={{ width: '100%' }}>
                    <option>&lt; 1万</option>
                    <option>1万 - 5万</option>
                    <option>5万 - 20万</option>
                    <option>20万+</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--text-3)',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  使用场景描述
                </label>
                <textarea
                  className="input"
                  rows={4}
                  placeholder="简要描述使用场景、关注的模型、合规要求等..."
                  style={{
                    width: '100%',
                    height: 'auto',
                    padding: 12,
                    resize: 'vertical',
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 6, height: 44 }}
              >
                提交咨询 →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--line-1)' }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 14 }}>
            4,200+ 团队选择 BusAPI
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gap: 32,
              opacity: 0.65,
              marginTop: 32,
            }}
          >
            {logos.map((n) => (
              <div
                key={n}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  color: 'var(--text-3)',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
