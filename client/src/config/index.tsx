export const Url = `${process.env.REACT_APP_PUBLIC_URL_BACKEND}/`;
export const getHeader = function () {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };
  return headers
};

export const getHeaderUpload = function () {
  const headers = {
    'Content-Type': 'multipart/form-data'
  };
  return headers
  // }
};
