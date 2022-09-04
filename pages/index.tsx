import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App With Prisma</title>
        <meta name="description" content="App for Prisma learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>App for Prisma learning.</p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
