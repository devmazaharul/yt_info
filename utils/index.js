export const responceHandle = ({ message = 'Error', status = 400, items }) => {
  return {
    message,
    status,
    items,
  };
};


