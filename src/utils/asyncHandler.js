// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(re, res, next);
//   } catch (error) {
//     res.status(err.code || 500).join({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// export default asyncHandler;

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
