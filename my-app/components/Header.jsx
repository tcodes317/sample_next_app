// import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";

const Header = () => {
    return(
        <>
            <header className="py-8 xl:py-12 text-white bg-pink-50/20">
                <div className="container mx-auto">

                    {/** logo */}
                    <Link href="">
                        <h1 className="text-4xl font-semibold">Luke <span className="text-accent">.</span></h1>
                    </Link>

                    {/** desktop nav */}
                    <Nav />
                </div>
            </header>
        </>
    )
}
export default Header;