import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone"
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal
            actionLabel="Submit"
            title="hello"
            isOpen
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
