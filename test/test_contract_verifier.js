const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Smart contract verifier", function () {

    let zkIdentity;

    beforeEach( async () => {
        const artifact = await ethers.getContractFactory("ZKIdentity");
        zkIdentity = await artifact.deploy();
    })

    it("Should be able to verify ZK proof", async () => {

        const a = ["0x144231e6a8654104f5b3f2fd2db8ec669e5f1d072e10c61b95be25957daacdd7", "0x22e08a0842bece4ab2871f38a30232f2816ca5da67e3938b225b3cf5f0227b63"]
        const b = [
            ["0x1c89c25f82c17549e0edf2d9fefdc8f96e308999b8f4944db20cb5b72623be14", "0x1abf8501a26df4e379cbe892b6b918d47969c8c999b202f2988a7725eb132642"],
            ["0x0cd1ede9aecb04a2391023e61c2f593e9282d60519a835149930e65ff86303c5", "0x04d6fd94cf816d0a35fdffcc23057d57b7eb8d29b830b9864353479fcd95de36"]
        ]
        const c = ["0x0640d039b526c6f153ffe0f3111e132f1a3b01035e78befe3fef489c8ea4db0a", "0x109962a16a3d7d381589d697eaa816ea22d86cb7d569d552c328691da6e3d399"]
        const input = [
            "0x042e5b5841c2989943fe925c5776bdd2e977ecdb87cc4d19d59e93f2bb40dc0d",
            "0x20ad8a9be9c56d29b2cc80d0622e1c365217571b0df47e9c2619cfc4c7a6d6d6",
            "0x2cf649c6ab8fa569611c9dedaee3140aa384b0f1c7031066f240ae6ce7b03481",
            "0x1b9272e5d4506a68a88c07f9647255adc1164933ca764fdb32dc7ec457c7a218",
            "0x0061fee9599a78040cc141f7d8d05ae74fc2d2d77f4029247becaad708e43685"
        ]

        const result = await zkIdentity.verifyCreditScore(a, b, c, input);
        expect(result).to.equal(true);
    })

})