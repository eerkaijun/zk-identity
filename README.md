## zk-identity

A zero knowledge identity scheme for DeFi to unlock more use cases such as undercollaterized lending.

#### Getting Started

Prerequisite:
* circom
* snarkjs

Refer to [Circom documentation](https://docs.circom.io/getting-started/installation/) to install prerequisite dependencies. 

The circuit templates are located in the `circuits` directory. To compile a circuit, run `circom <path_to_circom_file> --r1cs --wasm --sym`. This will generate a directory ending with `_js`.

#### Generating a Witness

In the `_js` directory, generate a witness through running the command: 
```node generate_witness.js <compile_circom_name>.wasm input.json witness.wtns```

The `input.json` file should contain the inputs for the circuits. Example scripts that could help generate this file is in the `scripts` directory.

#### Generating a Proof

Using snarkjs, generate a proof through running the command: 
```snarkjs groth16 prove circuit_0001.zkey witness.wtns proof.json public.json```

The command generates two files. `Proof.json` contains the proof while `public.json` contains the public inputs and outputs.

#### Verifying a Proof

Using snarkjs, verify a proof through running the command:
```snarkjs groth16 verify verification_key.json public.json proof.json```