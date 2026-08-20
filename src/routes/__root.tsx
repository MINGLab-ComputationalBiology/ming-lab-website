import { createRootRoute, Outlet } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <I18nProvider>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
