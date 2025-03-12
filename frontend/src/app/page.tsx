import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import 'dotenv/config';

export default async function Home() {
  const Task = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API);
    const data = res.data.data;
    return(
      <ul>
        {data.map((t: any) => (
          <div className={styles.task}>
            <li>{t.title}</li>
            <li>{t.description}</li>
            <li>{t.status}</li>
            <li>-------------</li>
          </div>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <p className={styles.cent}>Sup Balls</p>
      <button><a href="/task/67d16cd227aa88c269324c17">Go to task?</a></button>

      <Task />
    </div>
  );
}
