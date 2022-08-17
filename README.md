## zk-identity

A zero knowledge identity scheme for DeFi to unlock more use cases such as undercollaterized lending.

#### Getting Started

Prerequisite:
* circom
* snarkjs

Refer to [Circom documentation](https://docs.circom.io/getting-started/installation/) to install prerequisite dependencies. 

The circuit templates are located in the `circuits` directory. To compile a circuit, run `circom <path_to_circom_file> --r1cs --wasm --sym`. This will generate a directory ending with `_js`. In our project, the circom file is named as `circuit.circom`. 

#### Generating a Witness

In the `circuit_js` directory, generate a witness through running the command: 
```node generate_witness.js circuit.wasm input.json witness.wtns```

The `input.json` file should contain the inputs for the circuits. Example scripts that could help generate this file is in the `scripts` directory.

#### Trusted Setup (Powers of Tau)

1. ```snarkjs powersoftau new bn128 14 pot14_0000.ptau -v```
2. ```snarkjs powersoftau contribute pot14_0000.ptau pot14_0001.ptau --name="First contribution" -v```
3. ```snarkjs powersoftau prepare phase2 pot14_0001.ptau pot14_final.ptau -v```
4. ```snarkjs groth16 setup circuit.r1cs pot14_final.ptau circuit_0000.zkey```
5. ```snarkjs zkey contribute circuit_0000.zkey circuit_0001.zkey --name="1st Contributor Name" -v```
6. ```snarkjs zkey export verificationkey circuit_0001.zkey verification_key.json```

#### Generating a Proof

Using snarkjs, generate a proof through running the command: 
```snarkjs groth16 prove circuit_0001.zkey witness.wtns proof.json public.json```

The command generates two files. `Proof.json` contains the proof while `public.json` contains the public inputs and outputs.

#### Verifying a Proof

Using snarkjs, verify a proof through running the command:
```snarkjs groth16 verify verification_key.json public.json proof.json```