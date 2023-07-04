import MainNav from "@/components/main-nav";
import Providers from "@/components/providers";
import SignInButton from "@/components/signin-button";
import { dashboardConfig } from "@/config/dashboard";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <Providers>
      <div>
        <main className="container mx-auto">
          <header className="flex justify-between items-center h-20 py-6">
            <MainNav items={dashboardConfig.mainNav} />
            <SignInButton />
          </header>
          {children}
        </main>
      </div>
    </Providers>
  );
}
