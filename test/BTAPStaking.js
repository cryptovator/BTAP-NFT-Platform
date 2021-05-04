const { expect } = require('chai');

describe('Greeter', function () {
  let btapStaking;
  let mockBTAP;
  let mockNFT;

  beforeEach(async () => {
    const MockBTAP = await hre.ethers.getContractFactory('MockBTAP');
    mockBTAP = await MockBTAP.deploy();

    await mockBTAP.deployed();

    console.log('MockBTAP deployed to:', mockBTAP.address);

    const MockNFT = await hre.ethers.getContractFactory('MockNFT');
    mockNFT = await MockNFT.deploy();

    await mockNFT.deployed();

    console.log('MockNFT deployed to:', mockNFT.address);

    const BTAPStaking = await hre.ethers.getContractFactory('BTAPStaking');
    btapStaking = await BTAPStaking.deploy(mockBTAP.address, mockNFT.address);

    await btapStaking.deployed();

    console.log('BTAPStaking deployed to:', btapStaking.address);
  });

  it('Should able to stake', async function () {});
});
