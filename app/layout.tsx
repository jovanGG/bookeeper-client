import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
