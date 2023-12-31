import React, { useState } from "react";
import { CalcCtx } from "../context/CalcValueContext";
import { GraphCtx } from "../context/GraphDataContext";
import { CalcProps, GraphProps } from "../types";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";
import Graph from "../components/Graph";
import Table from "../components/Table";

export default function Home() {
  const initialCalcProps: CalcProps = {
    initial: 50000,
    payment: 1000,
    paymentFrequency: "monthly",
    interest: 7,
    compoundFrequency: "monthly",
    years: 25,
  };

  const initialGraphProps: GraphProps = {
    values: [],
  };

  const [calcCtx, setCalcCtx] = useState(initialCalcProps);
  const [graphCtx, setGraphCtx] = useState(initialGraphProps);

  return (
    <div className="flex flex-col h-screen justify-between text-slate-500">
      <Head>
        <title>
          Compound Interest Calculator |
          react-chartjs-next-compound-interest-calculator.vercel.app
        </title>
        <meta
          name="description"
          content="Easy way to calculate compound interest for retirement savings, loan repayments. Stuff like that."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Compound Interest Calculator | react-chartjs-next-compound-interest-calculator.vercel.app"
        />
        <meta
          property="og:description"
          content="Easy way to calculate compound interest for retirement savings, loan repayments. Stuff like that."
        />
        <meta
          property="og:url"
          content="https://react-chartjs-next-compound-interest-calculator.vercel.app"
        />
        <meta
          property="og:site_name"
          content="react-chartjs-next-compound-interest-calculator.vercel.app"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mb-auto max-w-7xl mx-auto">
        <div className="my-md sm:my-xxl mt-24 mb-12">
          <h1 className="text-5xl font-bold text-center text-slate-800 mb-4">
            Compound Interest Calculator.
          </h1>
          <p className="text-center">
            Get your money in the market and watch it grow over time. We&apos;re
            talking stacks on stacks on stacks.
          </p>
          <CalcCtx.Provider value={[calcCtx, setCalcCtx]}>
            <GraphCtx.Provider value={[graphCtx, setGraphCtx]}>
              <Form />
              <Graph />
              <Table />
            </GraphCtx.Provider>
          </CalcCtx.Provider>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center"></div>
        </div>
        <div></div>
        <Footer />
      </main>
    </div>
  );
}
