import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p><Link href='/share'>Share</Link></p>
      <p><Link href='/meals/dynamic-route-1'>Dynamic 1</Link></p>
      <p><Link href='/meals/dynamic-route-2'>Dynamic 2</Link></p>
      <p><Link href='/community'>Community</Link></p>
    </main>
  );
}
