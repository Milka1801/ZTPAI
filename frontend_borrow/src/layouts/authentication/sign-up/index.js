/**
 * Your imports here
 */

import { useState } from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Separator from "layouts/authentication/components/Separator";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";

/**
 * Your SignUp component definition here
 */

function SignUp() {
  const [agreement, setAgreement] = useState(true);

  const handleSetAgreement = () => setAgreement(!agreement);

  return (
    <BasicLayout>
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register
          </SoftTypography>
        </SoftBox>
        {/* <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Name" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Password" />
            </SoftBox>
            {/* <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgreement} /> */}
              {/* <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgreement}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography> */}
              {/* <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography> */}
            {/* </SoftBox> */}
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth>
                Sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
