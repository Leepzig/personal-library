import React, { useState } from 'react'

const NewBook = () => {
    const [form, setForm] = useState({
        title:"",
        author:"",
        genre:""
    })

    const handleChange = e => {

    }
    
  return (
    <>
    <h2>New Book</h2>
    <form>
        
    </form>

    </>
  )
}

export default NewBook