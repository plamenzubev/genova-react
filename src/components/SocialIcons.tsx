type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.83-4.92 5.2v2.8H5.2v3.7h2.93V22h3.7v-5.25h2.82l.45-3.7h-3.27v-2.4c0-1.07.29-1.85 1.87-1.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TikTokIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14.5 3h2.2c.28 1.9 1.63 3.36 3.6 3.6v2.24c-1.31-.02-2.55-.42-3.6-1.1v6.1c0 3.05-2.47 5.52-5.52 5.52A5.52 5.52 0 0 1 5.66 14c0-2.95 2.3-5.36 5.22-5.51v2.28a3.24 3.24 0 0 0-2.98 3.23A3.24 3.24 0 0 0 11.14 17a3.24 3.24 0 0 0 3.24-3.24V3h.12Z"
        fill="currentColor"
      />
    </svg>
  );
}
