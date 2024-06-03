// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import categoriesTableData from "layouts/tables/data/categoriesTableData";

// Zdjęcie kategorii
const categoryImage = "https://cdn.pixabay.com/photo/2024/02/04/10/47/arabiccontest-8551910_1280.jpg";

function Tables() {
    const { columns, rows } = categoriesTableData;

    // Dodaj logowanie, aby sprawdzić dane
    console.log(columns);
    console.log(rows);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Categories</SoftTypography>
                        </SoftBox>
                        <Grid container spacing={3}>
                            {rows.map((row, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Card>
                                        <SoftBox display="flex" flexDirection="column" alignItems="center" p={3}>
                                            <img src={categoryImage} alt={row.name} style={{ width: "100%", height: "auto" }} />
                                            <SoftTypography variant="subtitle1">{row.name}</SoftTypography>

                                        </SoftBox>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
}

export default Tables;
