import Link from "next/link";
import logo from "../../public/newwavelogo3.jpg"
import Image from "next/image";


export default function Logo() {
  return (
    <Link href="/" className="shadow-lg">
        <Image src={logo} alt="New Wave Logo" width={70} height={70} className="rounded-xl" />
    </Link>
  )
}
