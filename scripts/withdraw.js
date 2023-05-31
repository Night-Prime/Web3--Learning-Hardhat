const { getNamedAccounts, ethers } = require("hardhat")

main = async () => {
    const { deployer } = getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)

    console.log("Funding Withdrawed!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
