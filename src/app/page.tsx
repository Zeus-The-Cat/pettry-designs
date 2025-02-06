import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="m-5">
      <h1>Pettry Designs!</h1>
      <h2>Projects:</h2>
      <Link href="/velocity-votes" className="text-blue-600 pl-5"> Velocity Votes</Link>
      <Link href="/testing" className="text-blue-600 pl-5">API Test Page</Link>
    </div>
  )
}
