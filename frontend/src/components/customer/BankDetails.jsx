import { Button, Grid, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField as TextFieldMF } from "formik-mui";
import IfscField from "../../customcomponents/IfscField";
import { formatFieldName } from "../../utils/jsutils";
import FormikMuiTextField from "../formik/FormikMuiTextField";

const getFieldName = (formName, fieldName) => `${formName}.${fieldName}`;

const BankDetails = ({ formName }) => {
  return (
    <Stack p={5} gap={2}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <FormikMuiTextField
            label={"Account Number"}
            name={formatFieldName(formName, "account")}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item md={4}>
          <FormikMuiTextField
            label={"Account Type"}
            name={formatFieldName(formName, "type")}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item md={3}>
          <FormikMuiTextField
            name={getFieldName(formName, "ifsc")}
            label="IFSC Code"
            fullWidth
            size="small"
            formFields={{
              formName: formName,
              fields: [
                "bank",
                "branch",
                "micr",
                "city",
                "district",
                "state",
                "address",
              ],
            }}
          />
        </Grid>
        <Grid item md={9}>
          <FormikMuiTextField
            name={formatFieldName(formName, "bank")}
            label="Bank Name"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={3}>
          <FormikMuiTextField
            name={formatFieldName(formName, "micr")}
            label="Micr code"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={9}>
          <FormikMuiTextField
            name={formatFieldName(formName, "branch")}
            label="Branch"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          <FormikMuiTextField
            name={formatFieldName(formName, "city")}
            label="City"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          <FormikMuiTextField
            name={formatFieldName(formName, "district")}
            label="District"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={12}>
          <FormikMuiTextField
            name={formatFieldName(formName, "state")}
            label="State"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={12}>
          <FormikMuiTextField
            name={formatFieldName(formName, "address")}
            label="Address"
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BankDetails;

export const BankDetailsDemo = () => {
  const formName = "bankDetails";
  const handleSubmit = (values, actions) => {
    console.log("form submition");
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        [formName]: {
          ifsc: "IDIB000M535",
          bank: "",
          micr: "",
          address: "",
          branch: "",
          city: "",
          district: "",
          state: "",
        },
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <BankDetails formName={formName} />
        <Grid item md={12}>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
};
