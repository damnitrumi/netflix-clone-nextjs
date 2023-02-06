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
