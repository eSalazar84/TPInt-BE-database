import Image from "next/image";
import styles from "./page.module.css";
import { URL_inventory, findAll } from "./lib/inventoryServices";

export default async function Home() {

  const list = await findAll(URL_inventory);
  return (
    <main className={styles.main}>
      <h2>Hola!</h2>
      {
        list.map(list => (
          <div key={list.id}>
            <h3>{list.product} ${list.price} </h3>
          </div>
        ))
      }
    </main>
  );
}
