export const handleNavigateUpdate = (e, navigate, type, ID) => {
  e.preventDefault();
  navigate(`/supervisor/${type}/${ID}`);
};
