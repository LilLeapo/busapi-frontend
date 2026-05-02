import { Link } from 'react-router-dom';
import { BusWordmark } from './BusLogo.jsx';

const columns = [
  {
    title: '产品',
    items: [
      { label: '模型市场', to: '/models' },
      { label: '价格', to: '/pricing' },
      { label: '企业方案', to: '/enterprise' },
      { label: 'OpenAI 兼容', to: '/docs' },
      { label: 'Playground', to: '/app/playground' },
    ],
  },
  {
    title: '开发者',
    items: [
      { label: '文档', to: '/docs' },
      { label: 'API 参考', to: '/docs' },
      { label: '错误码', to: '/docs/errors' },
      { label: '状态页', to: '/status' },
      { label: '更新日志', to: '/docs' },
    ],
  },
  {
    title: '公司',
    items: [
      { label: '关于我们', to: '/enterprise' },
      { label: '客户案例', to: '/enterprise' },
      { label: '招聘', to: '/enterprise' },
      { label: '联系销售', to: '/enterprise' },
      { label: '合作伙伴', to: '/enterprise' },
    ],
  },
  {
    title: '法律',
    items: [
      { label: '服务条款', to: '#' },
      { label: '隐私政策', to: '#' },
      { label: '数据处理', to: '#' },
      { label: '安全', to: '#' },
      { label: 'SLA', to: '#' },
    ],
  },
];

export const Footer = () => (
  <footer
    style={{
      borderTop: '1px solid var(--line-1)',
      padding: '64px 0 32px',
      background: 'var(--bg-0)',
    }}
  >
    <div className="container">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr repeat(4, 1fr)',
          gap: 40,
          marginBottom: 56,
        }}
      >
        <div>
          <BusWordmark />
          <p
            style={{
              marginTop: 16,
              fontSize: 13.5,
              color: 'var(--text-3)',
              lineHeight: 1.6,
              maxWidth: 280,
            }}
          >
            企业级 AI 模型聚合网关。统一接入，全球加速，按量计费。
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 8 }}>
            <Link to="/status" className="badge badge-dot" style={{ textDecoration: 'none' }}>
              所有系统正常
            </Link>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontSize: 12.5,
                color: 'var(--text-1)',
                fontWeight: 500,
                marginBottom: 14,
              }}
            >
              {col.title}
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: 10,
              }}
            >
              {col.items.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    style={{
                      fontSize: 13,
                      color: 'var(--text-3)',
                      textDecoration: 'none',
                    }}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          borderTop: '1px solid var(--line-1)',
        }}
      >
        <div className="mono" style={{ fontSize: 12, color: 'var(--text-4)' }}>
          © 2026 BusAPI · ICP 备 2024··· 号
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--text-4)' }}>
          v2.14.0 · 99.99% uptime · 12 regions
        </div>
      </div>
    </div>
  </footer>
);
