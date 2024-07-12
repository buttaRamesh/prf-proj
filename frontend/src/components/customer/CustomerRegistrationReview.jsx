import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { NavContext } from "../stepper/MultiStepperForm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const formatName = (camel) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
  let flat = "";
  camelCase.forEach((word) => {
    flat = flat + word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });
  return flat;
};

const CustomerRegistrationReview = () => {
  const { values: formData } = useFormikContext();
  const defaultPanel = Object.keys(formData)[0];
  console.log(defaultPanel);
  const [expandedPanel, setExpandedPanel] = useState(defaultPanel);
  const { navigateTo } = useContext(NavContext);
  return (
    <Box padding={2} gap={1}>
      {Object.entries(formData).map(([stepName, stepData], stepNumber) => (
        <Accordion
          expanded={expandedPanel === stepName}
          onChange={() => {
            setExpandedPanel(expandedPanel === stepName ? false : stepName);
          }}
          sx={{ backgroundColor: "lightgray" }}
        >
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Header name={formatName(stepName)} />
          </AccordionSummary>
          <AccordionDetails>
            {stepName == "addressess" ? (
              <AddressDetailView addresses={stepData} />
            ) : (
              <DetailView data={stepData} />
            )}
          </AccordionDetails>
          <AccordionActions>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => {
                navigateTo(stepNumber);
              }}
            >
              Edit
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </Box>
  );
};

const Header = ({ name }) => {
  return (
    <Typography
      variant="span"
      bgcolor={"primary.main"}
      width={"100%"}
      sx={{
        padding: "2px 2px 2px 10px",
        borderRadius: "5px",
      }}
    >
      {name}
    </Typography>
  );
};

const DetailView = ({ data }) => {
  return Object.entries(data).map(([fieldName, fieldValue]) => (
    <div>
      {formatName(fieldName)} : {fieldValue}
    </div>
  ));
};
const AddressDetailView = ({ addresses }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={2}>
      {addresses.map((data) => (
        <Box width={"50%"}>
          {Object.entries(data).map(([fieldName, fieldValue]) => (
            <div>
              {formatName(fieldName)} : {fieldValue}
            </div>
          ))}
        </Box>
      ))}
    </Box>
  );
};
export default CustomerRegistrationReview;

{
  /* <Accordion sx={{ backgroundColor: "lightgray" }}>
<AccordionSummary>
  <Header name="Personal Details" />
</AccordionSummary>
<AccordionDetails>
  {Object.entries(formData.personalDetails).map(([name, value]) => (
    <div>
      {formatName(name)} : {value}
    </div>
  ))}
</AccordionDetails>
<AccordionActions>
  <Button
    variant="contained"
    color="error"
    size="small"
    onClick={() => {
      navigateTo(0);
    }}
  >
    Edit
  </Button>
</AccordionActions>
</Accordion> */
}
