"use client"
import { useEffect, useState } from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';
import prisma from "@/libs/prismadb"


function UserSettingsPage() {
  const [newName, setNewName] = useState('');
  const { data: session, update } = useSession();
  const userEmail = session?.user?.email ?? "";
 
 
const getUserName = async ()=>{
  const actualUser = await prisma.user.findUnique({where:{email: userEmail}})
  if(actualUser) {
   console.log("actual: ", actualUser.name)
   return actualUser.name;
  }
  return;
}
getUserName();


useEffect(()=>{
 
},[])

/* 
  const handleUpdateName = async () => {
    const res = await changeUsername(userEmail, newName);

    if (res) {
      await update({
        ...session, 
        user: {
            ...session?.user, name: newName }
        })

    } else {
      console.error('Hubo un error al actualizar el nombre de usuario.');
    }
  }; */

  return (
    <div className="flex-1 flex flex-col justify-between">
      <section className="flex flex-col justify-between mx-auto w-3/4 md:w-1/2 items-center mt-4">


       <h2>Modificar Detalles de Usuario</h2> 
<div> Nombre de Usuario:  </div> 
<form className="flex items-center gap-4">
    <input type="text" className="inputField" name="newName" onChange={(e)=>setNewName(e.target.value)}/>
   {/*  <button className="button" onClick={handleUpdateName}>cambiar</button> */}
</form>

<div> El browser detectó que estás dentro/fuera de Argentina - modificar </div>
<div> Cargar/actualizar imagen de usuraio: </div>
<hr />
<div> Mis libros: </div>
<div> listado: </div>
<div> Cargar nuevos libros: </div>
      </section>
    </div>
  );
}

export default UserSettingsPage;
