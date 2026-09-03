import { createContext, useContext, useState } from "react";
import { BooksContext } from "./BooksContext";

export const SearchBookContext = createContext()

export const SearchBookProvider = ({ children }) => {
    const {booksData, setBooksData, getBooks} = useContext(BooksContext)
    const [inputData, setInputData] = useState('')
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)

    const onChangeInput = (e) => {
        const value = e.target.value
        setInputData(value)
        if (value === '') {
            getBooks()
            setIsSearchEmpty(false)
        }
    }
    const onSearch = (e) => {
        e.preventDefault()
        setIsSearchEmpty(false)
        const filtered = booksData.filter(singleBook =>
            singleBook.title.toLowerCase().includes(inputData.toLowerCase())
        )
        if (filtered.length === 0) {
            setIsSearchEmpty(true)
        }
        setBooksData(filtered)
    }

    return (
        <SearchBookContext.Provider
            value={{
                inputData,
                setInputData,
                isSearchEmpty,
                setIsSearchEmpty,
                onChangeInput,
                onSearch,
            }}>
            {children}
        </SearchBookContext.Provider>
    )

}