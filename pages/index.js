import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Feed from "@/components/Feed";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen scrollbar-hide ">
        <Head>
          <title> Instagram </title>
        </Head>
        <Header />
        <Feed />
        {/* Modal */}
      </div>
    </>
  );
}
