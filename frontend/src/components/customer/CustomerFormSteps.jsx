import React, { Component } from "react";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import {
  Container,
  MenuItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
import FormikMuiInput, { FormikMuiDateField } from "../stepper/FormikMuiInput";

const personalDetailsSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});
const contactDetailsSchema = yup.object({
  phone1: yup.number().required(),
  email: yup.string().email().required(),
});
const addressDetailsSchema = yup.object({
  houseNumber: yup.string().required(),
  pinCode: yup.number().required(),
  // city: yup.string().required(),
  // state: yup.string().required(),
  // country: yup.string().required(),
});
const identificationDetailsSchema = yup.object({
  panNumber: yup.number().required(),
  adhaarNumber: yup.string().required(),
});
const financialDetailsSchema = yup.object({
  accountNumber: yup.number().required(),
  accountType: yup.string().required(),
  bankName: yup.string().required(),
});

const FormContainer = styled(Box)({
  marginTop: 10,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 20,
});

export const PersonalDetails = () => {
  return (
    <FormContainer>
      <FormikMuiInput
        label="First Name"
        fullWidth
        name="firstName"
        id="firstName"
      />

      <FormikMuiInput
        variant="standard"
        label="Last Name"
        fullWidth
        name="lastName"
        id="lastName"
      />
      {/* <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker label="Date of Birth" name="dob" id="dob" />
      </LocalizationProvider> */}
      <FormikMuiDateField name="dob" label="Dateof birth" id="dob" />
    </FormContainer>
  );
};

export const ContactDetails = () => {
  return (
    <FormContainer>
      <Box>
        <Typography variant="h6">Phone Numbers</Typography>
        <Box gap={2} display={"flex"} justifyContent={"space-between"}>
          <FormikMuiInput
            label="Primary"
            name="phone1"
            id="phone1"
            sx={{ width: "250px" }}
          />
          <FormikMuiInput
            label="Alternate"
            name="phone2"
            id="phone2"
            sx={{ width: "250px" }}
          />
        </Box>
      </Box>
      <FormikMuiInput name="email" id="email" label="Email" fullWidth />
    </FormContainer>
  );
};

export const AddressDetails = () => {
  return (
    <FormContainer>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="House Number"
          sx={{ width: "250px" }}
          name="houseNumber"
          id="houseNumber"
        />
        <FormikMuiInput
          label="Flat Number"
          name="flatNumber"
          id="flatNumber"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="Street"
          name="street"
          id="street"
          sx={{ width: "250px" }}
        />
        <FormikMuiInput
          label="Land mark"
          name="landMark"
          id="landMark"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="Pin Code"
          name="pinCode"
          id="pinCode"
          sx={{ width: "250px" }}
          size="small"
        />
        <FormikMuiInput
          label="City"
          name="city"
          id="city"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="State"
          name="state"
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
          name="country"
          id="country"
          sx={{ width: "250px" }}
          select
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </FormikMuiInput>
      </Box>
    </FormContainer>
  );
};

export const IdentificationDetails = () => {
  return (
    <FormContainer>
      <FormikMuiInput
        label="Pan Number"
        name="panNumber"
        id="panNumber"
        sx={{ width: "300px" }}
      />
      <FormikMuiInput
        variant="standard"
        label="Adhaar Number"
        name="adhaarNumber"
        id="adhaarNumber"
        sx={{ width: "300px" }}
      />
    </FormContainer>
  );
};
export const FinancialDetails = () => {
  return (
    <FormContainer>
      <FormikMuiInput
        label="Account Number"
        name="accountNumber"
        id="accountNumber"
        // sx={{ width: "300px" }}
        fullWidth
      />
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          variant="standard"
          label="Account Type "
          name="accountType"
          id="accountType"
          sx={{ width: "250px" }}
          select
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </FormikMuiInput>
        <FormikMuiInput
          variant="standard"
          label="IFSC Code"
          name="ifscCode"
          id="ifscCode"
          sx={{ width: "250px" }}
        />
      </Box>
      <FormikMuiInput
        label="Bank Name"
        name="bankName"
        id="bankName"
        // sx={{ width: "300px" }}
        fullWidth
      />
      <FormikMuiInput
        label="Address"
        name="bankAddress"
        id="bankAddress"
        // sx={{ width: "300px" }}
        fullWidth
      />
    </FormContainer>
  );
};

export const formSteps = [
  {
    name: "Personal Info",
    schema: personalDetailsSchema,
    component: <PersonalDetails />,
  },
  {
    name: "Contact Details",
    schema: contactDetailsSchema,
    component: <ContactDetails />,
  },
  {
    name: "Address Details",
    schema: addressDetailsSchema,
    component: <AddressDetails />,
  },
  {
    name: "Identification",
    schema: identificationDetailsSchema,
    component: <IdentificationDetails />,
  },
  {
    name: "Bank Details",
    schema: financialDetailsSchema,
    component: <FinancialDetails />,
  },
];

export const customerFormData = {
  firstName: "",
  lastName: "",
  dob: new Date(),
  email: "",
  phone1: "",
  phone2: "",
  houseNumber: "",
  flatNumber: "",
  landMark: "",
  street: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  panNumber: "",
  adhaarNumber: "",
  accountNumber: "",
  accountType: "",
  ifscCode: "",
  bankName: "",
  bankAddress: "",
};

{
  /* <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          variant="standard"
          label="State"
          name="state"
          id="state"
          sx={{ width: "250px" }}
          size="small"
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </FormikMuiInput>
        <FormikMuiInput
          variant="standard"
          label="Country"
          name="country"
          id="country"
          sx={{ width: "250px" }}
        >
          <MenuItem value="savings">Savings</MenuItem>
          <MenuItem value="current">Current</MenuItem>
        </FormikMuiInput>
      </Box> */
}

// let userSchema = object({
//       name: string().required(),
//       age: number().required().positive().integer(),
//       email: string().email(),
//       website: string().url().nullable(),
//       createdOn: date().default(() => new Date()),
//     });
