"use client";
import Sidebar from "@/components/SideBar";
 
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="flex min-h-screen">
          <div className="w-1/4 bg-gray-100 p-4">
            <Sidebar />
          </div>

          <div className="flex-1 p-6">
            <main>{children}</main>
          </div>
        </div>

       </body>
    </html>
  );
}
