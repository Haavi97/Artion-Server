const mongoose = require("mongoose");
const router = require("express").Router();
const auth = require("./middleware/auth");

const TradeHistory = mongoose.model("TradeHistory");

router.post("/getTradeHistory", async (req, res) => {
  let erc721address = req.body.contractAddress;
  let tokenID = req.body.tokenID;

  let history = await TradeHistory.find({
    erc721address: erc721address,
    tokenID: tokenID,
  });
  return res.send({
    status: "success",
    data: history,
  });
});

module.exports = router;
