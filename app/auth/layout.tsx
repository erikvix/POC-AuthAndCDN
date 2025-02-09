export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
