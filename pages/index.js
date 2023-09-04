import { ConnectWallet, useTokenSupply,useContract,useAddress, useTokenBalance, useClaimToken } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const address =useAddress();
  const {
    contract
  } = useContract ("0xe952DD7eF958119ac7A0EF9bab26CAa9395bdC18");

  const {
    data: balance
  } =useTokenBalance(contract,address);

  const { data: supply } = useTokenSupply(contract);
  const { mutate: claimTokens, isLoading} = useClaimToken(contract);


  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
                
              }}
              
            /><div>
              PEPES DEL MUNDO: 
              {supply?.displayValue}
              {supply?.symbol}

            </div>
            <div> 
              Tus PEPES: 
              {balance?.displayValue}
            {balance?.symbol}
            </div>
           
          </div>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to PepeLePew, your new best investment!
            
          </h1>
          

          <p className={styles.description}>
            Assure your new investment with 50% extra list price!!
          </p>

          <p>Claim your PEPES:  </p>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
          <Web3Button
      contractAddress="0xe952DD7eF958119ac7A0EF9bab26CAa9395bdC18"
      
      action={(contract) => contract.erc20.claim(amount)}
    >
      Claim {amount} {supply?.symbol}
    </Web3Button>
         

          
        </div>

        
      </div>
    </main>
  );
}
