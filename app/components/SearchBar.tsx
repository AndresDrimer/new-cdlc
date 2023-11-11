"use client"

import { useEffect, useState } from "react"

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = async (event: React.FormEvent) => {
        event.preventDefault();
  
        console.log("current query", searchQuery)
    }


    useEffect(()=>{
        console.log(searchQuery)
    }, [searchQuery]);



  return (
    <div className="w-full">

    <form action="" className="flex items-center gap-2" onSubmit={onSearch}><input type="text" className="inputField" value={searchQuery} onChange={event=>setSearchQuery(event.target.value)}/><button className="button">buscar</button></form></div>
  )
}

export default SearchBar