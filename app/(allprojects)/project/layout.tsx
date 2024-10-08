import { Inter } from "next/font/google";
import "../../globals.css";
import Sidebar from "@/components/sidebar";
import { ProjectsProvider } from "@/lib/useProject";
import ErrorBoundary from "@/lib/errorBound";
import { ProjectAnalyzerProvider } from "@/lib/projectDetails";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

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
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectAnalyzerProvider>
                  <main className="flex-1  overflow-hidden">{children}</main>
                </ProjectAnalyzerProvider>
              </Suspense>
          </div>
        </ProjectsProvider>
      </ErrorBoundary>
      </body>
    </html>
  );
}