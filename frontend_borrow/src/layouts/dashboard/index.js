import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  // const { size } = typography;
  // const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <BuildByDevelopers />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
