pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenAirdrop is Ownable {
    address public tokenAddress;
    uint256 public airdropQuantity;

    event Airdrop(address indexed recipient, uint256 amount);

    constructor(address _tokenAddress, uint256 _airdropQuantity, address _initialOwner)
        Ownable(_initialOwner)
    {
        tokenAddress = _tokenAddress;
        airdropQuantity = _airdropQuantity;
    }


    function setAirdropQuantity(uint256 _newAirdropQuantity) external onlyOwner {
        airdropQuantity = _newAirdropQuantity;
    }

    function executeAirdrop(address[] calldata recipients) external onlyOwner {
        require(recipients.length > 0, "No recipients specified");

        IERC20 token = IERC20(tokenAddress);

        for (uint256 i = 0; i < recipients.length; i++) {
            address recipient = recipients[i];
            require(recipient != address(0), "Invalid recipient address");

            // Perform the token transfer
            require(token.transfer(recipient, airdropQuantity), "Token transfer failed");

            emit Airdrop(recipient, airdropQuantity);
        }
    }
}
