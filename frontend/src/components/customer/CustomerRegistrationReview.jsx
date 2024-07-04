import React from "react";
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
  console.log("form values");
  console.log(formData);
  console.log(Object.keys(formData));
  const mapdata = Object.entries(formData.personalDetails).map(
    ([name, value]) => value
  );
  console.log(mapdata);

  return (
    <Box>
      <Accordion>
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
          <Button variant="contained" color="error" size="small">
            Edit
          </Button>
        </AccordionActions>
      </Accordion>
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

export default CustomerRegistrationReview;
