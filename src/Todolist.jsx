import { useState } from "react"
import Doing from "./Doing"
export default function Todolist({ todos }) {
  const  [newTodo, setNewTodo] = useState(todos)
    function inputChange(event){
        if(event.key == "Enter"){
            console.log(event.key)
            setNewTodo([
                ...newTodo ,
                {
                    title: event.target.value,
                    status: false
                }
            ])

            event.target.value = '';
        }
        


    }

    function deleteHandler(title){
        console.log(title)
        let newTodos = newTodo.filter((todo)=> {
            return todo.title !== title
        })
        setNewTodo(newTodos)
        console.log(newTodo)
    }

    function check(title){
        console.log(title)
        let theTodo = newTodo.filter((todo)=> {
            return todo.title == title
        })
        theTodo[0].status = !theTodo[0].status
        console.log(theTodo)
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" onKeyDown={inputChange} />
                </div>
                <ul className="list-reset">
                        {newTodo.map((todo, index)=><li className="relative flex items-center justify-between px-2 py-6 border-b"><Doing key={index} title={todo.title} status={todo?.status} deleteBtn={deleteHandler} check={check} /></li>)}
                </ul>
            </div>
        </div>
    )
}