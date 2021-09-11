import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A baby kitten with big ol' ears like a bat"
        src="../images/E-J9M95VIAAEbjl.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
