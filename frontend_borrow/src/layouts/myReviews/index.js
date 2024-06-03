// @mui/material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Zdjęcie kategorii
const reviewImage = "https://via.placeholder.com/150";

function MyReviews() {
    // Przykładowe dane opinii
    const reviews = [
        { id: 1, name: "Review 1", content: "This is review 1." },
        { id: 2, name: "Review 2", content: "This is review 2." },
        { id: 3, name: "Review 3", content: "This is review 3." },
    ];

    // Przykładowa funkcja usuwania opinii
    const deleteReview = (id) => {
        // Tutaj możesz dodać logikę usuwania opinii
        console.log(`Usunięto opinię o identyfikatorze ${id}.`);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">My Reviews</SoftTypography>
                        </SoftBox>
                        <Grid container spacing={3}>
                            {reviews.map((review) => (
                                <Grid item xs={12} key={review.id}>
                                    <Card>
                                        <SoftBox display="flex" alignItems="center" p={3}>
                                            <img src={reviewImage} alt="Review" style={{ width: "100px", height: "auto", marginRight: "20px" }} />
                                            <div>
                                                <SoftTypography variant="subtitle1">{review.name}</SoftTypography>
                                                <SoftTypography variant="body2">{review.content}</SoftTypography>
                                                <Button onClick={() => deleteReview(review.id)} variant="contained" color="error" size="small">
                                                    Delete
                                                </Button>
                                            </div>
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

export default MyReviews;
