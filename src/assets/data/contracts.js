import { useCallback, useEffect, useState } from "react";
import { hexToCV } from "@stacks/transactions";
import useInterval from "@use-it/interval";
import { CONTRACT_ADDRESS, CONTRACT_NAME } from "./constants";
import { useSmartContractApi, network } from "./smartcontract-linker";
import { stringAsciiCV } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";
export const GetPassword = () => {
  const client = useSmartContractApi();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const run = useCallback(() => {
    const request = {
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: "getPasswords",
      readOnlyFunctionArgs: {
        arguments: [],
        sender: CONTRACT_ADDRESS,
      },
    };

    client
      .callReadOnlyFunction(request)
      .then((response) => {
        setError("");

        if (response.okay && response.result) {
          const data = hexToCV(response.result);
          setMessage(data.value.value.data.passwords.list);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [client, CONTRACT_ADDRESS, CONTRACT_NAME]);

  // Run the getMessage function at load to get the message from the contract
  useEffect(run, []);

  // Poll the Stacks API every 30 seconds looking for changes
  useInterval(run, 30000);

  return [message, loading, error];
};

export const AddPassword = (username, password, website) => {
  const functionArgs = [
    stringAsciiCV(username),
    stringAsciiCV(password),
    stringAsciiCV(website),
  ];

  const options = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "addPassword",
    functionArgs,
    network: network,
    appDetails: {
      name: "Password Manager",
      icon:  window.location.origin + '/logo.svg',
    },
    onFinish: (data) => {
      alert("Password added successfully. It will take a few minutes for it to be added to an anchor block.");
    },
  };

  openContractCall(options);
};
