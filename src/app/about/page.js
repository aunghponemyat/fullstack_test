import styles from './page.module.css'


export default async function AboutPage() {
  const data = await fetchData();

  return (
    <main className={styles.about}>
      <h1>About Us</h1>
      <p>{data.description}</p>
    </main>
  );
}

async function fetchData() {
  return {
    description: "Build lasting customer relationships, one conversation at a time",
  };
}
