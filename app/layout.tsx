"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Navbar from "@/components/navbar";

import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ToastContainer } from "react-toastify";
import { StateContextProvider } from "@/context/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative bg-[#13131a] min-h-screen text-white px-16">
          <ThirdwebProvider
            clientId={`${process.env.THIRDWEB_CLIENTID}`}
            activeChain={Sepolia}
          >
            <StateContextProvider>
              <ToastContainer />
              <Navbar />
              {children}
            </StateContextProvider>
          </ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}

// <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row text-white">
//   <div>
//     <SideBar />
//   </div>
//   <div className="flex-1 max-lg:px-5 relative max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 pb-10">
//     <Navbar />
//     {children}
//   </div>
// </div>;
