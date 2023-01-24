import { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import ReportChart from "components/Custom/ReportChart";
import reportsData from "./data/reportsData";

function Reports(): JSX.Element {
  const [reports, setReports] = useState(reportsData);

  const charts = (reports || []).map((report, key) => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={4} mb={4} key={`report_${key}`}>
        <ReportChart
          title={report.title}
          description={report.description}
          color={report.color}
          chart={report.chart}
          date={report.date}
        />
      </Grid>
    );
  });
  return (
    <MDBox>
      <Grid container spacing={1}>
        {charts}
      </Grid>
    </MDBox>
  );
}

export default Reports;
