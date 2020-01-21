import React from "react";
import statisticalData from "../../statistical-data.json.js";
import StatList from "./StatList";

const Statistics = () => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <StatList items={statisticalData} />
  </section>
);

export default Statistics;
