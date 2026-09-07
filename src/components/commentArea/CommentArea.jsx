//importa
import { useContext, useEffect, useState } from "react"
import CommentList from "../commentList/CommentList"
import { Badge } from "react-bootstrap"
import AddComment from "../addComment/AddComment"
import { CommentsContext } from "../../contexts/CommentsContext"
//dichiara
const CommentArea = ({ asinIsSelected }) => {
    //stato
    const {getComments} = useContext(CommentsContext)

    //fetch
    
    //useEffect 
    useEffect(() => {
        if (asinIsSelected) {
            getComments(asinIsSelected)
        }
    }, [asinIsSelected])
    //markup

    console.log('CommentArea', asinIsSelected)

    return (
        <>
            <CommentList
                asin = {asinIsSelected}
            />
            <AddComment
            asin ={asinIsSelected}/>
        </>
    )
}

//esporta
export default CommentArea;