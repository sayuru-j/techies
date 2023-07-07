import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import Providers from "@/components/providers";
import SignInButton from "@/components/signin-button";
import { dashboardConfig } from "@/config/dashboard";
import { useSession } from "next-auth/react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <Providers>
      <div>
        <main>
          <header className="flex justify-between items-center h-20 py-6 container mx-auto">
            <MainNav items={dashboardConfig.mainNav} />
            <SignInButton />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </Providers>
  );
}
