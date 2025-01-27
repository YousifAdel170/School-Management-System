// Importing necessary libraries and components
import React, { useState } from "react";

// Importing config values (constants)
import { statisticsHeadings, URL_GET_STATISTICS } from "../../scripts/config";
import View from "../utilities/View";
import { statisticsObject } from "../../scripts/viewData";

/**
 * AdminStatistics component renders a table with various statistics such as the total number of students,
 * total subjects, and average students per subject. It fetches data from the server and displays it accordingly.
 */
const AdminStatistics = () => {
  // State variables to store statistics data and counters
  const [statsData, setStatsData] = useState([]); // State to store the fetched statistics data

  return (
    <View
      data={statsData}
      setData={setStatsData}
      url={URL_GET_STATISTICS}
      object={statisticsObject}
      headings={statisticsHeadings}
    />
  );
};

// Exporting the AdminStatistics component to be used in other parts of the application
export default AdminStatistics;
