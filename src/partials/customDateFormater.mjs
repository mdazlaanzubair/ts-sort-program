export const getCustomDate = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  // Adding 1 to month because getMonth() returns zero-based index
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}:${hours}-${minutes}-${seconds}`;
  return formattedDate;
};
