const ConvertLib = artifacts.require("ConvertLib");
const WitcherPoker = artifacts.require("WitcherPoker");
const GameToken = artifacts.require("GameToken")

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, WitcherPoker);
  deployer.deploy(GameToken)
  deployer.deploy(WitcherPoker);
};
