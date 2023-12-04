import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Willyam | Batam Software House",
  description:
    "Empowering Success through Innovative Software Solutions at Willyam Software House. Elevate your digital journey with our expert software development services. From custom applications to cutting-edge solutions, we blend creativity and technology for unparalleled results. Partner with us for a seamless integration of innovation and excellence. Unlock the potential of your business with Willyam Software House in Batam, Indonesia.",
  openGraph: {
    title: "Willyam | Batam Software House",
    description:
      "Empowering Success through Innovative Software Solutions at Willyam Software House. Elevate your digital journey with our expert software development services. From custom applications to cutting-edge solutions, we blend creativity and technology for unparalleled results. Partner with us for a seamless integration of innovation and excellence. Unlock the potential of your business with Willyam Software House in Batam, Indonesia.",
    images: [
      {
        url: "https://unsplash.com/photos/people-sitting-at-the-table-zBfBXHCaLmk",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
