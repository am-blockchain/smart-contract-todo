const RandomNumberConsumer = artifacts.require("RandomNumberConsumer");
// const WitcherPoker = artifacts.require("WitcherPoker");
// const GameToken = artifacts.require("GameToken")

module.exports = function(deployer) {
  deployer.deploy(RandomNumberConsumer);
  // deployer.deploy(GameToken)
  // deployer.link(GameToken, WitcherPoker);
  // deployer.deploy(WitcherPoker)
};