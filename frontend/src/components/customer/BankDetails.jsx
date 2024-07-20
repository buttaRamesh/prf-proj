import { Button, Grid, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField as TextFieldMF } from "formik-mui";
import IfscField from "../../customcomponents/IfscField";
import { formatFieldName } from "../../utils/jsutils";

const getFieldName = (formName, fieldName) => `${formName}.${fieldName}`;

const BankDetails = ({ formName }) => {
  return (
    <Stack p={5} gap={2}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Field
            label={"Account Number"}
            name={formatFieldName(formName, "account")}
            size="small"
            fullWidth
            component={TextFieldMF}
          />
        </Grid>
        <Grid item md={4}>
          <Field
            label={"Account Type"}
            name={formatFieldName(formName, "type")}
            size="small"
            fullWidth
            component={TextFieldMF}
          />
        </Grid>
        <Grid item md={3}>
          <Field
            name={getFieldName(formName, "ifsc")}
            label="IFSC Code"
            component={IfscField}
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
          <Field
            name={formatFieldName(formName, "bank")}
            label="Bank Name"
            fullWidth
            size="small"
            component={TextFieldMF}
          />
        </Grid>
        <Grid item md={3}>
          <Field
            name={formatFieldName(formName, "micr")}
            label="Micr code"
            fullWidth
            size="small"
            component={TextFieldMF}
          />
        </Grid>
        <Grid item md={9}>
          <Field
            name={formatFieldName(formName, "branch")}
            label="Branch"
            component={TextFieldMF}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          <Field
            name={formatFieldName(formName, "city")}
            label="City"
            component={TextFieldMF}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={6}>
          <Field
            name={formatFieldName(formName, "district")}
            label="District"
            component={TextFieldMF}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={12}>
          <Field
            name={formatFieldName(formName, "state")}
            label="State"
            component={TextFieldMF}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={12}>
          <Field
            name={formatFieldName(formName, "address")}
            label="Address"
            component={TextFieldMF}
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
