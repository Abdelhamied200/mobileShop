import React, { useEffect } from "react";
import * as d3 from "d3";

import "./chart.scss";

const BarChart = (props) => {
  useEffect(() => {
    let json = JSON.parse(localStorage.getItem("data"));
    json = data2CountVSYear(json);
    barSetup(json, "#bar-chart");
  }, []);
  return (
    <div className="chart">
      <svg id="bar-chart"></svg>
    </div>
  );
};

const data2CountVSYear = (data) => {
  let res = {};
  let years = [];
  if (data) {
    data.forEach((phone) => {
      let year = phone.year.value;
      if (!years.includes(year)) {
        years.push(year);
        res[year] = 1;
      } else {
        res[year] += 1;
      }
    });
  }
  res = Object.entries(res).map((d) => {
    return {
      year: d[0],
      count: d[1],
    };
  });
  return res;
};

const barSetup = (data, svg) => {
  // dimensions
  let dim = {
    bars: {
      w: 250,
      h: 250,
      p: 0.1,
      id: "bars",
    },
    axis: {
      margins: 50,
    },
    chart: {
      w: 400,
      h: 300,
      p: 0.3,
    },
  };

  // select svg element
  let chart = d3
    .select(svg)
    .attr("width", dim.chart.w)
    .attr("height", dim.chart.h);

  // setup YAxis
  // 0.3 for some padding
  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count) + dim.chart.p])
    .rangeRound([dim.bars.h, 0]);

  // setup XAxis
  let xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.year))
    .rangeRound([0, dim.bars.w])
    .padding(dim.bars.p);

  // append bars container to chart
  let bars = chart.append("g").attr("id", dim.bars.id);

  // append a rect element and bind width, height, x and y
  bars
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return xScale(d.year);
    })
    .attr("y", function (d) {
      return yScale(d.count);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
      return dim.bars.h - yScale(d.count);
    });

  // give axis some margins
  bars.attr("transform", "translate(" + dim.axis.margins + ",0)");

  // generate y-axis
  chart
    .append("g")
    .attr("id", "y-axis")
    .call(d3.axisLeft(yScale).ticks(10))
    .attr("transform", "translate(" + dim.axis.margins + ",0)");

  // generate x-axis
  chart
    .append("g")
    .attr("id", "x-axis")
    .call(d3.axisBottom(xScale))
    .attr("transform", "translate(" + dim.axis.margins + "," + dim.bars.h + ")")
    .selectAll("text")
    .style("text-anchor", "start")
    .attr("transform", "rotate(45)");
};

export default BarChart;
