import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./Components/Home/Navbar";
import { Footer } from "./Components/Home/Footer";
import { UserContextProvider } from "./Context/UserContext";
import { auth } from "./Firebase-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Champlook",
  description: "champlook",
  keywords: ['champlook', 'hackathon', 'Tech events'],
  verification:
     {
      google:"M0INr3afaYqX57R9Jubepc-yPB8e7KAQ59oK2w_EmHA",
        }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
