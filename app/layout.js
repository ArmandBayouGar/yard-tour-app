import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Yard Tour",
  description: "Interactive front yard tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}// Original content from app/layout.tsx here. Please provide the contents or details if needed, so I can proceed.
