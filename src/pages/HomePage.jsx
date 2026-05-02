import { Link } from 'react-router-dom';
import { TopNav } from '../components/TopNav.jsx';
import { Footer } from '../components/Footer.jsx';
import { BusWordmark } from '../components/BusLogo.jsx';
import { SparkLine } from '../components/SparkLine.jsx';

const HeroB = () => (
  <section
    style={{
      paddingTop: 80,
      paddingBottom: 40,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -100,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1200,
        height: 700,
        background:
          'radial-gradient(ellipse, rgba(125,211,252,0.10), transparent 65%)',
        pointerEvents: 'none',
      }}
    />
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <span className="badge" style={{ marginBottom: 24 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: 'var(--accent-3)',
            }}
          />
          已通过 ISO 27001 与等保三级认证
        </span>
        <h1 className="h-display">
          AI 模型的
          <br />
          <span style={{ color: 'var(--accent)' }}>企业控制面</span>。
        </h1>
        <p className="lead" style={{ marginTop: 28, maxWidth: 640, marginInline: 'auto' }}>
          一个控制台，管理团队对所有 AI 模型的访问。密钥分发、用量配额、成本归因、合规审计 —— 全部内建。
        </p>
        <div style={{ marginTop: 36, display: 'inline-flex', gap: 12 }}>
          <Link className="btn btn-primary btn-lg" to="/signup">
            注册控制台 →
          </Link>
          <Link className="btn btn-ghost btn-lg" to="/enterprise">
            预约演示
          </Link>
        </div>
      </div>

      <div style={{ marginTop: 72, position: 'relative' }}>
        <div
          style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--line-2)',
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow:
              '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          <div
            style={{
              height: 40,
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              borderBottom: '1px solid var(--line-1)',
              background: 'var(--bg-1)',
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              {['#3a3f49', '#3a3f49', '#3a3f49'].map((c, i) => (
                <span
                  key={i}
                  style={{ width: 10, height: 10, borderRadius: 999, background: c }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                marginLeft: 14,
                height: 26,
                background: 'var(--bg-3)',
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                fontSize: 11.5,
                color: 'var(--text-3)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ marginRight: 6, opacity: 0.6 }}>🔒</span>
              app.busapi.cn/dashboard
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 580 }}>
            <div
              style={{
                borderRight: '1px solid var(--line-1)',
                padding: 16,
                background: 'var(--bg-1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 8px',
                  marginBottom: 18,
                }}
              >
                <BusWordmark small />
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: 'var(--text-4)',
                  padding: '12px 8px 6px',
                  letterSpacing: '0.1em',
                }}
              >
                WORKSPACE
              </div>
              {[
                { l: '总览', icon: '◆', active: true },
                { l: '模型市场', icon: '◇' },
                { l: 'API 密钥', icon: '⌗' },
                { l: '用量统计', icon: '⌐' },
                { l: '账单', icon: '¥' },
                { l: '团队', icon: '◉' },
                { l: '审计日志', icon: '☰' },
              ].map((item) => (
                <div
                  key={item.l}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 10px',
                    borderRadius: 6,
                    fontSize: 13,
                    color: item.active ? 'var(--text-1)' : 'var(--text-2)',
                    background: item.active ? 'var(--bg-3)' : 'transparent',
                    cursor: 'pointer',
                    marginBottom: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: item.active ? 'var(--accent)' : 'var(--text-4)',
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.l}</span>
                </div>
              ))}
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: 'var(--text-4)',
                  padding: '20px 8px 6px',
                  letterSpacing: '0.1em',
                }}
              >
                资源
              </div>
              {['文档', '状态', '支持'].map((l) => (
                <div
                  key={l}
                  style={{
                    padding: '8px 10px',
                    borderRadius: 6,
                    fontSize: 13,
                    color: 'var(--text-2)',
                    cursor: 'pointer',
                  }}
                >
                  {l}
                </div>
              ))}
              <div
                style={{
                  marginTop: 24,
                  padding: 12,
                  borderRadius: 8,
                  background: 'var(--bg-3)',
                  border: '1px solid var(--line-1)',
                }}
              >
                <div className="mono" style={{ fontSize: 10, color: 'var(--text-4)' }}>
                  本月余额
                </div>
                <div style={{ marginTop: 4, fontSize: 17, fontWeight: 500 }}>¥ 8,432.10</div>
                <div
                  style={{
                    marginTop: 8,
                    height: 3,
                    background: 'var(--bg-4)',
                    borderRadius: 999,
                  }}
                >
                  <div
                    style={{
                      width: '68%',
                      height: '100%',
                      background: 'var(--accent)',
                      borderRadius: 999,
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: 'var(--text-3)',
                  }}
                >
                  已用 ¥ 2,567 / ¥ 11,000
                </div>
              </div>
            </div>

            <div style={{ padding: '20px 28px', background: 'var(--bg-0)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 22,
                }}
              >
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>
                    欢迎回来
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 500, marginTop: 2 }}>
                    总览 · 字节跳动 / 飞书智能
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-ghost btn-sm">导出</button>
                  <button className="btn btn-primary btn-sm">+ 新建密钥</button>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                {[
                  {
                    l: '总请求',
                    v: '12.4M',
                    d: '+18.2%',
                    c: 'var(--accent-3)',
                    spark: [40, 42, 38, 46, 48, 52, 58, 62, 60, 68, 72, 78, 82, 88],
                    color: '#7dd3fc',
                  },
                  {
                    l: '消耗 (¥)',
                    v: '2,567',
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
                  <div key={m.l} className="card" style={{ padding: 14 }}>
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
                      <span style={{ fontSize: 10, color: m.c }}>{m.d}</span>
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 22,
                        fontWeight: 500,
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {m.v}
                    </div>
                    <div style={{ marginTop: 6 }}>
                      <SparkLine data={m.spark} color={m.color} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 18, marginBottom: 16 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>请求量 · 按模型</div>
                    <div
                      className="mono"
                      style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 2 }}
                    >
                      过去 30 天
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {['24h', '7d', '30d', '90d'].map((t, i) => (
                      <button
                        key={t}
                        style={{
                          padding: '4px 10px',
                          fontSize: 11.5,
                          borderRadius: 4,
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
                <svg width="100%" height="160" viewBox="0 0 800 160" preserveAspectRatio="none">
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 40}
                      x2="800"
                      y2={i * 40}
                      stroke="rgba(255,255,255,0.04)"
                    />
                  ))}
                  {(() => {
                    const pts = (offset, amp, freq, phase) =>
                      Array.from({ length: 30 }, (_, i) => {
                        const x = (i / 29) * 800;
                        const y = 160 - offset - Math.sin(i * freq + phase) * amp - i * 1.5;
                        return [x, y];
                      });
                    const a1 = pts(20, 12, 0.4, 0);
                    const a2 = pts(50, 14, 0.5, 1);
                    const a3 = pts(80, 10, 0.3, 2);
                    return (
                      <>
                        <polyline
                          points={[...a1, [800, 160], [0, 160]].map((p) => p.join(',')).join(' ')}
                          fill="rgba(125,211,252,0.20)"
                          stroke="#7dd3fc"
                          strokeWidth="1.4"
                        />
                        <polyline
                          points={[...a2, [800, 160], [0, 160]].map((p) => p.join(',')).join(' ')}
                          fill="rgba(167,139,250,0.20)"
                          stroke="#a78bfa"
                          strokeWidth="1.4"
                        />
                        <polyline
                          points={[...a3, [800, 160], [0, 160]].map((p) => p.join(',')).join(' ')}
                          fill="rgba(52,211,153,0.18)"
                          stroke="#34d399"
                          strokeWidth="1.4"
                        />
                      </>
                    );
                  })()}
                </svg>
                <div
                  style={{
                    display: 'flex',
                    gap: 18,
                    marginTop: 12,
                    fontSize: 11.5,
                    color: 'var(--text-3)',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{ width: 8, height: 8, background: '#7dd3fc', borderRadius: 2 }}
                    />
                    OpenAI
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{ width: 8, height: 8, background: '#a78bfa', borderRadius: 2 }}
                    />
                    Anthropic
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{ width: 8, height: 8, background: '#34d399', borderRadius: 2 }}
                    />
                    Google
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr',
                  gap: 12,
                }}
              >
                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 14 }}>
                    API 密钥
                  </div>
                  {[
                    { name: 'production-飞书', key: 'sk-bus-···7Yhq', usage: '1.2M', limit: '5M' },
                    { name: 'staging-doc', key: 'sk-bus-···Bd9k', usage: '420K', limit: '1M' },
                    { name: 'mobile-ios', key: 'sk-bus-···Lp3v', usage: '64K', limit: '200K' },
                  ].map((k) => (
                    <div
                      key={k.name}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.2fr 1fr',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderTop: '1px solid var(--line-1)',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 12.5 }}>{k.name}</div>
                        <div
                          className="mono"
                          style={{ fontSize: 10.5, color: 'var(--text-4)', marginTop: 2 }}
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
                              width: '34%',
                              height: '100%',
                              background: 'var(--accent)',
                            }}
                          />
                        </div>
                        <div
                          className="mono"
                          style={{
                            fontSize: 10,
                            color: 'var(--text-4)',
                            marginTop: 4,
                          }}
                        >
                          {k.usage} / {k.limit}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: 11, color: 'var(--accent-3)' }}>● 活跃</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card" style={{ padding: 18 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 14 }}>
                    实时活动
                  </div>
                  {[
                    { t: '00:12', e: 'gpt-5 · 412 tok', c: 'var(--accent)' },
                    { t: '00:11', e: 'claude-haiku · 89 tok', c: 'var(--accent-2)' },
                    { t: '00:11', e: 'gemini-2.5 · 1.2K', c: 'var(--accent-3)' },
                    { t: '00:10', e: '密钥 mobile-ios 速率', c: 'var(--accent-4)' },
                    { t: '00:09', e: 'gpt-5 · 234 tok', c: 'var(--accent)' },
                  ].map((a, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
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
                        style={{ fontSize: 10.5, color: 'var(--text-4)', width: 36 }}
                      >
                        {a.t}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{a.e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesB = () => {
  const items = [
    { t: '密钥层级管理', d: '为每个项目、环境、成员发放独立密钥，单独配额与限速。' },
    { t: '成本归因', d: '请求自动按部门、项目、用户标签归集，账单一目了然。' },
    { t: '审计日志', d: '完整的请求审计链路，30 天可回溯，满足等保与 SOC2 要求。' },
    { t: '智能路由', d: '故障自动切换，多 region 多 provider 备份，保证服务连续性。' },
    { t: '内容安全', d: '内置敏感词与提示词注入检测，可定制企业自有词库。' },
    { t: '私有部署', d: '支持 VPC 专线、混合云、本地化推理网关，数据不出域。' },
  ];
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line-1)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <div className="eyebrow">企业能力</div>
          <h2 className="h-1" style={{ marginTop: 16 }}>
            不只是中转，是基础设施。
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--line-1)',
            border: '1px solid var(--line-1)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {items.map((it, i) => (
            <div key={it.t} style={{ background: 'var(--bg-0)', padding: 32 }}>
              <div
                className="mono"
                style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 14 }}
              >
                {String(i + 1).padStart(2, '0')} · {it.t}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  margin: '0 0 10px',
                  letterSpacing: '-0.015em',
                }}
              >
                {it.t}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: 'var(--text-3)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialB = () => (
  <section className="section" style={{ borderTop: '1px solid var(--line-1)' }}>
    <div className="container" style={{ maxWidth: 920 }}>
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: 32,
          lineHeight: 1.4,
          letterSpacing: '-0.02em',
          color: 'var(--text-1)',
          fontWeight: 400,
        }}
      >
        "迁移到 BusAPI 后，我们三个产品线共用一份配额，财务对账时间从两天缩短到二十分钟。
        国内调用 Claude 也从 1.4 秒降到 380 毫秒。"
      </blockquote>
      <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            background: 'var(--bg-3)',
            border: '1px solid var(--line-2)',
          }}
        />
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>陈晓东</div>
          <div style={{ fontSize: 12.5, color: 'var(--text-3)', marginTop: 2 }}>
            某头部短视频平台 · AI 平台负责人
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <TopNav activeLabel="产品" />
      <HeroB />
      <FeaturesB />
      <TestimonialB />
      <Footer />
    </div>
  );
}
