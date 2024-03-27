import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  let [data, newData] = useState({
    initial: 10000,
    annual: 1200,
    expected: 6,
    years: 10,
  });

  data = structuredClone(data);

  const results = calculateInvestmentResults({
    initialInvestment: data.initial,
    annualInvestment: data.annual,
    expectedReturn: data.expected,
    duration: data.years,
  });

  function recalculateTable(changedData) {
    newData(changedData);
  }

  return (
    <>
      <Header />

      <Form data={data} changedEvent={recalculateTable} />

      <Result results={results} />
    </>
  )
}

export default App
