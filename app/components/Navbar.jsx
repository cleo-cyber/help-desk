import Link from 'next/link'
import Image from 'next/image'
import logo from './dojo-logo.png'
function Navbar() {
  return (
    <nav>
        <Image
        src={logo}
        alt="Dojo Helpdesk Logo"
        width={70}
        quality={100}
         placeholder='blur'
        />
    <h1>Dojo Helpdesk</h1>
    <Link href="/">Dashbord</Link>
    <Link href="/tickets">Ticket</Link>
  </nav>
  )
}

export default Navbar