require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.19",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 500,
                    },
                },
            },
        ],
    },
    networks: {
        hardhat: {
            chainId: 31337,
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/RF2vrEEq0BgZ9u8H1gY2nogOTZnEta23",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 11155111,
            gas: "auto",
        },
        vicTest: {
            url: "https://rpc.testnet.tomochain.com",
            accounts: [process.env.PRIVATE_KEY],
            chain: 88,
            gas: "auto",
        },
        vicMain: {
            url: "https://rpc.viction.xyz",
            accounts: [process.env.PRIVATE_KEY],
            chain: 89,
            gas: "auto",
        },
        modeTest: {
            url: "https://sepolia.mode.network",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 919,
            gas: "auto",
        },
        modeMain: {
            url: "https://mainnet.mode.network",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 34443,
            gas: "auto",
        },
    },
};