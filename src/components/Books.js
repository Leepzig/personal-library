import React, { useState, useEffect} from 'react'
import { useFetch } from './hooks'

const Books = () => {
    const server = "http://localhost:3000"
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    },[])

    const getBooks = async () => {
        const response = await fetch(`${server}/books`)
        const data = await response.json()
        setBooks(data)
    }


  return (
      <>
      <h2>My Library</h2>
      <ul>

        {books.map(book => <li>{book.title} : {book.author} : {book.genre}</li> )}
      </ul>
      </>
  )
}

export default Books