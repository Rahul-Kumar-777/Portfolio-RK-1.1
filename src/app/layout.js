import { Geist, Geist_Mono, Merienda } from "next/font/google";
import "./globals.css";
import MainLayout from "./(components)/layout/mainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getMeri = Merienda({
  variable:'--merienda',
  subsets:['latin'],
  display:'swap',
})
export const metadata = {
  title: "Portfolio Rahul kumar",
  description: "Portfolio Frontend Developer Rahul Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getMeri.variable} antialiased`}
      >
        <MainLayout>
          {children}
          </MainLayout>
      </body>
    </html>
  );
}
