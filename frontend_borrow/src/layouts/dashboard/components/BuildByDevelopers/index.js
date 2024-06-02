/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Images
import rocketWhite from "assets/images/illustrations/borrow.jpg";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SoftBox
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="white"
              borderRadius="lg"
              variant="gradient"
              position="relative"
            >
              <SoftBox
                component="img"
                src={rocketWhite}
                alt="rocket"
                display="block"
                width="100%"
                height="100%"
                sx={{ objectFit: "cover", borderRadius: "inherit" }}
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
