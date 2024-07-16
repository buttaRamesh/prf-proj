import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  TextField as TextFieldFM,
  Autocomplete as AutocompleteFM,
} from "formik-mui";
import { Field, Form, Formik } from "formik";

const AutoCompleteDemo = () => {
  //   const [options, setOptions] = useState(["Hyd", "Wgl", "Adb"]);
  const iopt1 = ["ONE-iopt-1", "ONE-iopt-2", "ONE-iopt-3", "ONE-iopt-4"];
  const uopt1 = ["ONE-uopt-1", "ONE-uopt-2", "ONE-uopt-3", "ONE-uopt-4"];
  const iopt2 = ["TWO-iopt-1", "TWO-iopt-2", "TWO-iopt-3", "TWO-iopt-4"];
  const uopt2 = ["TWO-uopt-1", "TWO-uopt-2", "TWO-uopt-3", "TWO-uopt-4"];
  const [optionsOne, setOptionsOne] = useState(iopt1);
  const [optionsTwo, setOptionsTwo] = useState(iopt2);
  const options = [{ label: "ONE" }, { label: "TWO" }, { label: "THREE" }];

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} flexDirection={"column"} gap={3} border={2} p={3}>
        <Autocomplete
          options={iopt1}
          renderInput={(params) => <TextField {...params} label={"City"} />}
        />
        <Button variant="contained" onClick={(e) => setOptionsOne(uopt1)}>
          change options
        </Button>
      </Box>
      <Formik initialValues={{ fcity: "" }}>
        <Form>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            border={2}
            p={3}
          >
            <Formik
              initialValues={{ movie: "" }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              <Form>
                <Field
                  name="movie"
                  component={AutocompleteFM}
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => {
                    console.log(params);
                    return (
                      <TextFieldFM
                        {...params}
                        // We have to manually set the corresponding fields on the input component
                        // name="name"
                        //   error={touched["name"] && !!errors["name"]}
                        //   helperText={errors["name"]}
                        label="Autocomplete"
                        variant="outlined"
                      />
                    );
                  }}
                />

                <Button
                  variant="contained"
                  onClick={(e) => setOptionsTwo(uopt2)}
                >
                  change options
                </Button>
              </Form>
            </Formik>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default AutoCompleteDemo;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
];
