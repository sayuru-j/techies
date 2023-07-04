import Providers from "@/components/providers";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Providers>
      <div className="min-h-screen">{children}</div>
    </Providers>
  );
}
