const HDWalletProvider = require('@truffle/hdwallet-provider')
const PrivateKeyProvider = require("truffle-privatekey-provider")
const env = require('dotenv')
const fs = require('fs')

env.config()

const dummyMnemonic = 'robot robot robot robot robot robot robot robot robot robot robot robot'
const mnemonic = fs.readFileSync(".secret").toString().trim()
const testnetUrl = 'https://rpc-mumbai.matic.today'
const mainnetUrl = 'https://rpc-mainnet.matic.com/'

function getWalletProvider(mnemonic, url) {
  if (mnemonic) {
    console.info('Using wallet mnemonic provided by .secret file')
  } else if (process.env.MNEMONIC) {
    console.info('Using wallet mnemonic provided by MNEMONIC environment variable')
    mnemonic = process.env.MNEMONIC
  } else {
    console.info('Using dummy wallet mnemonic')
    mnemonic = dummyMnemonic
  }
  return new HDWalletProvider(mnemonic, url)
}

function getPrivateKeyProvider(url) {
  let privateKey = process.env.PRIVATE_KEY

  if (!privateKey || typeof privateKey !== 'string' || !privateKey.trim().length) {
    throw 'Unable to create provider without privateKey'
  }

  if (privateKey.startsWith('0x')) {
    privateKey = privateKey.substring(2)
  }

  return new PrivateKeyProvider(privateKey, url)
}

module.exports = {
  networks: {
    devGanache: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    mumbaiTestnet: {
      provider: () => getPrivateKeyProvider(testnetUrl),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },    
    maticMainnet: {
      provider: () => getWalletProvider(mnemonic, mainnetUrl),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
}
