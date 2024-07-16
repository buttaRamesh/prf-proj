const fs = require("fs");
function convertToJson() {
  const jsonList = [];
  const allFieldsList = [];
  const filteredFieldsList = [];
  const filteredRowsList = [];

  // fs.readFile("test.csv", "utf-8", (err, data) => {
  fs.readFile("./../../../dataarch/pincode.csv", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);

      const lines = data.split("\n");
      console.log(lines.length);

      // const cl = lines[1].trim().split('"').join("");
      // console.log(lines[1]);
      // console.log(cl);
      // return;
      let header = lines[0].trim().split('"').join("");
      const names = header.split(",");

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].trim().split('"').join("");
        const values = row.split(",");
        const allFieldsobj = {};
        const filteredFieldsobj = {};
        const filteredRowsobj = {};
        for (let j = 0; j < names.length; j++) {
          let name = names[j].trim();
          let value = values[j].trim();
          // const stringWithoutQuotes = stringWithQuotes.replace(/"/g, '');

          name = name.split('"').join("");
          value = value.split('"').join("");
          allFieldsobj[name] = value;
        }
        allFieldsList.push(allFieldsobj);
        const city = values[3].split(" ")[0];
        filteredFieldsobj[names[4]] = values[4];
        filteredFieldsobj["City"] = city;
        filteredFieldsobj[names[7]] = values[7];
        filteredFieldsobj[names[8]] = values[8];
        filteredFieldsList.push(filteredFieldsobj);
        if (
          filteredFieldsobj.StateName == "ANDHRA PRADESH" ||
          filteredFieldsobj.StateName == "TELANGANA"
        ) {
          filteredRowsList.push(filteredFieldsobj);
        }
      }
      // console.log("jsonList", jsonList);
      const jsonObj = JSON.stringify(jsonList, null, 2);
      // console.log("jsonObj", jsonObj);
      fs.writeFileSync(
        "allfields.json",
        JSON.stringify(allFieldsList, null, 2)
      );
      fs.writeFileSync(
        "filteredfields.json",
        JSON.stringify(filteredFieldsList, null, 2)
      );
      fs.writeFileSync(
        "pincodes.json",
        JSON.stringify(filteredRowsList, null, 2)
      );
    }
  });
}

convertToJson();

// "CircleName","RegionName","DivisionName",
// "OfficeName","Pincode","OfficeType","Delivery","District","StateName",
// "Latitude","Longitude"
// "Andhra Pradesh Circle","Kurnool Region","Hindupur Division",
// "Peddakotla B.O","515631","BO","Delivery","ANANTAPUR","ANDHRA PRADESH",
// "14.5689","77.85624"
