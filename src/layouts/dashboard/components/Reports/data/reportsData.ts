const reportsData = [
  {
    title: "Monthly Sales",
    color: "info" as "info",
    description: "(+15%) increase in this month sales.",
    chart: {
      type: "Line" as "Line",
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: {
        label: "Sales",
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 79, 123, 980],
      },
    },
    percent: 15,
    date: "2022-09-04T08:30:00",
  },
  {
    title: "Weekly Sales",
    color: "primary" as "primary",
    description: "(+15%) increase in todays sales.",
    chart: {
      type: "Bar" as "Bar",
      labels: ["Aug 15 - Aug 21", "Aug 22 - Aug 28", "Aug 29 - Sept 4", "Sept 5 - Sept 12"],
      datasets: {
        label: "Aug 15 - Aug 21",
        data: [42, 100, 76, 58],
      },
    },
    percent: 15,
    date: "2022-09-04T04:30:00",
  },
  {
    title: "Top Products",
    color: "info" as "info",
    chart: {
      type: "Pie" as "Pie",
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: {
        label: "Projects",
        data: [15, 20, 12, 60],
      },
    },
    percent: 15,
    date: "2022-09-04T06:50:00",
  },
];

export default reportsData;
