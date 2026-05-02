import { PublicNav } from '../components/PublicNav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Provider } from '../components/Provider.jsx';

const models = [
  { name: 'gpt-5', vendor: 'OpenAI', desc: 'OpenAI 旗舰多模态推理模型，256K 上下文。', ctx: '256K', i: '¥0.018', o: '¥0.072', tag: '最强', tc: 'var(--accent-2)' },
  { name: 'claude-sonnet-4.5', vendor: 'Anthropic', desc: 'Anthropic Sonnet 系列最新版，长任务推理首选。', ctx: '200K', i: '¥0.021', o: '¥0.105', tag: '推荐', tc: 'var(--accent)' },
  { name: 'gemini-2.5-pro', vendor: 'Google', desc: '2M 上下文窗口，原生多模态，文档处理利器。', ctx: '2M', i: '¥0.009', o: '¥0.036', tag: '长上下文', tc: 'var(--accent-3)' },
  { name: 'o4-mini', vendor: 'OpenAI', desc: '深度推理模型，性价比之选。', ctx: '128K', i: '¥0.008', o: '¥0.032', tag: '推理', tc: 'var(--accent-4)' },
  { name: 'claude-haiku-4.5', vendor: 'Anthropic', desc: '低延迟快速响应，适合高并发场景。', ctx: '200K', i: '¥0.006', o: '¥0.030', tag: '快速', tc: 'var(--accent-3)' },
  { name: 'gpt-image-1', vendor: 'OpenAI', desc: '高质量图像生成模型，支持高分辨率输出。', ctx: '—', i: '¥0.28 / 张', o: '—', tag: '图像', tc: 'var(--accent-2)' },
  { name: 'gemini-2.5-flash', vendor: 'Google', desc: 'Gemini 系列高速版本，毫秒级响应。', ctx: '1M', i: '¥0.003', o: '¥0.012', tag: '快速', tc: 'var(--accent-3)' },
  { name: 'deepseek-v4', vendor: 'DeepSeek', desc: '国产开源旗舰，中文场景表现优秀。', ctx: '128K', i: '¥0.002', o: '¥0.008', tag: '性价比', tc: 'var(--accent-3)' },
  { name: 'text-embedding-4', vendor: 'OpenAI', desc: '语义嵌入模型，3072 维度。', ctx: '8K', i: '¥0.0008', o: '—', tag: '嵌入', tc: 'var(--text-3)' },
];

export default function ModelsPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
      <PublicNav active="模型" />
      <section style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="eyebrow">模型矩阵</div>
          <h1 className="h-1" style={{ marginTop: 14 }}>
            模型市场{' '}
            <span style={{ color: 'var(--text-4)', fontWeight: 400 }}>
              · 84 个模型
            </span>
          </h1>

          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <input
              className="input"
              placeholder="搜索模型..."
              style={{ width: 280 }}
            />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['全部', 'OpenAI', 'Anthropic', 'Google', 'Meta', 'DeepSeek', '图像', '嵌入'].map(
                (t, i) => (
                  <button
                    key={t}
                    style={{
                      padding: '7px 12px',
                      fontSize: 12.5,
                      borderRadius: 6,
                      border: '1px solid var(--line-2)',
                      background: i === 0 ? 'var(--bg-3)' : 'transparent',
                      color: i === 0 ? 'var(--text-1)' : 'var(--text-2)',
                      cursor: 'pointer',
                    }}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {models.map((m) => (
              <div
                key={m.name}
                className="card"
                style={{ padding: 22, transition: 'all .15s', cursor: 'pointer' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                  }}
                >
                  <Provider name={m.vendor} size={24} />
                  <span
                    style={{
                      padding: '2px 8px',
                      fontSize: 10.5,
                      borderRadius: 4,
                      color: m.tc,
                      border: `1px solid ${m.tc}40`,
                      background: `${m.tc}10`,
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}
                >
                  {m.name}
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 12 }}
                >
                  {m.vendor}
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    color: 'var(--text-3)',
                    lineHeight: 1.55,
                    margin: '0 0 16px',
                    minHeight: 48,
                  }}
                >
                  {m.desc}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: 8,
                    padding: 10,
                    background: 'var(--bg-2)',
                    borderRadius: 6,
                    border: '1px solid var(--line-1)',
                  }}
                >
                  <div>
                    <div
                      className="mono"
                      style={{ fontSize: 9.5, color: 'var(--text-4)' }}
                    >
                      CTX
                    </div>
                    <div className="mono" style={{ fontSize: 11.5, marginTop: 2 }}>
                      {m.ctx}
                    </div>
                  </div>
                  <div>
                    <div
                      className="mono"
                      style={{ fontSize: 9.5, color: 'var(--text-4)' }}
                    >
                      IN
                    </div>
                    <div className="mono" style={{ fontSize: 11.5, marginTop: 2 }}>
                      {m.i}
                    </div>
                  </div>
                  <div>
                    <div
                      className="mono"
                      style={{ fontSize: 9.5, color: 'var(--text-4)' }}
                    >
                      OUT
                    </div>
                    <div className="mono" style={{ fontSize: 11.5, marginTop: 2 }}>
                      {m.o}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
