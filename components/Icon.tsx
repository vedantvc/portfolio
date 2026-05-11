type IconName = 'user' | 'briefcase' | 'wrench' | 'code' | 'rocket' | 'cap' | 'building' | 'laptop' | 'calendar' | 'pin' | 'download' | 'mail' | 'phone' | 'linkedin' | 'github' | 'arrowUp'

const paths: Record<IconName, React.ReactNode> = {
  user: (
    <>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  briefcase: (
    <>
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z" />
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-2 4-2 4s3-1 4-2" />
      <path d="M9 15 4 10l2-3 7 1 3 3 1 7-3 2-5-5Z" />
      <path d="M14 4c2-1 4-1 6 0 1 2 1 4 0 6" />
      <circle cx="14" cy="10" r="1.5" />
    </>
  ),
  cap: (
    <>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4c3 2 7 2 10 0v-4" />
      <path d="M21 9v6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="4" width="14" height="10" rx="2" />
      <path d="M3 18h18" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 11h16" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4 4 0 0 0-1-3c3 0 6-2 6-6a5 5 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.6s-1.2-.4-3.9 1.5a13.5 13.5 0 0 0-7 0C4.8 1.3 3.6 1.7 3.6 1.7a5 5 0 0 0-.1 3.6A5 5 0 0 0 2 9c0 4 3 6 6 6a4 4 0 0 0-1 3v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </>
  ),
  arrowUp: (
    <>
      <path d="m6 15 6-6 6 6" />
      <path d="M12 9v12" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}
