import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { contactDetails } from "@/lib/copy";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="grain bg-ink text-ink-fg">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt={t.lab}
              className="size-14 object-contain"
            />
            <p className="font-display text-3xl italic">{t.lab}</p>
          </div>
          <p className="mt-2 text-[11px] tracking-[0.24em] text-ink-muted uppercase">
            {t.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {t.affiliation}
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[11px] tracking-[0.22em] text-ink-muted uppercase">
            {t.nav.contact}
          </p>
          <a
            className="block text-ink-fg hover:text-ink-muted"
            href={`mailto:${contactDetails.email}`}
          >
            {contactDetails.email}
          </a>
          <p className="mt-2 text-ink-muted">
            {contactDetails.officeRoom} · {contactDetails.officePhone}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <Link to="/join" className="text-ink-muted hover:text-ink-fg">
            {t.nav.join}
          </Link>
          <a
            href={contactDetails.scholarUrl}
            className="text-ink-muted hover:text-ink-fg"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.scholar}
          </a>
          <a
            href={contactDetails.facultyUrl}
            className="text-ink-muted hover:text-ink-fg"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.faculty}
          </a>
        </div>
      </div>
      <div className="relative border-t border-ink-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-[11px] tracking-[0.16em] text-ink-muted uppercase sm:px-6">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
