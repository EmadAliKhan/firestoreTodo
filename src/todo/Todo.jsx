import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase'


const Todo = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [refresh,setRefresh] = useState(false)

    const addData = async () => {
        try {
            const userData = {
                todo: input,
            }
            if(input == ""){
              alert("enter todos...");
            }else{
              const docRef = await addDoc(collection(db, "users"), userData)
              console.log(docRef);

            }
            
        } catch (error) {
            console.log(error)
        }
      setInput("")
    }


    const getData = async () => {
        try {
            const arr = []
            const docSnap = await getDocs(collection(db, 'users'))
            docSnap.forEach((doc) => {
                arr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setTodos([...arr])
            setRefresh(!refresh)
        

        } catch (error) {
            console.log(error)
        }
    }


    const editData = async (id) => {
        console.log(id)
        try {
            const editValue = prompt("Enter Value")
            if (editValue === '') {
                alert("Enter Value")
            }
            else {
                const userData = {
                    todo: editValue
                }
                await updateDoc(doc(db, "users", id), userData)
            }
        } catch (error) {
            console.log(error)
        }
        setRefresh(!refresh)
    }


    const deleteData = async (id) => {
        await deleteDoc(doc(db, "users", id))
    }

    useEffect(() => {
        getData()
    }, [refresh])


    return (
        <>
            <div className='container'>
                    <div className='todo-App'>
                        <h1>To-Do List</h1>
                        <div className='row'>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter Todo"
                            />
                            <button className='btnAdd' onClick={addData}>Add</button>
                        </div>
                        <div>

                        
                        <ul>
                            {todos.length
                                ? todos.map((e, i) => (
                                    <li key={i}>
                                        {e.todo}
                                            <button className="btnEdit" onClick={() => editData(e.id)}>Edit</button>
                                            <button className="btnDel" onClick={() => deleteData(e.id)}>Delete</button>
                              
                                    </li>
                                ))
                                : <b className='biller'>Todos</b>}
                        </ul>
                        </div>
                        </div>
                        </div>    
                
            
        </>
    )
}

export default Todo