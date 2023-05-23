import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";
import Head from "next/head";

const signin = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>
          Sign In Page
        </title>
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2  -mt-[70px] px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" />
        <p className="font-xs italic">
          {" "}
          This is not a REAL app, it is built for Educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 text-white  rounded-lg"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
