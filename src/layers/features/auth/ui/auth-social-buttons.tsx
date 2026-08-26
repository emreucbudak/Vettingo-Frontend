function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
      viewBox="0 0 24 24"
    >
      <path
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.41Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.98-.9 6.63-2.43l-3.24-2.54c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.39 13.86a6.01 6.01 0 0 1 0-3.72V7.52H3.04a10 10 0 0 0 0 8.96l3.35-2.62Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.01c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.96 5.52l3.35 2.62C7.18 7.77 9.39 6.01 12 6.01Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
      viewBox="0 0 24 24"
    >
      <rect fill="#0A66C2" height="20" rx="2.5" width="20" x="2" y="2" />
      <circle cx="7.25" cy="7.25" fill="white" r="1.45" />
      <path d="M5.95 10h2.6v8h-2.6z" fill="white" />
      <path
        d="M10.3 10h2.5v1.1h.04c.35-.66 1.2-1.45 2.47-1.45 2.64 0 3.13 1.74 3.13 4V18h-2.61v-3.86c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.03V18H10.3v-8Z"
        fill="white"
      />
    </svg>
  );
}

export function AuthSocialButtons({ separator }: { separator: string }) {
  return (
    <>
      <div className="flex items-center py-6">
        <div className="h-px flex-1 bg-[#c5c6cd]" />
        <span className="mx-4 shrink-0 text-xs font-medium text-[#45474c]">
          {separator}
        </span>
        <div className="h-px flex-1 bg-[#c5c6cd]" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
          type="button"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          className="flex items-center justify-center gap-2 rounded border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold text-[#0b1c30] transition-colors hover:bg-[#eff4ff]"
          type="button"
        >
          <LinkedInIcon />
          LinkedIn
        </button>
      </div>
    </>
  );
}
