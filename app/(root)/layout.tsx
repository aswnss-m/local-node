import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import { ProjectsProvider } from "@/lib/useProject";
import ErrorBoundary from "@/lib/errorBound";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local Node",
  description: "Generated by tauri and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
      <ErrorBoundary>
        <ProjectsProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1  overflow-hidden">{children}</main>
          </div>
        </ProjectsProvider>
      </ErrorBoundary>
      </body>
    </html>
  );
}