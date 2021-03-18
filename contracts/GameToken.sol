// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <=0.8.2;

import "./ERC721.sol";

// this is the code for the NFT
contract GameToken is ERC721 {
    string public name = "Game NFT";

    constructor() {}

    // modifier view vs pure:
    // https://ethereum.stackexchange.com/questions/28504/is-there-any-profit-from-using-pure-and-view-functions-modifiers?rq=1
    function balanceOf(address _owner)
        external
        view
        override
        returns (uint256)
    {
        return 1;
    }

    function ownerOf(uint256 _tokenId)
        external
        view
        override
        returns (address)
    {}

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes memory data
    ) external payable override {}

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) external payable override {}

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) external payable override {}

    function approve(address _approved, uint256 _tokenId)
        external
        payable
        override
    {}

    function setApprovalForAll(address _operator, bool _approved)
        external
        override
    {}

    function getApproved(uint256 _tokenId)
        external
        view
        override
        returns (address)
    {}

    function isApprovedForAll(address _owner, address _operator)
        external
        view
        override
        returns (bool)
    {}
}
