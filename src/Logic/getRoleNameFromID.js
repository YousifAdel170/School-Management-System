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
