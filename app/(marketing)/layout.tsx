import SignInButton from "@/components/signin-button";
import MainNav from "@/components/main-nav";
import { dashboardConfig } from "@/config/dashboard";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div>
      <header className="container mx-auto z-40">
        <div className="h-20 flex items-center justify-between py-6">
          <MainNav items={dashboardConfig.mainNav} />
          <SignInButton />
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
