# Install global dependencies
- you will need Node, we are using version 14.4
```
npm install -g truffle ganache-cli
```

# Metamask setup

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

# Start Ganache 
- in a separate terminal: `ganache-cli`


# Test on testnet
```
truffle develop
```

# Test on local ganache network
```
truffle migrate --network development
```

# Deploying on Matic Network
Run this command in root of the project directory:
```
$ truffle migrate --network matic
```