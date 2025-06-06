FROM node:22-bookworm AS sol-compiler
LABEL description="This Docker image compiles the Solidity contracts and prepares the .json and .hex files."

WORKDIR /dharitri
COPY . .

RUN apt update && apt -qy install jq

RUN cp -u .env.example .env

RUN yarn install
RUN yarn compile

RUN jq -r '.abi' artifacts/contracts/Bridge.sol/Bridge.json > artifacts/contracts/Bridge.sol/Bridge.abi.json
RUN jq -r '.abi' artifacts/contracts/Proxy.sol/Proxy.json > artifacts/contracts/Proxy.sol/Proxy.abi.json
RUN jq -r '.abi' artifacts/contracts/ERC20Safe.sol/ERC20Safe.json > artifacts/contracts/ERC20Safe.sol/ERC20Safe.abi.json
RUN jq -r '.abi' artifacts/contracts/GenericERC20.sol/GenericERC20.json > artifacts/contracts/GenericERC20.sol/GenericERC20.abi.json
RUN jq -r '.abi' artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.json > artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.abi.json

RUN jq -r '.bytecode' artifacts/contracts/Bridge.sol/Bridge.json > artifacts/contracts/Bridge.sol/Bridge.hex
RUN jq -r '.bytecode' artifacts/contracts/Proxy.sol/Proxy.json > artifacts/contracts/Proxy.sol/Proxy.hex
RUN jq -r '.bytecode' artifacts/contracts/ERC20Safe.sol/ERC20Safe.json > artifacts/contracts/ERC20Safe.sol/ERC20Safe.hex
RUN jq -r '.bytecode' artifacts/contracts/GenericERC20.sol/GenericERC20.json > artifacts/contracts/GenericERC20.sol/GenericERC20.hex
RUN jq -r '.bytecode' artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.json > artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.hex

FROM golang:1.20.7-bookworm AS go-builder
LABEL description="This Docker image creates the go-wrappers for the Solidity contracts"

RUN apt update && apt install -y zip unzip
RUN go install github.com/ethereum/go-ethereum/cmd/abigen@v1.13.15

COPY --from=sol-compiler /dharitri /dharitri
WORKDIR /dharitri

RUN abigen --abi=artifacts/contracts/Bridge.sol/Bridge.abi.json --pkg=contract --out=artifacts/contracts/Bridge.sol/Bridge.go --type=Bridge
RUN abigen --abi=artifacts/contracts/Proxy.sol/Proxy.abi.json --pkg=contract --out=artifacts/contracts/Proxy.sol/Proxy.go --type=Proxy
RUN abigen --abi=artifacts/contracts/ERC20Safe.sol/ERC20Safe.abi.json --pkg=contract --out=artifacts/contracts/ERC20Safe.sol/ERC20Safe.go --type=ERC20Safe
RUN abigen --abi=artifacts/contracts/GenericERC20.sol/GenericERC20.abi.json --pkg=contract --out=artifacts/contracts/GenericERC20.sol/GenericERC20.go --type=GenericERC20
RUN abigen --abi=artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.abi.json --pkg=contract --out=artifacts/contracts/MintBurnERC20.sol/MintBurnERC20.go --type=MintBurnERC20
