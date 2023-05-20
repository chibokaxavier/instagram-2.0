import React from "react";
import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
