FRANK_ADDRESS="drt1kdl46yctawygtwg2k462307dmz2v55c605737dp3zkxh04sct7asacg58j"
GRACE_ADDRESS="drt1r69gk66fmedhhcg24g2c5kn2f2a5k4kvpr6jfw67dn2lyydd8cfsncd6w8"
WALLET_FRANK="~/dharitri-sdk/testwallets/latest/users/frank.json"
WALLET_GRACE="~/dharitri-sdk/testwallets/latest/users/grace.json"

ADDER_ADDRESS="drt1qqqqqqqqqqqqqpgq5h3h37kzmg3rk2gzw52f5vtl66kmu80zt7asrgh0nz"
LOTTERY_ADDRESS="drt1qqqqqqqqqqqqqpgqrv2uxy85tluushhdk335hmv0w44d6ksat7as88h4lf"
LOTTERY_NAME="test"

TOKEN_CHOCOLATE="CHOCOLATE-daf625"
TOKEN_BEER="BEER-b16c6d"

transferREWA() {
    ./src/transfers.js transfer-rewa --receiver ${GRACE_ADDRESS} --wallet ${WALLET_FRANK} --amount 100000000000000000
}

transferDCDT() {
    ./src/transfers.js transfer-dcdt --receiver ${GRACE_ADDRESS} --wallet ${WALLET_FRANK} --token ${TOKEN_CHOCOLATE} --amount 100
}

getBalances() {
    ./src/transfers.js get-balances --address ${GRACE_ADDRESS}
}

adderDeploy() {
    ./src/adder.js deploy --initial-value 0 --wallet ${WALLET_FRANK}
}

adderAddValue() {
    ./src/adder.js add --contract ${ADDER_ADDRESS} --value 7 --wallet ${WALLET_FRANK}
}

adderGetSum() {
    ./src/adder.js get-sum --contract ${ADDER_ADDRESS}
}

lotteryDeploy() {
    ./src/lottery.js deploy --wallet ${WALLET_FRANK}
}

lotteryStart() {
    ./src/lottery.js start --contract ${LOTTERY_ADDRESS} --name ${LOTTERY_NAME} --token ${TOKEN_BEER} --price 1 --duration 80 --wallet ${WALLET_FRANK}
}

lotteryGetInfo() {
    ./src/lottery.js get-info --contract ${LOTTERY_ADDRESS} --name ${LOTTERY_NAME}
}

lotteryBuyTicketFrank() {
    ./src/lottery.js buy-ticket --contract ${LOTTERY_ADDRESS} --name ${LOTTERY_NAME} --token ${TOKEN_BEER} --amount 1 --wallet ${WALLET_FRANK}
}

lotteryBuyTicketGrace() {
    ./src/lottery.js buy-ticket --contract ${LOTTERY_ADDRESS} --name ${LOTTERY_NAME} --token ${TOKEN_BEER} --amount 1 --wallet ${WALLET_GRACE}
}

lotteryDetermineWinner() {
    ./src/lottery.js determine-winner --contract ${LOTTERY_ADDRESS} --name ${LOTTERY_NAME} --wallet ${WALLET_FRANK}
}
