import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { newsItems } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  const { t, lang } = useI18n();
  return (
    <main>
      <PageHero kicker={t.news.kicker} title={t.news.title} lead={t.news.lead} />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol>
          {newsItems.map((item) => (
            <li key={item.id} className="border-b border-border py-10 first:pt-0">
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                {item.date}
              </p>
              <div className={item.image ? "mt-4 grid gap-6 md:grid-cols-[220px_1fr]" : "mt-2"}>
                {item.image ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="block overflow-hidden bg-paper">
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[4/3] w-full object-cover object-top"
                    />
                  </a>
                ) : null}
                <div>
                  <h2 className="font-display text-3xl italic leading-snug">
                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                      {item[lang].title}
                    </a>
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{item[lang].body}</p>
                  {item.links && item.links.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-border px-3 py-1.5 text-accent hover:bg-surface"
                          >
                            {lang === "zh" ? link.labelZh : link.labelEn}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
