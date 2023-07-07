interface StoreLayoutProps {
  children: React.ReactNode;
}

export default async function StoreLayout({ children }: StoreLayoutProps) {
  return <main className="container mx-auto min-h-screen">{children}</main>;
}
