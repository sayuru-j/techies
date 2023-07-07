interface StoreLayoutProps {
  children: React.ReactNode;
}

export default async function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <main className="container mx-auto min-h-screen px-6 lg:px-4 xl:px-0">
      {children}
    </main>
  );
}
