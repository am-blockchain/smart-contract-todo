# Install global dependencies
- `npm install -g truffle`

# Install package dependencies
- in the root folder
  ```
  nvm use
  yarn install
  ```

# Generate Mnemonic
- create a file in the root folder: `touch .secret`
- Generate a new mnemonic using https://iancoleman.io/bip39/
- paste the mnemonic into the `.secret` file
  
# Compile
`truffle compile`

# Test on testnet
`truffle develop`

# Deploying on Matic Network
Run this command in root of the project directory:
```
$ truffle migrate --network matic
```