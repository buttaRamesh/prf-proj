import { Button, Grid, Stack, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField as TextFieldMF } from "formik-mui";
import React from "react";
import { formatFieldName } from "../utils/jsutils";

const IfscField = ({ field, form, formFields, label, ...props }) => {
  const api = "http://localhost:8000/api/ifsc/";
  const { formName, fields } = formFields;

  const { onBlur, ...fieldProps } = field;
  const fetchIFSC = async (code) => {
    const resp = await fetch(api + code);
    const jsonData = await resp.json();
    return jsonData;
  };
  const handleBlur = async (e) => {
    const ifsc = e.target.value;
    if (ifsc.length == 11) {
      const ifscData = await fetchIFSC(ifsc);
      fields.forEach((field) => {
        const fieldName = formatFieldName(formName, field);
        // console.log(`${fieldName} = ${ifscData[field]}`);
        form.setFieldValue(fieldName, ifscData[field]);
      });
    } else {
      console.log("invalid ifsc");
    }
  };
  return (
    <TextField label={label} {...fieldProps} onBlur={handleBlur} {...props} />
  );
};

export default IfscField;

// export const IfscFieldDemo = () => {
//   const handleSubmit = (values, actions) => {
//     console.log("form submition");
//     console.log(values);
//   };
//   return (
//     <Formik
//       initialValues={{
//         ifsc: "",
//         bank: "",
//         micr: "",
//         address: "",
//         branch: "",
//         city: "",
//         district: "",
//         state: "",
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <Stack p={5} gap={2}>
//           <Grid container spacing={2}>
//             <Grid item md={3}>
//               <Field
//                 name="ifsc"
//                 label="IFSC Code"
//                 component={IfscField}
//                 fullWidth
//                 size="small"
//                 fields={["bank", "address"]}
//               />
//             </Grid>
//             <Grid item md={9}>
//               <Field
//                 name="bank"
//                 label="Bank Name"
//                 fullWidth
//                 size="small"
//                 component={TextFieldMF}
//               />
//             </Grid>
//             <Grid item md={3}>
//               <Field
//                 name="micr"
//                 label="Micr code"
//                 fullWidth
//                 size="small"
//                 component={TextFieldMF}
//               />
//             </Grid>
//             <Grid item md={9}>
//               <Field
//                 name="branch"
//                 label="Branch"
//                 component={TextFieldMF}
//                 fullWidth
//                 size="small"
//               />
//             </Grid>
//             <Grid item md={6}>
//               <Field
//                 name="city"
//                 label="City"
//                 component={TextFieldMF}
//                 fullWidth
//                 size="small"
//               />
//             </Grid>
//             <Grid item md={6}>
//               <Field
//                 name="district"
//                 label="District"
//                 component={TextFieldMF}
//                 fullWidth
//                 size="small"
//               />
//             </Grid>
//             <Grid item md={12}>
//               <Field
//                 name="state"
//                 label="State"
//                 component={TextFieldMF}
//                 fullWidth
//                 size="small"
//               />
//             </Grid>
//             <Grid item md={12}>
//               <Field
//                 name="address"
//                 label="Address"
//                 component={TextFieldMF}
//                 fullWidth
//                 size="small"
//               />
//             </Grid>
//             <Grid item md={12}>
//               <Button variant="contained" type="submit" fullWidth>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Stack>
//       </Form>
//     </Formik>
//   );
// };

// APGV0009007
// BDBL0002529
// CIUB0000604
// CNRB0007291
// FDRL0002398
// HDFC0008638
// IDIB000M006
// IDIB000M535
// KKBK0008366
// KVBL0004867
// PUNB0158310
// SBIN0018906
// SBIN0018907
// SBIN0062505
// SBIN0062523
// Andhra Pradesh Grameena Vikas Bank	APGV0009007	MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	METTUGADDA,DR NO-8-3-3/5/F,1ST FLOOR,MAHABUNAGAR-509001	9.19441E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE		FALSE
// Bandhan Bank	BDBL0002529	New Town Branch Mahabubnagar	MAHABUBNAGAR TOWN	MAHABUBNAGAR TOWN	TELANGANA	Ground floor HÂ No. 1-4-64/A, Newtown,Mahabubnagar Town, Dist - Mahabubnagar, Satte - Telangana , Pin - 509001	9.18885E+11	TRUE	TRUE	Mahbubnagar	IN-TG	TRUE	509750002	TRUE
// City Union Bank	CIUB0000604	MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	DOOR NO.8 6 241/D/2,NEAR KRISHNA ARCH,PADMAVATHI COLONY,MAHABUBNAGAR.	9.19385E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE	313054002	TRUE
// Canara Bank	CNRB0007291	NAGARKURNOOL	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	C O JADCHERLA BRANCH 13421 H NO 11 88 TO 92 NETAJI ROAD BADEPALLY JADCHERLA MAHABUBNAGAR 509301		TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE		TRUE
// Federal Bank	FDRL0002398	MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	H NO.10-5-87/2A, PART OF PLOT NO. 4&13, SRINIVAS COLONY, YENUGONDA STREET, MAHABUBNAGAR, TELANGANA - 509001	9.19686E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE		TRUE
// HDFC Bank	HDFC0008638	TELANGANA CHOWRASTHA MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	GROUND FLOOR NO 1 6 71 10 SHUBASH NAGAR STATION ROAD TELANGANA CHOWRASTHA MAHBUBNAGAR MAHABUBNAGAR TELANGANA 509001	9.118E+12	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE	509240683	TRUE	HDFCINBB
// Indian Bank	IDIB000M006	MAHABOOB NAGAR	MAHABOOBNAGAR	MAHABOOBNAGAR	TELANGANA	P B No 2522123/18 OppOld Bus Station Clock Tower Road MAHABOOBNAGAR  PIN 509001	9.18542E+11	TRUE	TRUE	MAHABOOBNAGAR	IN-TG	TRUE	509019096	TRUE
// Indian Bank	IDIB000M535	SRINIVAS COLONY BRANCH MAHABOOBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	PLOT NO 18 SRINIVAS NAGAR COLONY MAHABOOB NAGAR HYDERABAD AP509001 BESIDE YOGI TIFFIN CENTRE MAHABUBNAGAR MAHABUBNAGAR  PIN 509001	9.18542E+11	TRUE	TRUE	MAHBUBNAGAR	IN-TG	TRUE	509019005	TRUE
// Kotak Mahindra Bank	KKBK0008366	MEHABOOBNAGAR	MEHABOOBNAGAR	MEHABOOBNAGAR	TELANGANA	12 1 273 NETAJI CIRCLE NEW TOWN MEHABOOBNAGAR 509001	9.1186E+12	TRUE	TRUE	MAHBUBNAGAR	IN-TG	TRUE	509485002	TRUE
// Karur Vysya Bank	KVBL0004867	JADCHERLA	MAHABOOBNAGAR	MAHABOOBNAGAR	TELANGANA	PLOT NO 3B 4,SY NO 74,BLOCK NO 13 BIJINEPALLY,NEAR SIGNAL GADDA CROSS RD BADEPALLY JADCHERLA MAHABOOBNAGAR TELANGANA 509301	9.12223E+11	TRUE	TRUE	MAHABOOBNAGAR	IN-TG	TRUE	509053682	TRUE
// Punjab National Bank	PUNB0158310	MEHBOOBNAGAR	MEHBOOBNAGAR	MEHBOOBNAGAR	TELANGANA	2-2-2C,C1,C2,C3,NR BUS OPP MODERN SCHOOL 509001	9.18542E+11	TRUE	TRUE	MEHBOOBNAGAR	IN-TG	TRUE		TRUE
// State Bank of India	SBIN0018906	BALANAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	NEAR JADECHERLA BUS STOP, BALANAGAR, DISTT.MAHABUBNAGAR. TELANGANA-509202	9.17032E+11	TRUE	TRUE	BALANAGAR	IN-TG	TRUE	509002203	TRUE
// State Bank of India	SBIN0018907	WANAPARTHY TOWN	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	SRINIVASA PURAM MARRIKUNTA, KURNOOL ROAD, WANAPARTHY, DISTT.MAHABUBNAGAR. TELANGANA-509103	9.18801E+11	TRUE	TRUE	WANAPARTHY	IN-TG	TRUE	509002103	TRUE
// State Bank of India	SBIN0062505	DISTRICT SALES HUB, MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	NEAR CLOCK TOWER, MAHABUBNAGAR	9.19848E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE		TRUE
// State Bank of India	SBIN0062523	FIMM  RACC MAHABUBNAGAR	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	AYYAPPA COMPLEX, OPP POLICE HEAD QUARTERS, MAHABUBNAGAR	9.19848E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE	509002029	TRUE
// State Bank of India	SBIN0063903	RBO JOGULAMBA	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	D.N.6-1-82-4, YELLAREDDY COMPLEX, GANESH NAGAR, RAYCHUR ROAD, MAHABUBNAGAR-509001	9.19493E+11	TRUE	TRUE	MAHABUBNAGAR	IN-TG	TRUE	509002034	TRUE
// Telangana State Co-operative Apex Bank	TSAB0014021	THE DISTRICT COOPERATIVE CENTRAL BANK LTD,MAHABUBNAGAR,MARIKAL	MAHABUBNAGAR	MAHABUBNAGAR	TELANGANA	H.NO - 7-79,NEAR MAIN ROAD CIRCLE,MARIKAL		TRUE	TRUE	MARIKAL	IN-TG	TRUE		TRUE

// const fields = [
//   "bank",
//   "branch",
//   "micr",
//   "city",
//   "district",
//   "state",
//   "address",
// ];
