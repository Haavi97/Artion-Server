require("dotenv").config();
const requestIP = require("request-ip");
const Logger = require("../../services/logger");

const tracker_ip1 = process.env.TRACKER_IP1;
const tracker_ip2 = process.env.TRACKER_IP2;
const tracker_ip3 = process.env.TRACKER_IP3;
const tracker_ip4 = process.env.TRACKER_IP4;
const tracker_ip5 = process.env.TRACKER_IP5;

const service_auth = (req, res, next) => {
  let request_ip = requestIP.getClientIp(req);
  Logger.debug("RequestedIP: " + request_ip);

  if (
    request_ip == tracker_ip1 ||
    request_ip == tracker_ip2 ||
    request_ip == tracker_ip3 ||
    request_ip == tracker_ip4 ||
    request_ip == tracker_ip5
  ) {
    next();
  } else
    return res.status(400).json({
      status: "failed",
      data: "you are not supposed to call this api endpoint",
    });
};

module.exports = service_auth;
