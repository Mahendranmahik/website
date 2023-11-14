import React, { useReducer } from 'react'

const Userform = () => {

    const userstate={
        username:"",
        email:'',
        password:'',
        age:0,
        student:false
    }
    const formreducer=(state,action)=>{
        switch(action.type){
            case "handle_input":
                return{...state,[action.field]:action.payload}
            case "handle_bool":
                return{...state,student:action.payload}
            default:
                return state;
        }

    }

    const [formstate,dispatch]=useReducer(formreducer,userstate)

    const handletextchange=(e)=>{
        dispatch({
            type:'handle_input',
            field:e.target.id,
            payload:e.target.value
        })
    }

    const handlenumberchange=(e)=>{
        dispatch({
            type:'handle_input',
            field:e.target.id,
            payload:Number(e.target.value)
        })
    }

    const handleboolchange=()=>{
        dispatch({
            type:'handle_bool',
            field:'student',
            payload:!formstate.student
        })
    }

    const handleformsubmit=(e)=>{
        e.preventDefault()
        console.log(formstate)
        
    
       
    }

  return (
    <form action="">
        <label htmlFor="username">name: <input id="username" type="text" value={formstate.username} onChange={handletextchange} /></label> <br /><br />
        <label htmlFor="email">email: <input id="email" type="email" value={formstate.email} onChange={handletextchange} /></label> <br /><br />
        <label htmlFor="password">password: <input id="password" type="password" value={formstate.password} onChange={handletextchange} /></label> <br /><br />
        <label htmlFor="age">age: <input id="age" type="number" value={formstate.age} onChange={handlenumberchange}/></label> <br /><br />
        <label htmlFor="student">student: <input id="student" type="checkbox" value={formstate.student} onChange={handleboolchange}/></label> <br /><br />

        <button  onClick={handleformsubmit}>submit</button>
       
    </form>
  )
}

export default Userform