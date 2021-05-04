const hre = require('hardhat');

async function main() {
  let btapAddr = '';
  let nftAddr = '';

  const networkName = network.name;

  if (networkName !== 'mainnet') {
    btapAddr = '0x09AEfa5C03e74180d485aAF7b3D13144c0727b2C';
    nftAddr = '0x712086E7D8FB38C09da0Bd86bb993907A50a3d7B';
  } else {
    const MockBTAP = await hre.ethers.getContractFactory('MockBTAP');
    const mockBTAP = await MockBTAP.deploy();

    await mockBTAP.deployed();

    console.log('MockBTAP deployed to:', mockBTAP.address);
    btapAddr = mockBTAP.address;

    const MockNFT = await hre.ethers.getContractFactory('MockNFT');
    const mockNFT = await MockNFT.deploy();

    await mockNFT.deployed();

    console.log('MockNFT deployed to:', mockNFT.address);
    nftAddr = mockNFT.address;
  }

  const BTAPStaking = await hre.ethers.getContractFactory('BTAPStaking');
  const btapStaking = await BTAPStaking.deploy(btapAddr, nftAddr);

  await btapStaking.deployed();

  console.log('BTAPStaking deployed to:', btapStaking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
