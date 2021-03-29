// SPDX-License-Identifier: MIT
pragma solidity >=0.6.6 <=0.8.3;

contract Game {
    // players info
    address public gameOwner;
    address internal gameOpponent;

    struct player {
        uint8 number; // player 1 or 2
        address ethAddress;
    }

    // game info
    struct game {
        uint8 playerCounter;
        uint8 roundCounter;
    }

    bytes1 firstPlayer;
    uint256 bet;

    constructor() public payable {
        require(msg.value > 0.1 ether);
    }

    // events

    // functions
    // pretty basic: https://github.com/buddies2705/dice/tree/master/contracts
    function createGame(uint256 _bet) public {
        gameOwner = msg.sender;
        bet = _bet;
    }

    function joinGame(address _opponent) public returns (bool) {
        if (gameOpponent == address(0)) {
            gameOpponent = _opponent;
        } else {
            return false; // "Game is already full";
        }

        chooseFirstPlayer();
    }

    function chooseFirstPlayer() public {
        // this should call the random number generator to get a 1 or 2
        // uint8 rnd;

        // firstPlayer = gameOwner;

        // if (rnd == 2) {
        //     firstPlayer = gameOpponent;
        // }
    }

    function incrementRound() internal {}

    function rollDice() public view returns (uint256) {
        // this should call the random number generator to get a number from 1 to 6
    }

    function gameOptions(address _player, bytes32 _option) public {
        // set the options [raise, call, fold] for the given player
    }

    function raiseBet() public {}

    function callGame() public {}

    function foldGame() public {}
}