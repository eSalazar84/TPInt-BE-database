import styles from "./page.module.css";
import { URL_inventory, findAll } from "./lib/inventoryServices";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default async function Home() {
  const list = await findAll(URL_inventory);
  return (
    <main className={styles.main}>
      <h2>Hola!</h2>
      <Header />
      {list.map((list) => (
        <div key={list.id}>
          <h3>
            {list.product} ${list.price}{" "}
          </h3>
        </div>
      ))}
    </main>
  );
}
