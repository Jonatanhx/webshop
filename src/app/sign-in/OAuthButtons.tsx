import { Icon } from "@iconify/react/dist/iconify.js";

export default function OAuthButtons() {
  return (
    <div className="flex flex-col gap-4 min-w-[30%]">
      <button className="oauthbtn">
        <Icon icon="logos:google-icon" className="size-6" /> Continue with
        Google
      </button>
      <button className="oauthbtn">
        <Icon icon="mdi:github" className="size-8" />
        Continue with Github
      </button>
    </div>
  );
}
