import { v4 as uuidv4 } from "uuid";
import { BAD_REQUEST } from "./constants/httpStatus.js";

export default (req, res, next) => {
  let { transactionid } = req.headers;
  if (!transactionid) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: "The transactionid header is required.",
    });
  }
  req.headers.serviceid = uuidv4();
  return next();
};
