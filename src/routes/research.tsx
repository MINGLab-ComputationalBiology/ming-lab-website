import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/research")({ component: ResearchPage });

function ResearchPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHero kicker={t.research.kicker} title={t.research.title} lead={t.research.lead} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-24">
          {t.research.areas.map((area, i) => (
            <article
              key={area.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <p className="font-display text-5xl italic text-muted/40">0{i + 1}</p>
                <h2 className="mt-2 font-display text-4xl italic">{area.title}</h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                  {area.body}
                </p>
              </div>
              <div className="frame bg-ink">
                <img
                  src={area.image}
                  alt={area.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-24 border-t border-border pt-12">
          <h2 className="font-display text-3xl italic">{t.research.methodsTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.research.methods.map((m) => (
              <li
                key={m}
                className="border border-border bg-paper px-5 py-4 text-sm tracking-wide"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
