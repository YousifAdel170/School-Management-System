/**
 * Get the role name corresponding to a given role ID.
 *
 * @param {string} roleID - The ID of the role (e.g., "1", "2", "3").
 * @returns {string} The name of the role corresponding to the given ID. Returns "Unknown" if the ID is not recognized.
 */
export const getRoleNameFromID = (roleID) => {
  switch (roleID) {
    case "1":
      return "Student";
    case "2":
      return "Teaching-staff";
    case "3":
      return "Parent";
    default:
      return "Unknown";
  }
};
