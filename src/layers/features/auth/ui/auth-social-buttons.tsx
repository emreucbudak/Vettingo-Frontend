import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
function GoogleIcon() {
  return <FcGoogle aria-hidden="true" className="h-[18px] w-[18px] shrink-0" />;
}

function LinkedInIcon() {
  return <FaLinkedin aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[#0A66C2]" />;
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
