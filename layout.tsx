import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Yard Tour",
  description: "Interactive front yard tour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}