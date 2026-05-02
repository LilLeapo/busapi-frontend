import { AppShell, PageHeader } from '../components/AppShell.jsx';

const Section = ({ title, desc, children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 48,
      padding: '32px 0',
      borderBottom: '1px solid var(--line-1)',
    }}
  >
    <div>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{title}</h3>
      <p
        style={{
          margin: '6px 0 0',
          fontSize: 13,
          color: 'var(--text-3)',
          lineHeight: 1.55,
        }}
      >
        {desc}
      </p>
    </div>
    <div>{children}</div>
  </div>
);

const Toggle = ({ on, label }) => (
  <label
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      color: on ? 'var(--text-1)' : 'var(--text-2)',
    }}
  >
    <span
      style={{
        width: 28,
        height: 16,
        borderRadius: 999,
        background: on ? 'var(--accent)' : 'var(--bg-3)',
        position: 'relative',
        border: on ? 'none' : '1px solid var(--line-2)',
      }}
    >
      <span
        style={{
          position: 'absolute',
          right: on ? 2 : undefined,
          left: on ? undefined : 2,
          top: on ? 2 : 1,
          width: 12,
          height: 12,
          borderRadius: 999,
          background: on ? '#fff' : 'var(--text-4)',
        }}
      />
    </span>
    <span style={{ fontSize: 13 }}>{label}</span>
  </label>
);

export default function SettingsPage() {
  return (
    <AppShell active="settings">
      <PageHeader title="工作区设置" subtitle="WORKSPACE SETTINGS · 飞书智能" />
      <div style={{ padding: '0 32px', maxWidth: 1100 }}>
        <div
          style={{
            display: 'flex',
            gap: 4,
            borderBottom: '1px solid var(--line-1)',
            marginTop: 0,
          }}
        >
          {['通用', '品牌化', '安全', '计费偏好', 'Webhooks', 'API 兼容性'].map((t, i) => (
            <button
              key={t}
              style={{
                padding: '14px 16px',
                background: 'transparent',
                border: 0,
                fontSize: 13,
                color: i === 0 ? 'var(--text-1)' : 'var(--text-3)',
                borderBottom: i === 0 ? '2px solid var(--accent)' : '2px solid transparent',
                cursor: 'pointer',
                marginBottom: -1,
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <Section
          title="工作区身份"
          desc="名称与 slug 在 URL、API 元数据、账单中可见。"
        >
          <div style={{ display: 'grid', gap: 16 }}>
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
                工作区名称
              </label>
              <input
                className="input"
                defaultValue="飞书智能"
                style={{ width: '100%', maxWidth: 420 }}
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
                SLUG
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,
                  maxWidth: 420,
                }}
              >
                <span
                  className="mono"
                  style={{
                    padding: '8px 12px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--line-2)',
                    borderRight: 0,
                    borderRadius: '6px 0 0 6px',
                    fontSize: 12,
                    color: 'var(--text-4)',
                  }}
                >
                  busapi.cn/w/
                </span>
                <input
                  className="input"
                  defaultValue="feishu-ai"
                  style={{ flex: 1, borderRadius: '0 6px 6px 0' }}
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
                默认时区
              </label>
              <select
                className="input"
                style={{ width: '100%', maxWidth: 420 }}
                defaultValue="Asia/Shanghai"
              >
                <option>Asia/Shanghai (UTC+8)</option>
                <option>Asia/Hong_Kong (UTC+8)</option>
                <option>UTC</option>
              </select>
            </div>
          </div>
        </Section>

        <Section
          title="API 默认行为"
          desc="新调用未指定参数时使用的全局默认值。"
        >
          <div style={{ display: 'grid', gap: 16 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
                maxWidth: 420,
              }}
            >
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
                  默认上游优先级
                </label>
                <select className="input" style={{ width: '100%' }}>
                  <option>价格最优</option>
                  <option>延迟最低</option>
                  <option>稳定性最高</option>
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
                  失败重试
                </label>
                <select className="input" style={{ width: '100%' }}>
                  <option>3 次（指数退避）</option>
                  <option>1 次</option>
                  <option>禁用</option>
                </select>
              </div>
            </div>
            <Toggle on label="启用跨厂商自动 Failover" />
            <Toggle on label="记录请求/响应内容（用于调试，30 天后自动删除）" />
            <Toggle on={false} label="启用 PII 自动脱敏（实验性）" />
          </div>
        </Section>

        <Section
          title="数据驻留"
          desc="选择请求记录与日志的物理存储位置，影响合规要求。"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 10,
              maxWidth: 540,
            }}
          >
            {[
              ['中国大陆', '北京 + 上海', '已选'],
              ['亚太', '东京 + 新加坡', ''],
              ['欧洲', '法兰克福 + 都柏林', ''],
            ].map(([n, l, sel]) => (
              <div
                key={n}
                style={{
                  padding: 16,
                  borderRadius: 8,
                  border: sel ? '1px solid var(--accent)' : '1px solid var(--line-2)',
                  background: sel ? 'rgba(125,211,252,0.05)' : 'var(--bg-1)',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{n}</div>
                  {sel && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: 'var(--accent)',
                      }}
                    />
                  )}
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 8 }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="预算与告警"
          desc="超过阈值时通过邮件、Slack、飞书通知工作区管理员。"
        >
          <div style={{ display: 'grid', gap: 14 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
                maxWidth: 420,
              }}
            >
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
                  月度硬上限
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <span
                    className="mono"
                    style={{
                      padding: '8px 10px',
                      background: 'var(--bg-2)',
                      border: '1px solid var(--line-2)',
                      borderRight: 0,
                      borderRadius: '6px 0 0 6px',
                      fontSize: 12,
                      color: 'var(--text-3)',
                    }}
                  >
                    ¥
                  </span>
                  <input
                    className="input"
                    defaultValue="50000"
                    style={{ flex: 1, borderRadius: '0 6px 6px 0' }}
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
                  软告警阈值
                </label>
                <select
                  className="input"
                  style={{ width: '100%' }}
                  defaultValue="80%"
                >
                  <option>50%</option>
                  <option>70%</option>
                  <option>80%</option>
                  <option>90%</option>
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
                通知渠道
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                  ['邮箱', true],
                  ['飞书机器人', true],
                  ['Slack', false],
                  ['钉钉', false],
                  ['Webhook', false],
                ].map(([n, on]) => (
                  <span
                    key={n}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 999,
                      background: on ? 'rgba(125,211,252,0.08)' : 'var(--bg-2)',
                      border: on
                        ? '1px solid rgba(125,211,252,0.3)'
                        : '1px solid var(--line-1)',
                      color: on ? 'var(--accent)' : 'var(--text-3)',
                      fontSize: 12,
                      cursor: 'pointer',
                    }}
                  >
                    {on ? '● ' : '+ '}
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="危险区域"
          desc="不可逆操作。请确认你知道在做什么。"
        >
          <div
            style={{
              border: '1px solid rgba(248,113,113,0.3)',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            {[
              [
                '转移工作区所有权',
                '将管理员权限转交给另一名成员，原管理员降级为成员。',
                '转移',
              ],
              [
                '删除工作区',
                '立即停用所有密钥并删除全部数据。30 天内可申请恢复。',
                '删除工作区',
              ],
            ].map(([t, d, btn], i, arr) => (
              <div
                key={t}
                style={{
                  padding: 18,
                  borderBottom:
                    i === arr.length - 1 ? 'none' : '1px solid var(--line-1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t}</div>
                  <div
                    style={{ fontSize: 12.5, color: 'var(--text-3)', marginTop: 4 }}
                  >
                    {d}
                  </div>
                </div>
                <button
                  style={{
                    padding: '8px 16px',
                    borderRadius: 6,
                    background: 'rgba(248,113,113,0.08)',
                    color: '#f87171',
                    border: '1px solid rgba(248,113,113,0.3)',
                    fontSize: 12.5,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ height: 32 }} />
      </div>
    </AppShell>
  );
}
