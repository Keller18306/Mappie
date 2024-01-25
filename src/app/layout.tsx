import type { Metadata } from "next";
import loadFont from 'next/font/local';
import "./globals.scss";
import Sidebar from "@/ui/Sidebar";
import Image from "next/image";

const montFont = loadFont({
  src: [
    {
      path: './font/Mont-Light.woff2',
      weight: '300'
    },
    {
      path: './font/Mont-Regular.woff2',
      weight: '400' //normal
    },
    {
      path: './font/Mont-SemiBold.woff2',
      weight: '600'
    },
    {
      path: './font/Mont-Bold.woff2',
      weight: '700' //bold
    },
    {
      path: './font/Mont-Heavy.woff2',
      weight: '800'
    },
    {
      path: './font/Mont-Black.woff2',
      weight: '900'
    }
  ]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montFont.className} antialiased`}>
        <div className='flex gap-1'>
          <Sidebar login={true} />

          <Image src="/natura.png" width={512} height={512} style={{ width: '100%' }} alt="Natura ahhaahhaha" />
          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
