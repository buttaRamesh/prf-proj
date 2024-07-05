import { Box, MenuItem, Typography, Checkbox } from "@mui/material";
import React from "react";
import FormikMuiInput from "../stepper/FormikMuiInput";
import { useFormikContext } from "formik";

const CustomerAddress = () => {
  const formikContext = useFormikContext();
  const errors = formikContext.errors.addressDetails;
  // const touchedFields = formikContext.touched.addressDetails
  //   ? Object.keys(formikContext.touched.addressDetails).sort()
  //   : [];

  const reqFields = [
    "city",
    "houseNumber",
    "pinCode",
    "state",
    "street",
    "country",
  ];
  const formData = formikContext.values.addressDetails;

  const toRenderView =
    !errors && reqFields.every((elm) => formData[elm]) && true;
  console.log("stat ", toRenderView);

  return (
    <Box
      display={"flex"}
      flexGrow={1}
      sx={{ padding: "10px 5px", minHeight: "100%" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        // justifyContent={"space-between"}
        width={"60%"}
        // border={1}
        // minHeight={"100%"}
      >
        <Typography variant="span">Corrospondence Address</Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          gap={3}
          padding={"5px"}
        >
          <FormikMuiInput
            label="House Number"
            name="addressDetails.houseNumber"
            id="houseNumber"
          />
          <FormikMuiInput
            label="Flat Number"
            name="addressDetails.flatNumber"
            id="flatNumber"
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          gap={3}
          padding={"5px"}
        >
          <FormikMuiInput
            label="Street"
            name="addressDetails.street"
            id="street"
          />
          <FormikMuiInput
            label="Land mark"
            name="addressDetails.landMark"
            id="landMark"
          />
        </Box>
        <Box
          gap={3}
          padding={"5px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <FormikMuiInput
            label="Pin Code"
            name="addressDetails.pinCode"
            id="pinCode"
          />
          <FormikMuiInput label="City" name="addressDetails.city" id="city" />
        </Box>
        <Box
          gap={3}
          padding={"5px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <FormikMuiInput
            label="State"
            name="addressDetails.state"
            id="state"
            sx={{ width: "250px" }}
            size="small"
            select
          >
            <MenuItem value="savings">Savings</MenuItem>
            <MenuItem value="current">Current</MenuItem>
          </FormikMuiInput>
          <FormikMuiInput
            label="Country"
            name="addressDetails.country"
            id="country"
            sx={{ width: "250px" }}
            select
          >
            <MenuItem value="savings">Savings</MenuItem>
            <MenuItem value="current">Current</MenuItem>
          </FormikMuiInput>
        </Box>
        <Box>
          <Checkbox color="secondary" size="small" defaultChecked />
          <span>Same as Permanaet address</span>
        </Box>
      </Box>
      <Box borderLeft={1} width={"40%"} sx={{ padding: "10px 5px" }}>
        {toRenderView && (
          <>
            <Box display={"flex"} flexDirection={"column"} height={"100%"}>
              <Box
                border={1}
                borderColor={"red"}
                height={"50%"}
                padding={"4px"}
              >
                hello
              </Box>
              <Box border={1} borderColor={"blue"} height={"50%"}></Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CustomerAddress;
