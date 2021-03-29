// SPDX-License-Identifier: MIT
pragma solidity >=0.6.6 <=0.8.3;

contract Game {
    uint256 internal bet;
    address internal gameOwner;
    address internal gameOpponent;

    constructor() {}

    function createGame(address _owner, uint256 _bet) public {
        gameOwner = _owner;
        bet = _bet;
    }

    function joinGame(address _opponent) public {
        gameOpponent = _opponent;
    }

    function chooseFirstPlayer() public {}

    function incrementRound() internal {}

    function rollDice() public {}

    function gameOptions(address _player, bytes32 _option) public {
        // set the options [raise, call, fold] for the given player
    }

    function raiseBet() public {}

    function callGame() public {}

    function foldGame() public {}
}
