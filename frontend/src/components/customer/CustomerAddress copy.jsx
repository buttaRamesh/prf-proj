import {
  Box,
  MenuItem,
  Typography,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FormikMuiInput from "../stepper/FormikMuiInput";
import { FieldArray, useFormikContext } from "formik";
import { NavContext } from "../stepper/MultiStepperForm";
const formatName = (camel) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
  let flat = "";
  camelCase.forEach((word) => {
    flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });
  return flat;
};

const initialAddressData = {
  houseNumber: "",
  flatNumber: "",
  landMark: "",
  street: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  type: 2,
};

const CustomerAddress = () => {
  const [diableAddBtn, setDisableAddBtn] = useState(true);
  const [add1Saved, setAdd1Saved] = useState(false);
  const [isAddressSaved, setAddressSaved] = useState(false);
  const [addressCount, setAddressCount] = useState(0);
  console.log("addressCount", addressCount);
  const handleSave = () => {
    setAddressSaved(true);
    setAddressCount(addressCount + 1);
  };

  const formikContext = useFormikContext();
  const errors = formikContext.errors;
  const addressEntries = formikContext.values.addressess;
  const { finishedSteps } = useContext(NavContext);

  useEffect(() => {
    console.log("finishedSteps", finishedSteps);
    if (finishedSteps.includes("Address Details")) {
      setAddressCount(addressEntries.length);
      setAddressSaved(true);
    }
  }, []);

  // console.log("fc ....");
  console.log(formikContext);
  const index = addressEntries.length == 0 ? 0 : addressEntries.length - 1;
  const touchedFields =
    formikContext.touched.addressess && formikContext.touched.addressess[index]
      ? Object.keys(formikContext.touched.addressess[index])
      : [];

  const reqFields = [
    "city",
    "houseNumber",
    "pinCode",
    "state",
    "street",
    "country",
  ];
  // console.log("touched fields ", touchedFields);
  const isFormValidated =
    formikContext.isValid &&
    reqFields.every((elm) => touchedFields.includes(elm));
  console.log("isformvalidated", isFormValidated);
  const toRenderView =
    !errors && reqFields.every((elm) => addressEntries[elm]) && true;
  if (toRenderView && !add1Saved) {
    setAdd1Saved(true);
  }

  return (
    <FieldArray name="addressess">
      {({ push, remove }) => (
        <Box
          display={"flex"}
          flexGrow={1}
          sx={{ padding: "10px 5px", minHeight: "100%" }}
        >
          <Box display={"flex"} flexDirection={"column"} width={"60%"}>
            <Typography variant="span">Corrospondence Address</Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              gap={3}
              padding={"5px"}
            >
              <FormikMuiInput
                label="House Number"
                name={`addressess[${index}].houseNumber`}
                id="houseNumber"
                disabled={isAddressSaved}
              />
              <FormikMuiInput
                label="Flat Number"
                name={`addressess[${index}].flatNumber`}
                id="flatNumber"
                disabled={isAddressSaved}
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
                name={`addressess[${index}].street`}
                id="street"
                disabled={isAddressSaved}
              />
              <FormikMuiInput
                label="Land mark"
                name={`addressess[${index}].landMark`}
                id="landMark"
                disabled={isAddressSaved}
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
                name={`addressess[${index}].pinCode`}
                id="pinCode"
                disabled={isAddressSaved}
              />
              <FormikMuiInput
                label="City"
                name={`addressess[${index}].city`}
                id="city"
                disabled={isAddressSaved}
              />
            </Box>
            <Box
              gap={3}
              padding={"5px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <FormikMuiInput
                label="State"
                name={`addressess[${index}].state`}
                id="state"
                sx={{ width: "250px" }}
                size="small"
                select
                disabled={isAddressSaved}
              >
                <MenuItem value="savings">Savings</MenuItem>
                <MenuItem value="current">Current</MenuItem>
              </FormikMuiInput>
              <FormikMuiInput
                label="Country"
                name={`addressess[${index}].country`}
                id="country"
                sx={{ width: "250px" }}
                select
                disabled={isAddressSaved}
              >
                <MenuItem value="savings">Savings</MenuItem>
                <MenuItem value="current">Current</MenuItem>
              </FormikMuiInput>
            </Box>
            <Box>
              {addressCount < 2 && (
                <>
                  {!isAddressSaved ? (
                    <Box padding={"0px 10px 0px 10px"}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSave}
                        disabled={!isFormValidated}
                      >
                        Save Address
                      </Button>
                    </Box>
                  ) : (
                    <>
                      <Box>
                        <Checkbox
                          color="secondary"
                          size="small"
                          checked={diableAddBtn}
                          onChange={(ev, value) => {
                            setDisableAddBtn(value);
                          }}
                        />
                        <span>Same for permanent address</span>
                      </Box>
                      <Box padding={"0px 10px 0px 10px"}>
                        <Button
                          variant="contained"
                          fullWidth
                          disabled={diableAddBtn}
                          onClick={() => {
                            addressEntries[0].type = 1;
                            push(initialAddressData);
                            setAddressSaved(false);
                          }}
                        >
                          Add Correspondence
                        </Button>
                      </Box>
                    </>
                  )}
                </>
              )}
            </Box>
          </Box>
          <Box borderLeft={1} width={"40%"} sx={{ padding: "10px 5px" }}>
            <Box display={"flex"} flexDirection={"column"} height={"100%"}>
              {addressCount > 0 && (
                <>
                  <Box height={"50%"} padding={"4px"}>
                    {Object.entries(addressEntries[0]).map(([name, value]) => (
                      <RenderAddressView name={name} value={value} />
                    ))}
                  </Box>
                  <Divider />
                </>
              )}
              {addressCount > 1 && (
                <>
                  <Box height={"50%"} padding={"4px"}>
                    {Object.entries(addressEntries[1]).map(([name, value]) => (
                      <RenderAddressView name={name} value={value} />
                    ))}
                  </Box>
                  <Divider />
                </>
              )}
            </Box>

            {/* {toRenderView && (
              <>
                <Box display={"flex"} flexDirection={"column"} height={"100%"}>
                  <Box
                    border={1}
                    borderColor={"red"}
                    height={"50%"}
                    padding={"4px"}
                  >
                    {Object.entries(formData).map(([name, value]) => (
                      <RenderAddressView name={name} value={value} />
                    ))}
                  </Box>
                  <Box border={1} borderColor={"blue"} height={"50%"}>
                    Hello
                  </Box>
                </Box>
              </>
            )} */}
          </Box>
        </Box>
      )}
    </FieldArray>
  );
};

export default CustomerAddress;

const RenderAddressView = ({ name, value }) => {
  const formatType = (value) => {
    return ["BOTH", "CORR", "PERM"][value];
  };
  return (
    <Box display={"flex"}>
      <Typography fontSize={"8px"} mr={"5px"} width={"60px"}>
        {formatName(name)}
      </Typography>
      <Typography fontSize={"8px"}>
        {name == "type" ? formatType(value) : value}
      </Typography>
    </Box>
  );
};
