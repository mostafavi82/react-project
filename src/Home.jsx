import Footer from "./Footer.jsx"
import Course from "./Course.jsx"
import { useState, useEffect } from "react"
import Doing from "./Doing.jsx"
import Todos from "./Todos.jsx"
import App from "./App"

export default function Home() {
    const [books, setBooks] = useState([])
    useEffect(()=> {
        fetch('https://api.itbook.store/1.0/search/confidence')
        .then((res)=>{
            return res.json();
        },  )
        .then((data)=>{
            console.log(data);
            setBooks(data.books);
        })
    }, [])


    return (

          <div className="flex flex-wrap">
            {books.map((book)=>(
                <div className="w-[24%] flex flex-col items-center ">
                    <img src={book.image} alt="" />
                    <p className="text-center ">{book.title} </p>
                </div>
            ))}
          </div>
        // <div>
        //     <App/>
        // </div>
    );
}