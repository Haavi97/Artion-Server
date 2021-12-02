const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: "0xd9ea8A0E5FeE8ADa1bae763F17D1c70DEAd8aa41", //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: "0x76a26cC838Dae24eb85Ece143EB242f844984123", //FantomNFTFactory
  TESTNET_721_PRIVATE: "0xdb97189CB4be936919594Ba5b6e8DA0c6649313c", //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: "0xc389b01A6b56e9Ba23e8F201a257168a51f14762", //FantomNFTFactory
  MAINNET_1155_PRIVATE: "0x4db29027d3630764d57F47C4e7c0AFDD12f0808A", //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: "0x1b3e603A9Ae5F1C782889eBC498a6D3AcF1BC145", //FantomArtFactory
  TESTNET_1155_PRIVATE: "", //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: "", //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "exists",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ],
};

module.exports = CollectionFactoryContract;
