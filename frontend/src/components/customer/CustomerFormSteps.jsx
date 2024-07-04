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
import CustomerRegistrationReview from "./CustomerRegistrationReview";

// export const registrationValidationSchema = {
//   personalDetailsSchema,
//   contactDetailsSchema,
//   addressDetailsSchema,
//   identificationDetailsSchema,
//   financialDetailsSchema,
// };

export const personalDetailsSchema = yup.object({
  personalDetails: yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
});
const contactDetailsSchema = yup.object({
  contactDetails: yup.object({
    phone1: yup.number().required(),
    email: yup.string().email().required(),
  }),
});
const addressDetailsSchema = yup.object({
  addressDetails: yup.object({
    houseNumber: yup.string().required(),
    pinCode: yup.number().required(),
  }),
  // city: yup.string().required(),
  // state: yup.string().required(),
  // country: yup.string().required(),
});
const identificationDetailsSchema = yup.object({
  identificationDetails: yup.object({
    panNumber: yup.number().required(),
    adhaarNumber: yup.string().required(),
  }),
});
const financialDetailsSchema = yup.object({
  financialDetails: yup.object({
    accountNumber: yup.number().required(),
    accountType: yup.string().required(),
    bankName: yup.string().required(),
  }),
});

const FormContainer = styled(Box)({
  marginTop: 10,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 20,
});

export const PersonalDetails = (props) => {
  console.log("props", props);
  return (
    <FormContainer>
      <FormikMuiInput
        label="First Name"
        fullWidth
        name="personalDetails.firstName"
        id="firstName"
      />

      <FormikMuiInput
        variant="standard"
        label="Last Name"
        fullWidth
        name="personalDetails.lastName"
        id="lastName"
      />
      {/* <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker label="Date of Birth" name="dob" id="dob" />
      </LocalizationProvider> */}
      {/* <FormikMuiDateField
        name="personalDetails.dob"
        label="Dateof birth"
        id="dob"
      /> */}
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
            name="contactDetails.phone1"
            id="phone1"
            sx={{ width: "250px" }}
          />
          <FormikMuiInput
            label="Alternate"
            name="contactDetails.phone2"
            id="phone2"
            sx={{ width: "250px" }}
          />
        </Box>
      </Box>
      <FormikMuiInput
        name="contactDetails.email"
        id="email"
        label="Email"
        fullWidth
      />
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
          name="addressDetails.houseNumber"
          id="houseNumber"
        />
        <FormikMuiInput
          label="Flat Number"
          name="addressDetails.flatNumber"
          id="flatNumber"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="Street"
          name="addressDetails.street"
          id="street"
          sx={{ width: "250px" }}
        />
        <FormikMuiInput
          label="Land mark"
          name="addressDetails.landMark"
          id="landMark"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          label="Pin Code"
          name="addressDetails.pinCode"
          id="pinCode"
          sx={{ width: "250px" }}
          size="small"
        />
        <FormikMuiInput
          label="City"
          name="addressDetails.city"
          id="city"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
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
    </FormContainer>
  );
};

export const IdentificationDetails = () => {
  return (
    <FormContainer>
      <FormikMuiInput
        label="Pan Number"
        name="identificationDetails.panNumber"
        id="panNumber"
        sx={{ width: "300px" }}
      />
      <FormikMuiInput
        variant="standard"
        label="Adhaar Number"
        name="identificationDetails.adhaarNumber"
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
        name="financialDetails.accountNumber"
        id="accountNumber"
        // sx={{ width: "300px" }}
        fullWidth
      />
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiInput
          variant="standard"
          label="Account Type "
          name="financialDetails.accountType"
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
          name="financialDetails.ifscCode"
          id="ifscCode"
          sx={{ width: "250px" }}
        />
      </Box>
      <FormikMuiInput
        label="Bank Name"
        name="financialDetails.bankName"
        id="bankName"
        // sx={{ width: "300px" }}
        fullWidth
      />
      <FormikMuiInput
        label="Address"
        name="financialDetails.bankAddress"
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
    getComponent: (props = {}) => <PersonalDetails {...props} />,
  },
  // {
  //   name: "Contact Details",
  //   schema: contactDetailsSchema,
  //   component: <ContactDetails />,
  // },
  // {
  //   name: "Address Details",
  //   schema: addressDetailsSchema,
  //   component: <AddressDetails />,
  // },
  // {
  //   name: "Identification",
  //   schema: identificationDetailsSchema,
  //   component: <IdentificationDetails />,
  // },
  // {
  //   name: "Bank Details",
  //   schema: financialDetailsSchema,
  //   component: <FinancialDetails />,
  // },
  {
    name: "Review Info",
    schema: {},
    component: <CustomerRegistrationReview />,
    getComponent: (props = {}) => <CustomerRegistrationReview {...props} />,
  },
];

export const initialCustomerFormData = {
  personalDetails: {
    firstName: "",
    lastName: "",
    gender: "",
    // dob: new Date(),
  },
  contactDetails: {
    email: "",
    phone1: "",
    phone2: "",
  },
  addressDetails: {
    houseNumber: "",
    flatNumber: "",
    landMark: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  },
  identificationDetails: {
    panNumber: "",
    adhaarNumber: "",
  },
  financialDetails: {
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    bankName: "",
    bankAddress: "",
  },
};

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
