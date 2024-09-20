import { useState } from "react";
import Todolist from "./Todolist";

export default function Todos(){
    let todos = [
        {
            title : 'Tailwind CSS To DO App List 1',
            status : false
        },
        {
            title : 'Tailwind CSS To DO App List 2',
            status : true
        }
    ]

    

    

    return(
        <div>
            <Todolist todos={todos} />

        </div>
    )
}