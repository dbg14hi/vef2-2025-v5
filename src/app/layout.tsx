import { draftMode } from "next/headers";
import "./global.scss";
import Header from "@/components/Header/Header";

export async function generateMetadata() {
  const { isEnabled: isDraftModeEnabled } = draftMode();
  return { title: "My Website" }; // Replace with your actual metadata needs
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}