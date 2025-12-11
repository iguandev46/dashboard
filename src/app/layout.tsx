import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "./providers";
import { Sidebar } from "./dashboard/components/Sidebar";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "HUD CRM",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="font-sans bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          
          {/* GLOBAL LAYOUT */}
          <div className="flex min-h-screen">
            
            {/* SIDEBAR ALWAYS VISIBLE */}
            <Sidebar />

            {/* PAGE CONTENT */}
            <main className="flex-1 min-h-screen">
              {children}
            </main>

          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
