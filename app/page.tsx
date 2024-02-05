import Categories from "./components/categories";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='w-full'>
        <Categories />
      </div>
    </main>
  );
}
