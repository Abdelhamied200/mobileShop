import React, { useEffect } from "react";
import * as d3 from "d3";

import "./chart.scss";

const DountChart = (props) => {
  useEffect(() => {
    let json = JSON.parse(localStorage.getItem("data"));
    json = data2CountVSBrand(json);
    dountSetup(json, "#dount-chart");
  }, []);
  return (
    <div className="chart dount">
      <svg id="dount-chart"></svg>
    </div>
  );
};

const data2CountVSBrand = (data) => {
  let res = {};
  let brands = [];
  if (data) {
    data.forEach((phone) => {
      let brand = phone.brand.value;
      if (!brands.includes(brand)) {
        brands.push(brand);
        res[brand] = 1;
      } else {
        res[brand] += 1;
      }
    });
  }
  res = Object.entries(res).map((d) => {
    return {
      brand: d[0],
      count: d[1],
    };
  });
  return res;
};

const dountSetup = (data, s2) => {
  let colors = [];
  for (let i = 0; i < data.length; i++) {
    colors.push(randColor());
  }
  const width = 300,
    height = 300,
    thick = 50,
    radius = Math.min(width, height) / 2,
    color = d3.scaleOrdinal().range(colors);

  const svg = d3
    .select("#dount-chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const arc = d3
    .arc()
    .innerRadius(radius - thick)
    .outerRadius(radius);

  const pie = d3
    .pie()
    .value((d) => d.count)
    .sort(null);

  const tooltip = d3
    .select(".dount")
    .append("div")
    .attr("class", "tooltip text-center");

  tooltip.append("div").attr("class", "brand");
  tooltip.append("div").attr("class", "percent");

  const path = svg
    .selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => color(d.data.brand));

  path.on("mouseover", (e, d) => {
    let total = d3.sum(data.map((d) => d.count));
    let percent = Math.round((1000 * d.data.count) / total) / 10;
    tooltip.select(".brand").html(d.data.brand + " ( " + d.data.count + " )");
    tooltip.select(".percent").html(percent + "%");
    tooltip.style("visibility", "visible");
    tooltip.style("opacity", "1");
  });
  path.on("mouseout", () => {
    tooltip.style("visibility", "hidden");
    tooltip.style("opacity", "0");
  });
};

const randColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

export default DountChart;
