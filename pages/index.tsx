import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Feaching } from "./Feaching";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>
        <Feaching />
      </div>
    </Layout>
  );
};

export default Home;
