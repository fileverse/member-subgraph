# Member Subgraph
Subgraph code to build an open API to index and query members information on FIleverse Portal

## Setting up the Subgraph
If your smart contract is on the Ethereum Mainnet network then use `Subgraph Studio`, for any other network use `Hosted Service`

## Set-up locally
1. Install graph-cli :  `npm install -g @graphprotocol/graph-cli`  OR  `yarn global add @graphprotocol/graph-cli`
2. Clone the repo and run `npm install` OR `yarn`
3. Copy and paste the Authentication command from your Subgraph page :

For other networks (Goerli in our case) : `graph auth --product hosted-service <deploy key>`

For Mainnet : `graph auth --studio <deploy key>`

4. Copy and paste the Deploy command from your Subgraph page :

For other networks (Goerli in our case) : `graph deploy --product hosted-service <username/subgraphname>`

For Mainnet : `graph deploy --studio <subgraph name>`

And your subgraph is deployed and ready to use !!
