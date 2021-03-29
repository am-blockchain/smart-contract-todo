// SPDX-License-Identifier: MIT
pragma solidity >=0.6.6 <=0.8.3;

contract Game {
    // players info
    address internal gameOwner;
    address internal gameOpponent;

    // game info
    bytes8 firstPlayer;
    uint256 internal bet;
    uint8 internal roundCounter = 1;

	constructor() {}

	// events
	

	// functions
    function createGame(address _owner, uint256 _bet) public {
        gameOwner = _owner;
        bet = _bet;
    }

    function joinGame(address _opponent) public {
        gameOpponent = _opponent;
		chooseFirstPlayer();
    }

    function chooseFirstPlayer() public {
        // this should call the random number generator to get a 1 or 2
		uint8 rnd;

		firstPlayer = gameOwner;

		if (rnd === 2){
			firstPlayer = gameOpponent;
		}

    }

    function incrementRound() internal {}

    function rollDice() public {}

    function gameOptions(address _player, bytes32 _option) public {
        // set the options [raise, call, fold] for the given player
    }

    function raiseBet() public {}

    function callGame() public {}

    function foldGame() public {}
}
