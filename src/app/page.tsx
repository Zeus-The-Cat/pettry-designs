import Link from "next/link";

export default function LandingPage() {
  const TestPages = () => {
    if (process.env.NODE_ENV !== 'development') {
      return null
    }
    return <Link href="/testing" className="text-blue-600 pl-5">API Test Page</Link>
  }
  return (
    <div className="m-5">
      <h1>Under Construction</h1>
      <Link href="/velocity-votes" className="text-blue-600 pl-5"> Velocity Votes</Link>
      <TestPages />
    </div>
  )
}
