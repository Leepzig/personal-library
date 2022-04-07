import React, {useState} from "react";

const server = "http://localhost:3000"

export const useFetch = async (url, method="GET", body=null, headers=null) => {
    const defaultOptions = {
        method:method,
        headers:{
            "Content-Type":"applcation/json",
            "Accept":"application/json",
            ...headers
        },
        body:body
    }
    const response = await fetch(`${server}${url}`, defaultOptions)
    const data = await response.json()
    return data
}

export const useForm = (initialState, fetchFunction) => {
    const [form, setForm] = useState(initialState)

    const handleChange = e => {
        setForm({
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        fetchFunction()
    }

    return 
}
