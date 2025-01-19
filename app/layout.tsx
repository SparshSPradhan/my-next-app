import React from "react";
import { CssBaseline } from "@mui/material";

export const metadata = {
  title: "My MUI App",
  description: "A responsive app built with MUI and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
