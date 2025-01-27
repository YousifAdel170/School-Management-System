// Importing necessary libraries and components
import React, { useState } from "react";

import { getRoleNameFromID } from "../../Logic/getRoleNameFromID";

// Importing config values (constants)
import {
  admissionHeadings,
  POST_METHOD,
  URL_GET_ADMISSION,
} from "../../scripts/config";

import { admissionObject } from "../../scripts/viewData";
import View from "../utilities/View";

/**
 * AdminAdmission component renders a table with admission data retrieved from the server.
 * It displays error/success messages and automatically updates based on language selection.
 */
const AdminAdmission = () => {
  // State variables to store error message, success message, and admission data
  const [admissionData, setAdmissionData] = useState([]);

  return (
    <View
      data={admissionData}
      setData={setAdmissionData}
      method={POST_METHOD}
      url={URL_GET_ADMISSION}
      object={admissionObject}
      headings={admissionHeadings}
      getRoleNameFromID={getRoleNameFromID}
    />
  );
};

// Exporting the AdminAdmission component to be used in other parts of the application
export default AdminAdmission;
