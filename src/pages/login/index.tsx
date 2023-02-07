import { LoginPage } from "templates/Login";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Login() {
  return <LoginPage />;
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
