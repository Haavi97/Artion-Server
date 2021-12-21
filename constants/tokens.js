const DISABLED_PAYTOKENS = process.env.NETWORK_CHAINID === "250" ? [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Polis',
      symbol: 'POLIS',
      decimals: 18,
    }
  ] :
  [
    {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Polis',
      symbol: 'POLIS',
      decimals: 18,
    }
  ]


const PAYTOKENS = process.env.NETWORK_CHAINID === "333999" ? [ 
    {
      address: '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
      name: 'Wrapped Polis',
      symbol: 'WPOLIS',
      decimals: 18,
    },
  ] :
  [
    {
      address: '0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978',
      name: 'Wrapped Polis',
      symbol: 'WPOLIS',
      decimals: 18,
    },
  ]

module.exports = { PAYTOKENS, DISABLED_PAYTOKENS };
