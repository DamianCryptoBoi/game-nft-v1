// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IGenePool {
    function addSpeciesToGenePool(uint _id, uint256 _geneNum) external returns (uint256);
    function generateRandomGene(address _account, uint _nftId) external view returns (uint256);
}