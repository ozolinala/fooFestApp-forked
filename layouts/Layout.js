// import Anchor from "./Anchor";
import Link from 'next/link';
import Basket from "@/components/Basket";
export default function Layout({ children })  {
  
    return (
        <>
        <nav>
           <Link href="./">Home</Link>
           <Link href="./about">About</Link>
           <Link href="./tickets">Tickets</Link>
        </nav>
        <main>
        {children}
        </main>
        <Basket/>
        <footer>&copy;footer</footer>
        </>
    );
}