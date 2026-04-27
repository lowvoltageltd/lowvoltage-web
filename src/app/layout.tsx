import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Low Voltage Ltd",
    template: "%s | Low Voltage Ltd",
  },
  description: "Practical tools for trade professionals.",
  metadataBase: new URL("https://lowvoltage.nz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <header className="border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
              Low Voltage Ltd
            </a>
            <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-100 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} Low Voltage Ltd. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="mailto:privacy@lowvoltage.nz" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
