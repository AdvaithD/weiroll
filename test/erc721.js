const { expect } = require("chai")
const { ethers } = require("hardhat")
const weiroll = require("@weiroll/weiroll.js")

const deployLibrary = async (name) => {
    const factory = await ethers.getContractFactory(name)
    const contract = await factory.deploy()
    return weiroll.Contract.createLibrary(contract);
}


describe("ERC721", () => {
    let events, vm, erc721;
    let eventsContract;
    let deployedErc721;

    before(async () => {
        erc721 = await deployLibrary("LibERC721");
        eventsContract = await (await ethers.getContractFactory("Events")).deploy()
        events = weiroll.Contract.createLibrary(eventsContract)

        /* Deploy ERC721 contract */
        deployedErc721 = await (await ethers.getContractFactory("ExecutorNFT")).deploy();

        const VMLibary = await ethers.getContractFactory("VM");
        const vmLibrary = VMLibrary.deploy();

        const VM = await ethers.getContractFactory("TestableVM");
        vm = await VM.deploy(vmLibrary.address);

        /* mint nfts */
        // TODO: create tx to mint nft, assert with events emitted

    })

    const execute = (commands, state) => {
        let encodedCommands = commands.map(([target, func, inargs, outargs]) => {
            ethers.utils.concat([
                target.interface.getSighash(func),
                inargs,
                outargs,
                target.address,
            ]));
        }
        return vm.execute(encodedCommands, state);
    }

    it("should mint an NFT", async () => {
        let token = deployedErc721.address
    })
})
