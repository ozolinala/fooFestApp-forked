// import Anchor from "./Anchor";
import Basket from "@/components/Basket";
export default function Layout({ children })  {
  
    return (
        <>
        <nav>
           <anchor href="#home">Home</anchor>
           <anchor href="#home">Tickets</anchor>
        </nav>
        <main>
        {children}
        </main>
        <Basket/>
        <footer>&copy;footer</footer>
        </>
    );
}