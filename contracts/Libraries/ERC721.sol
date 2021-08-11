pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract LibERC721 {
    function ownerOf(IERC721 token, uint256 id) external view returns (address) {
        return token.ownerOf(id);
    }

    function approveForOne(IERC721 token,address operator, uint256 id) external returns (bool) {
        token.approve(approved, id);
    }

    function approveForAll(IERC721 token, address operator, bool isApprove) {
        token.approveForAll(operator, isApprove);
    }

    function safeTransferFrom(IERC721 token, address from, address to, uint256 id) {
        token.safeTransferFrom(from, to, id);
    }

    function transferFrom(IERC721 token, address from, address to, uint256 id) {
        token.transferFrom(from, to, id);
    }

}

