import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

import { SubscribeIntro } from "templates/SubscribeIntro";

export default function Index() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <SubscribeIntro />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/browse",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
