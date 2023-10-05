"use client"

import { signOut } from "next-auth/react"

function Dashboard() {
  return (
    <div><h1>DASHBOARD hola</h1>
    
    <button onClick={()=>signOut()}>Log Out</button>
    </div>
  )
}

export default Dashboard