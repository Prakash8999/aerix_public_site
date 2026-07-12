import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Aerix Energy - Premium Electric Vehicles",
    description: "Discover Aerix Energy, your premier choice for EV mobility. We offer high-performance electric scooters and innovative battery swapping technology.",
    keywords: ["electric scooters", "EV mobility", "battery swapping", "Aerix Energy", "electric vehicles"],
    authors: [{ name: "Aerix Energy" }],
    openGraph: {
        title: "Aerix Energy - Premium Electric Vehicles",
        description: "Discover Aerix Energy, your premier choice for EV mobility. We offer high-performance electric scooters and innovative battery swapping technology.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <QueryProvider>
                        <TooltipProvider>
                            {children}
                            <Toaster />
                        </TooltipProvider>
                    </QueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
