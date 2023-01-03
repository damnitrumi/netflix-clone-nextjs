import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return <p>Você não está logado</p>;
  }

  return (
    <>
      <h1>Olá mundo</h1>
      <h2>{session && JSON.stringify(session)}</h2>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
