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
import {Link, useNavigate} from "react-router-dom";
import axiosGetAuth from "../../../axiosGetAuth";

/**
 * Your SignUp component definition here
 */

function SignUp() {
  const [agreement, setAgreement] = useState(true);

  const handleSetAgreement = () => setAgreement(!agreement);
  const [formData,setFormData] = useState({
    'email':'',
    'firstname':'',
    'password':'',
  })

  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axiosGetAuth.post('/api/v1/auth/register',formData);
      console.log('Registration successful:', response.data);
      navigate("/profile");
    }
    catch (error){
      console.error('Registration failed:',error.response.data)
    }
  }
  return (
      <BasicLayout>
        <Card>
          <SoftBox p={3} mb={1} textAlign="center">
            <SoftTypography variant="h5" fontWeight="medium">
              Register
            </SoftTypography>
          </SoftBox>
          <SoftBox pt={2} pb={3} px={3}>
            <SoftBox component="form" role="form" onSubmit={handleSubmit}>
              <SoftBox mb={2}>
                <SoftInput name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              </SoftBox>
              <SoftBox mb={2}>
                <SoftInput name="firstname" type="text" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
              </SoftBox>

              <SoftBox mb={2}>
                <SoftInput name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
              </SoftBox>
              <SoftBox mt={4} mb={1}>
                <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
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