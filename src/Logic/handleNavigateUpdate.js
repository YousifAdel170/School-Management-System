/**
 * Handle navigation to an update page for a specific item.
 *
 * @param {Object} e - The event object triggered by the navigation action.
 * @param {Function} navigate - The navigation function provided by the React Router to change the route.
 * @param {string} type - The type of item to be updated.
 * @param {string} ID - The ID of the item to be updated.
 */
export const handleNavigateUpdate = (e, navigate, type, ID) => {
  // Prevent the default behavior of the event.
  e.preventDefault();

  // Navigate to the update page for the specified item type and ID
  navigate(`/supervisor/${type}/${ID}`);
};
