import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Container, MenuItem, Typography, styled } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
import FormikMuiInput, { FormikMuiDateField } from "../stepper/FormikMuiInput";
import CustomerRegistrationReview from "./CustomerRegistrationReview";
import CustomerAddress from "./CustomerAddress";
import FormikGenderButton from "../../customFormikFields/FormikGenderButton";
import BankDetails from "./BankDetails";
import { TextField } from "formik-mui";
import { Field } from "formik";
import FormikMuiTextField from "../formik/FormikMuiTextField";
import FormikMuiDatePicker from "../formik/FormikMuiDatePicker";

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

const addressessSchema = yup.object({
  addressess: yup.array(
    yup.object({
      houseNumber: yup.string().required("house number required"),
      pinCode: yup
        .number("must be numeric")
        .required("pin required")
        .typeError("must be numeric"),
      street: yup.string().required("required city"),
      city: yup.string().required("required city"),
      state: yup.string().required("select state"),
      country: yup.string().required("select country"),
    })
  ),
});
const addressDetailsSchema = yup.object({
  addressDetails: yup.object({
    houseNumber: yup.string().required("house number required"),
    pinCode: yup
      .number("must be numeric")
      .required("pin required")
      .typeError("must be numeric"),
    street: yup.string().required("required city"),
    city: yup.string().required("required city"),
    state: yup.string().required("select state"),
    country: yup.string().required("select country"),
  }),
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
  // justifyContent: "space-between",
  gap: 20,

  minHeight: "400px",
});

export const PersonalDetails = (props) => {
  return (
    <FormContainer>
      <FormikMuiTextField
        variant="standard"
        label="First Name"
        name="personalDetails.firstName"
        sx={{ width: "500px" }}
      />
      <FormikMuiTextField
        variant="standard"
        label="Last Name"
        name="personalDetails.lastName"
        sx={{ width: "500px" }}
      />
      <FormikMuiDatePicker label="Date of Birth" name="personalDetails.dob" />
      <FormikGenderButton name="personalDetails.gender" />
    </FormContainer>
  );
};

export const ContactDetails = () => {
  return (
    <FormContainer>
      <FormikMuiTextField
        variant="standard"
        label="Primary Phone"
        name="contactDetails.phone1"
        sx={{ width: "500px" }}
      />
      <FormikMuiTextField
        variant="standard"
        label="Alternate Phone "
        name="contactDetails.phone2"
        sx={{ width: "500px" }}
      />
      <FormikMuiTextField
        variant="standard"
        label="Email"
        name="contactDetails.email"
        sx={{ width: "500px" }}
      />
    </FormContainer>
  );
};

export const AddressDetails = () => {
  return (
    <FormContainer>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiTextField
          label="House Number"
          sx={{ width: "250px" }}
          name="addressDetails.houseNumber"
          id="houseNumber"
        />
        <FormikMuiTextField
          label="Flat Number"
          name="addressDetails.flatNumber"
          id="flatNumber"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiTextField
          label="Street"
          name="addressDetails.street"
          id="street"
          sx={{ width: "250px" }}
        />
        <FormikMuiTextField
          label="Land mark"
          name="addressDetails.landMark"
          id="landMark"
          sx={{ width: "250px" }}
          size="small"
        />
      </Box>
      <Box gap={2} display={"flex"} justifyContent={"space-between"}>
        <FormikMuiTextField
          label="Pin Code"
          name="addressDetails.pinCode"
          id="pinCode"
          sx={{ width: "250px" }}
          size="small"
        />
        <FormikMuiTextField
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
      <FormikMuiTextField
        label="Pan Number"
        name="identificationDetails.panNumber"
        id="panNumber"
        variant="standard"
        sx={{ width: "300px" }}
      />
      <FormikMuiTextField
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
      <FormikMuiTextField
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
        <FormikMuiTextField
          variant="standard"
          label="IFSC Code"
          name="financialDetails.ifscCode"
          id="ifscCode"
          sx={{ width: "250px" }}
        />
      </Box>
      <FormikMuiTextField
        label="Bank Name"
        name="financialDetails.bankName"
        id="bankName"
        // sx={{ width: "300px" }}
        fullWidth
      />
      <FormikMuiTextField
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
  {
    name: "Contact Details",
    schema: contactDetailsSchema,
    getComponent: (props = {}) => <ContactDetails {...props} />,
  },
  {
    name: "Address Details",
    schema: addressessSchema,
    // getComponent: (props = {}) => <AddressDetails {...props} />,
    getComponent: (props = {}) => <CustomerAddress {...props} />,
  },
  {
    name: "Identification Details",
    schema: identificationDetailsSchema,
    getComponent: (props = {}) => <IdentificationDetails {...props} />,
  },

  {
    name: "Bank Details",
    schema: null,
    getComponent: (props = {}) => (
      <BankDetails formName="bankDetails" {...props} />
    ),
  },
  {
    name: "Review Info",
    schema: null,
    component: <CustomerRegistrationReview />,
    getComponent: (props = {}) => <CustomerRegistrationReview {...props} />,
  },
];

const initialAddressData = {
  houseNumber: "",
  flatNumber: "",
  landMark: "",
  street: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  type: 0,
};
export const initialCustomerFormData = {
  personalDetails: {
    firstName: "",
    lastName: "",
    gender: "other",
    dob: null,
  },
  contactDetails: {
    email: "",
    phone1: "",
    phone2: "",
  },
  addressess: [initialAddressData],
  identificationDetails: {
    panNumber: "",
    adhaarNumber: "",
  },
  bankDetails: {
    account: "",
    type: "Saving",
    ifsc: "",
    bank: "",
    branch: "",
    address: "",
    micr: "",
    city: "",
    district: "",
    state: "",
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
