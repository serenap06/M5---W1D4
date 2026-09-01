import { createContext, useEffect, useState } from "react";


export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [booksData, setBooksData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const getBooks=async()=>{
        setIsLoading(true)
        try {
            const response = await fetch('https://epibooks.onrender.com')
            const data = await response.json()
            setBooksData(data)
        } catch (error) {
            console.log(error)
            setError('Errore nel caricamento dei libri')
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getBooks()
    },[])

    return(
        <BooksContext.Provider
        value={{
            booksData,
            setBooksData,
            isLoading,
            setIsLoading,
            error,
            setError,
            getBooks,
        }}>
            {children}
        </BooksContext.Provider>
    )
}