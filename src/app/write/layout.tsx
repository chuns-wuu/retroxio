import Image from "next/image";
import Link from "next/link";

export default function WriteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <header className="flex items-center px-8 py-6">
        <Link href="/" aria-label="retrox home">
          <Image
            src="/logo-full.png"
            alt="retrox logo"
            className="dark:invert"
            width={160}
            height={40}
            priority
          />
        </Link>
      </header>
      {children}
    </div>
  );
}
