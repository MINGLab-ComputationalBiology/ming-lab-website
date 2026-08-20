import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <section className="grain overflow-hidden border-b border-ink-line bg-ink text-ink-fg">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_16rem] xl:grid-cols-[1fr_20rem]">
        <div>
          <p className="text-[11px] font-medium tracking-[0.32em] text-ink-muted uppercase">
            {kicker}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium italic tracking-tight text-ink-fg sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {lead}
            </p>
          ) : null}
          {children}
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt={t.lab}
          className="mx-auto size-44 object-contain sm:size-52 lg:size-60 xl:size-72"
        />
      </div>
    </section>
  );
}
