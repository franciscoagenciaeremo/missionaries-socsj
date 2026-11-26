import type { Metadata } from "next";
import Script from "next/script";
import { houseConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${houseConfig.domain}`),
  title: {
    default: "Missionary Chronicles · Saint John Society",
    template: "%s · Saint John Society",
  },
  description:
    "News from the Saint John Society missionaries for their families back home.",
  openGraph: {
    siteName: "Missionary Chronicles · Saint John Society",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Missionary Chronicles · Saint John Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const gaId = houseConfig.ga4MeasurementId;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-ssj-white text-ssj-black">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
