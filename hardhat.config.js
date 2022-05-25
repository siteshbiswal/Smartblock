require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/r-ffVgoCExMJX1loN2nZMVFMSvtBmcQp',
      accounts: ['5637c1821b272047170701cad6ee7844f7788f05a5b41ad71c02b7c6f244ca27'],
    },
  },
};