import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { selectedPapers } from "@/lib/publications";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const highlights = selectedPapers;
  const news = newsItems.slice(0, 3);

  return (
    <main>
      <section className="grain relative overflow-hidden bg-ink text-ink-fg">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_18rem] xl:grid-cols-[1fr_22rem]">
            <div>
              <p className="rise text-[11px] tracking-[0.38em] text-ink-muted uppercase">
                {t.hero.kicker}
              </p>
              <h1 className="rise rise-2 mt-6 font-display font-medium italic leading-[0.95] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl">{t.lab}</span>
                <span className="mt-3 block text-3xl text-ink-muted sm:text-4xl lg:text-[2.75rem]">
                  {t.tagline}
                </span>
              </h1>
              <p className="rise rise-3 mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {t.hero.lead}
              </p>
              <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
                <Button variant="inverse" size="lg" asChild>
                  <Link to="/research">{t.hero.ctaResearch}</Link>
                </Button>
                <Button variant="outlineInk" size="lg" asChild>
                  <Link to="/join">{t.hero.ctaJoin}</Link>
                </Button>
              </div>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt={t.lab}
              className="rise rise-2 mx-auto size-56 object-contain sm:size-64 lg:size-72 xl:size-80"
            />
          </div>
          <div className="rise rise-3 mt-12">
            <div className="frame">
              <img
                src={`${import.meta.env.BASE_URL}images/team.jpg`}
                alt={t.hero.photoCaption}
                className="w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex items-end justify-between gap-4 text-[11px] tracking-[0.18em] text-ink-muted uppercase">
              <span>{t.hero.photoCaption}</span>
              <span>2026</span>
            </div>
          </div>
        </div>
        <div className="relative border-t border-ink-line">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
            <Stat value="2,436+" label={t.stats.citations} />
            <Stat value="26+" label={t.stats.papers} />
            <Stat value="18" label="H-index" />
            <Stat value={t.stats.focusValue} label={t.stats.focus} />
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-[11px] tracking-[0.32em] text-muted uppercase">
          {t.homeResearch.kicker}
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">
            {t.homeResearch.title}
          </h2>
          <p className="max-w-xl self-end text-base leading-relaxed text-muted">
            {t.homeResearch.lead}
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.research.areas.map((area, i) => (
            <Link
              key={area.id}
              to="/research"
              className="group overflow-hidden bg-paper shadow-[var(--shadow-border)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 font-display text-2xl italic text-ink-fg">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl italic">{area.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {area.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.32em] text-muted uppercase">
                {t.homePapers.kicker}
              </p>
              <h2 className="mt-3 font-display text-4xl italic sm:text-5xl">
                {t.homePapers.title}
              </h2>
            </div>
            <Link
              to="/publications"
              className="hidden items-center gap-1 text-sm text-accent hover:underline sm:inline-flex"
            >
              {t.homePapers.all} <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-12 divide-y divide-border">
            {highlights.map((p) => (
              <li key={p.id} className="grid gap-3 py-7 md:grid-cols-[5rem_1fr_auto]">
                <span className="font-display text-3xl italic text-muted">
                  {p.year}
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    {p.journal}
                  </p>
                  <h3 className="mt-1 max-w-3xl font-display text-xl italic leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                    {p.authors}
                  </p>
                </div>
                {p.doi ? (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    className="self-center text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI
                  </a>
                ) : null}
                {p.url ? (
                  <a
                    href={p.url}
                    className="self-center text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Full text
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
          <Link
            to="/publications"
            className="mt-6 inline-flex items-center gap-1 text-sm text-accent hover:underline sm:hidden"
          >
            {t.homePapers.all} <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-muted uppercase">
              {t.homeNews.kicker}
            </p>
            <h2 className="mt-3 font-display text-4xl italic">{t.homeNews.title}</h2>
          </div>
          <Link
            to="/news"
            className="text-sm text-accent hover:underline"
          >
            {t.homeNews.all}
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden border border-border bg-paper shadow-[var(--shadow-border)]"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              ) : null}
              <div className="p-6">
                <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
                  {item.date}
                </p>
                <h3 className="mt-3 font-display text-2xl italic leading-snug group-hover:text-accent">
                  {item[lang].title}
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
                  {item[lang].body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="grain bg-ink text-ink-fg">
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-[11px] tracking-[0.32em] text-ink-muted uppercase">
            {t.homeJoin.kicker}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl italic sm:text-6xl">
            {t.homeJoin.title}
          </h2>
          <p className="mt-6 max-w-xl text-ink-muted">{t.homeJoin.lead}</p>
          <Button variant="inverse" size="lg" className="mt-8" asChild>
            <Link to="/join">{t.homeJoin.cta}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.22em] text-ink-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-3xl italic tabular-nums text-ink-fg sm:text-4xl">
        {value}
      </dd>
    </div>
  );
}
