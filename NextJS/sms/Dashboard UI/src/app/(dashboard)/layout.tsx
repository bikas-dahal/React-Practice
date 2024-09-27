import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout ({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="h-screen flex">


            {/* left */}
            <div className="w-[14%] md:[8%] lg:[16%]">

<Link className="flex items-center gap-2 justify-center lg:justify-start" href="/"> 
<Image src="/logo.png" alt="logo" width={32} height={32} />
<span className="hidden md:block">Shree Janakalyan Boarding School</span>
 </Link>
 <Menu />

            </div>

            {/* right */}
            <div className="w-5/6">r</div>


        </div>
    )
}

