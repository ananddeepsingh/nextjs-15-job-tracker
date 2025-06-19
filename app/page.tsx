import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Job Tracker</h1>
        <Link href="/add-job">Get Started</Link>
      </header>
    </main>
  );
}
