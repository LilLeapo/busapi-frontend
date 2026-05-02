export const BusLogo = ({ size = 24, color }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="bus-g" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0" stopColor="#7dd3fc" />
        <stop offset="1" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
    <circle cx="6" cy="8" r="2.2" fill="url(#bus-g)" />
    <circle cx="6" cy="16" r="2.2" fill="url(#bus-g)" />
    <circle cx="6" cy="24" r="2.2" fill="url(#bus-g)" />
    <path
      d="M8 8 L18 16 L8 24"
      stroke={color || 'url(#bus-g)'}
      strokeWidth="1.3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M8 16 H18"
      stroke={color || 'url(#bus-g)'}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="22" cy="16" r="3.5" fill="none" stroke="url(#bus-g)" strokeWidth="1.6" />
    <circle cx="22" cy="16" r="1.4" fill="url(#bus-g)" />
  </svg>
);

export const BusWordmark = ({ small }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
    <BusLogo size={small ? 20 : 24} />
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: small ? 14.5 : 17,
        letterSpacing: '-0.02em',
        color: 'var(--text-1)',
      }}
    >
      BusAPI
    </span>
  </div>
);
