import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AuthProvider from "./components/auth/AuthProvider";
import Home from "./components/nav/Home";
import { RouterProvider } from "react-router-dom";
import router from "./components/nav/router";

function App() {
  return (
    <>
      {/* <PersonalDetails /> */}
      {/* <ContactDetails /> */}
      {/* <IdentificationDetails /> */}
      {/* <AddressDetails /> */}
      {/* <FinancialDetails /> */}
      {/* <TestStepper /> */}
      {/* <CustomerRegistration /> */}
      {/* <CustomComponentsDemo /> */}
      {/* <PinCodeDemo /> */}
      {/* <PincodeAutoCompletionDemo /> */}
      {/* <AutoCompleteDemo /> */}
      {/* <CityFieldDemo /> */}
      {/* <BankDetailsDemo /> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
