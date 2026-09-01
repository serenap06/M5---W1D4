import { createContext, useState } from "react";

export const CommentsContext = createContext()

export const CommentsProvider = ({children})=>{
const [comments, setComments] = useState([])

const getComments = async (asin) => {
        const apiUrl = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
        const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODc4NjQ4NzYsImV4cCI6MTc4OTA3NDQ3Nn0.WEUhGu9DJdR0VKRF1JA8tvApR-XiF4ix-aRy_lDuoAc`
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiToken}`
                }
            })
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }
return(
    <CommentsContext.Provider
    value={{
        comments, 
        setComments,
        getComments
    }}>
        {children}
    </CommentsContext.Provider>
)
}