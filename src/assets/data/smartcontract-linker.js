import { Configuration, SmartContractsApi, } from "@stacks/blockchain-api-client";
import { StacksTestnet } from "@stacks/network";

export const network = new StacksTestnet({ url: "https://stacks-node-api.testnet.stacks.co" });  
export const useSmartContractApi = () => { 
    const network = new StacksTestnet({ url: "https://stacks-node-api.testnet.stacks.co" });  
    const config = new Configuration({ basePath: network.coreApiUrl });
    return new SmartContractsApi(config); };