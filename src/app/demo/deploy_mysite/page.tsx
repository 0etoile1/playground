import styles from "@/app/deploy_mysite.module.css";

export default function DeployMysite() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Hello, World!
          </li>
          <li> ＼コンニチワ／</li>
        </ol>
      </main>
      <footer className={styles.footer}>
        フッター
      </footer>
    </div>
  );
}
