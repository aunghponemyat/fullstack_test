import Navbar from "../Navbar";
import Hero from "../Hero"

export default async function MainPage() {
  // Add any animations or logic here if necessary
  const module = await getModule()
  return (
    <>
      {module}
      <main>
        <Hero />
      </main>
    </>
  );
}

async function getModule() {
  return (
    <Navbar />
  )  
}