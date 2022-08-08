## zk-identity

A zero knowledge identity scheme for DeFi to unlock more use cases such as undercollaterized lending.

#### Getting Started

Prerequisite:
* circom
* snarkjs

Refer to [Circom documentation](https://docs.circom.io/getting-started/installation/) to install prerequisite dependencies. 

The circuit templates are located in the `circuits` directory. To compile a circuit, run `circom <path_to_circom_file> --r1cs --wasm --sym`.