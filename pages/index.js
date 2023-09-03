import { ConnectWallet, useTokenSupply,useContract,useAddress } from "@thirdweb-dev/react";
import {useTokenDrop} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const adress =useAddress();
  const tokenDrop =useTokenDrop("0xe952DD7eF958119ac7A0EF9bab26CAa9395bdC18");
  const {data: tokenSupply} = useTokenSupply(tokenDrop);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
                
              }}
              
            />
          </div>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to PepeLePew, your new best investment!
            
          </h1>
          

          <p className={styles.description}>
            Assure your new investment with 50% extra list price!!
          </p>

          <p>Tota token supply:  </p>

          
        </div>

        
      </div>
    </main>
  );
}
