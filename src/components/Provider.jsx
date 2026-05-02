export const Provider = ({ name, size = 28 }) => {
  const map = {
    OpenAI: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path
          fill="#c8cbd2"
          d="M16 4a8 8 0 0 0-7.4 5l-.4-.1A6 6 0 0 0 5.6 19l.3.4A8 8 0 0 0 13 28a8 8 0 0 0 7.4-5l.4.1A6 6 0 0 0 26.4 13l-.3-.4A8 8 0 0 0 19 4zm-3 6a6 6 0 0 1 5.5 3.5L13 17v-7zm6.5 1.5L24 14v6l-5.5 3-5-2.8 5-3 5.4 3.1V14L19 11.5zM7 12.5L13 16v6l-5-2.8V13z"
        />
      </svg>
    ),
    Anthropic: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#c8cbd2" d="M11 6h4l7 20h-4l-1.5-4.4h-7L8 26H4L11 6zm.7 11.6h4.6L14 11.4l-2.3 6.2z" />
      </svg>
    ),
    Google: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path
          fill="#c8cbd2"
          d="M16 14v4.5h6.4a6 6 0 0 1-2.6 4l4.2 3.3A11 11 0 0 0 27.5 16c0-.7-.1-1.4-.2-2H16zm-8 1.5l-4.4 3.4A12 12 0 0 0 16 28c3 0 5.5-1 7.4-2.7l-4.2-3.3A7.4 7.4 0 0 1 8 15.5zM3.6 13.4a12 12 0 0 0 0 5.2L8 15.5a7.3 7.3 0 0 1 0-1l-4.4-1.1zM16 8c2 0 3.7.7 5.1 2l3.7-3.7A11 11 0 0 0 16 4 12 12 0 0 0 3.6 13.4L8 16.5A7.3 7.3 0 0 1 16 8z"
        />
      </svg>
    ),
    Meta: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path
          fill="#c8cbd2"
          d="M3 16c0-7 3.5-11 8-11 3 0 5 1.5 7 4.5 2-3 4-4.5 7-4.5 4.5 0 8 4 8 11 0 4-1.5 7-4 8.5-2 1-4 0-6-2.5-1.5-2-3-4.5-5-8-2 3.5-3.5 6-5 8-2 2.5-4 3.5-6 2.5C4.5 23 3 20 3 16zm5.5 0c0 4 1.5 6 3 6 1 0 2-.5 3.5-2.5C13 16 11 12 9.5 10c-.5 1-1 3-1 6zm15 0c0-3-.5-5-1-6-1.5 2-3.5 6-5 9.5C19 21.5 20 22 21 22c1.5 0 3-2 3-6z"
        />
      </svg>
    ),
    DeepSeek: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path fill="#c8cbd2" d="M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-1 7l5 5-5 5v-3h-7v-4h7v-3z" />
      </svg>
    ),
    Mistral: (
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <rect fill="#c8cbd2" x="4" y="4" width="6" height="6" />
        <rect fill="#c8cbd2" x="22" y="4" width="6" height="6" />
        <rect fill="#c8cbd2" x="4" y="13" width="6" height="6" />
        <rect fill="#c8cbd2" x="13" y="13" width="6" height="6" />
        <rect fill="#c8cbd2" x="22" y="13" width="6" height="6" />
        <rect fill="#c8cbd2" x="4" y="22" width="6" height="6" />
        <rect fill="#c8cbd2" x="22" y="22" width="6" height="6" />
      </svg>
    ),
  };
  return map[name] || null;
};
