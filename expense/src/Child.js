import React, { useContext, useState } from 'react'
import {TransactionContext} from './transContext';

function Child() {
    let {transactions,addTransaction,deleteTransaction}=useContext(TransactionContext)
    let[newDesc,setDesc]=useState("")
    let[newAmount,setAmount]=useState(0)
    
   // console.log(transactions)
   const handleAddition=(event)=>{
event.preventDefault()
console.log(newDesc,newAmount)
addTransaction({
    amount:newAmount,
    desc:newDesc
}) 


   }


   const handle=(event)=>{
document.getElementById("demo").style.margin = "50px 10px 20px 30px";
   }



   const handleDelete=(event)=>{
       event.preventDefault()
       deleteTransaction({
           amount:"",
           desc:""
       })

   }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br />$260</h3>
            <div className="expense-container">
                <h3>Income <br />$500</h3>
                <h3>Expense <br />$200</h3>
            </div>

            <h3>History</h3>
            <hr />
            <ul className="transaction-list"  id="demo" >
                {transactions.map((transObjs, ind)=>
                {return(<li>
                    <span>{transObjs.desc}</span>
                <span>{transObjs.amount}</span>
                </li>)})}
               < input type="button" value="delete" onClick={handle}/>




            </ul>
            <h3>Add new transaction</h3>
            <hr />
            <h3>Text</h3>
            <form className="transaction-form" onSubmit={handleAddition}  >
                <label>
                    Enter Descript  <br />
                    <input type="text"  onChange={(ev)=>setDesc(ev.target.value)} required/>
                </label>
                <br />

                <label>
                    Enter Amount  <br />
                    <input type="number"  onChange={(ev )=>setAmount(ev.target.value)}required />
                </label>
                <input type="submit" value="Add transaction" />          </form>


        </div>
    );
}

export default Child;
