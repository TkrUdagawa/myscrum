import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ResponsiveAppBar from "../src/components/layout/AppBar";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <ResponsiveAppBar />
    </>
  );
};

export default Home;
