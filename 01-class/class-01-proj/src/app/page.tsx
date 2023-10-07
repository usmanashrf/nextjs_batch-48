import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Nextjs
      <br/>
      <Link href={'/about'}>About page</Link>
    </div>
  )
}
