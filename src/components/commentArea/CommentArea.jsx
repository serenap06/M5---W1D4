//importa
import { useContext, useEffect, useState } from "react"
import CommentList from "../commentList/CommentList"
import { Badge } from "react-bootstrap"
import AddComment from "../addComment/AddComment"
import { CommentsContext } from "../../contexts/CommentsContext"
//dichiara
const CommentArea = ({ asin, show, onHide }) => {
    //stato
    const {getComments} = useContext(CommentsContext)

    //fetch
    
    //useEffect 
    useEffect(() => {
        if (show && asin) {
            getComments(asin)
        }
    }, [asin, show])
    //markup

    return (
        <>
            <CommentList
                asin = {asin}
                show={show}
                onHide={onHide}
            />

        </>
    )
}

//esporta
export default CommentArea;