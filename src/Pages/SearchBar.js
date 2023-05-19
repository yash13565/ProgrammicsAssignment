import React,{useState} from 'react'

function SearchBar() {
    const[text,setText]=useState('')
    console.log(text)
  return (
    <div>
        <input type='search' placeholder='Search here' onChange={(e)=>setText(e.target.value)} style={{width:'10rem',border:'none',borderRadius:'7px',height:'1.8rem',outline:'none'}} />
    </div>
  )
}

export default SearchBar