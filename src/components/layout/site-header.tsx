import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/research", key: "research" as const },
  { to: "/publications", key: "publications" as const },
  { to: "/people", key: "people" as const },
  { to: "/news", key: "news" as const },
  { to: "/join", key: "join" as const },
  { to: "/contact", key: "contact" as const },
];

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center border border-ink-fg/20 p-0.5 text-[10px] font-medium tracking-[0.18em]">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "px-2.5 py-1",
          lang === "en" ? "bg-ink-fg text-ink" : "text-ink-muted hover:text-ink-fg",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={cn(
          "px-2.5 py-1",
          lang === "zh" ? "bg-ink-fg text-ink" : "text-ink-muted hover:text-ink-fg",
        )}
      >
        简
      </button>
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a
          href="https://www.um.edu.mo/"
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/um-lockup.png`}
            alt="University of Macau"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] tracking-[0.2em] text-ink-muted uppercase transition-colors hover:text-ink-fg [&.active]:text-ink-fg"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <Button
            variant="ghost"
            size="icon"
            className="text-ink-fg hover:bg-ink-line lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-ink-line bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink-line px-1 py-4 text-sm tracking-[0.18em] text-ink-fg uppercase"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
