const HttpError = (status, message) => {
  const error = new Error(message);
  error.ststus = status;
  return error;
};

module.exports = HttpError;
