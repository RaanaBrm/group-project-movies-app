import style from "./home.module.css"
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils";

function Home() {
    return (
        <div className={cn("relative z-20")}>
            <Link className={style.LinkButtom} to="/add" tabIndex="0">Add New Movie</Link>
        </ div>
    );
}
export default Home





