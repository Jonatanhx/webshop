import { Icon } from "@iconify/react/dist/iconify.js";

export default function SettingsBar() {
  return (
    <div className="flex flex-1 justify-end">
      <button className="flex gap-1 items-center hover:cursor-pointer">
        <p className="text-xl">🇬🇧</p> English
        <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      </button>
      <button className="flex gap-1 items-center hover:cursor-pointer">
        <Icon icon="stash:globe-light" className="size-6" /> Sweden
        <Icon icon="mdi-light:chevron-down" className="size-6 pt-1" />
      </button>
    </div>
  );
}
