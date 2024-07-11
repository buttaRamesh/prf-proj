import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  PersonalDetails,
  ContactDetails,
  IdentificationDetails,
  AddressDetails,
  FinancialDetails,
} from "./components/customer/CustomerFormSteps";
import FormStepper from "./components/stepper/FormStepper";
import { TestStepper } from "./components/stepper/TestSteps";
import CustomerRegistration from "./components/customer/CustomerRegistration";
import CustomComponentsDemo from "./customcomponents/CustomComponentsDemo";

function App() {
  return (
    <>
      {/* <PersonalDetails /> */}
      {/* <ContactDetails /> */}
      {/* <IdentificationDetails /> */}
      {/* <AddressDetails /> */}
      {/* <FinancialDetails /> */}
      {/* <TestStepper /> */}
      <CustomerRegistration />
      {/* <CustomComponentsDemo /> */}
    </>
  );
}

export default App;
