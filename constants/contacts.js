require("dotenv").config();
const FantomContacts = {
  discord: "https://discord.gg/5CuBnZB",
  twitter: "https://twitter.com/PolisChain",
  telegram: "https://t.me/PolisPayOfficial",
  medium: "https://polischain.medium.com/",
  artionUnsubscribe: `https://${
    process.env.RUNTIME ? "testnet." : ""
  }artion.io/settings/notification`,
  email: "haavi@tatarikeskus.ee",
};

module.exports = FantomContacts;
