import type { ReactNode } from "react";
import Link from "next/link";
import { MaterialIcon } from "@/shared/ui/material-icon";

export function HrPageHeader({
  action,
  description,
  eyebrow,
  title,
}: {
  action?: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <header className="mb-8 flex flex-col gap-5 border-b border-[#c5c6cd] pb-7 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#006c49]">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`${eyebrow ? "mt-2" : ""} text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30] md:text-4xl`}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#45474c]">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </header>
  );
}

const statToneClasses = {
  blue: "bg-[#dce9ff] text-[#091426]",
  green: "bg-[#dcfce7] text-[#006c49]",
  purple: "bg-[#ece8ff] text-[#42358f]",
  amber: "bg-[#fff2cc] text-[#795900]",
} as const;

export function HrStatGrid({
  items,
}: {
  items: readonly {
    label: string;
    value: string;
    helper: string;
    icon: string;
    tone?: keyof typeof statToneClasses;
  }[];
}) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const tone = item.tone ?? "blue";

        return (
          <article
            className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 shadow-[0_10px_30px_rgba(9,20,38,0.03)]"
            key={item.label}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#45474c]">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0b1c30]">
                  {item.value}
                </p>
              </div>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded ${statToneClasses[tone]}`}
              >
                <MaterialIcon className={item.icon === "handshake" ? "text-[23px]" : "text-[21px]"}>{item.icon}</MaterialIcon>
              </span>
            </div>
            <p className="mt-3 text-[11px] font-medium leading-4 text-[#006c49]">
              {item.helper}
            </p>
          </article>
        );
      })}
    </section>
  );
}

export function HrSectionHeading({
  actionHref,
  actionLabel,
  description,
  title,
}: {
  actionHref?: string;
  actionLabel?: string;
  description?: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold leading-7 text-[#0b1c30]">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm leading-5 text-[#45474c]">{description}</p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Link
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] hover:underline"
          href={actionHref}
        >
          {actionLabel}
          <MaterialIcon className="text-[17px]">arrow_forward</MaterialIcon>
        </Link>
      ) : null}
    </div>
  );
}

export function HrStatusBadge({ status }: { status: string }) {
  const tone =
    status === "Aktif" || status === "Hazır"
      ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
      : status === "Mülakat" || status === "Teknik Mülakat"
        ? "border-[#9cb7e8] bg-[#dce9ff] text-[#091426]"
        : status === "Onay Bekliyor" || status === "Not Bekleniyor"
          ? "border-[#e7bd44] bg-[#fff2cc] text-[#795900]"
          : "border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] ${tone}`}
    >
      {status}
    </span>
  );
}

export function HrAvatar({
  initials,
  size = "md",
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "h-9 w-9 text-xs"
      : size === "lg"
        ? "h-14 w-14 text-base"
        : "h-11 w-11 text-sm";

  return (
    <span
      aria-label={`${initials} profil simgesi`}
      className={`flex shrink-0 items-center justify-center rounded-full border border-[#9cb7e8] bg-[#dce9ff] font-semibold text-[#091426] ${sizeClass}`}
      role="img"
    >
      {initials}
    </span>
  );
}

export function HrPrimaryLink({
  children,
  href,
  icon = "add",
}: {
  children: ReactNode;
  href: string;
  icon?: string;
}) {
  return (
    <Link
      className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
      href={href}
    >
      <MaterialIcon className="text-[18px]">{icon}</MaterialIcon>
      {children}
    </Link>
  );
}

export function HrSecondaryLink({
  children,
  href,
  icon = "arrow_forward",
}: {
  children: ReactNode;
  href: string;
  icon?: string;
}) {
  return (
    <Link
      className="inline-flex items-center justify-center gap-2 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#dce9ff]"
      href={href}
    >
      {children}
      <MaterialIcon className="text-[17px]">{icon}</MaterialIcon>
    </Link>
  );
}
