//importa
import { useContext, useEffect } from "react"
import CommentList from "../commentList/CommentList"
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

    return (
        <>
            <CommentList
                data-testid="CommentTest"
                asin = {asinIsSelected}
            />
            <AddComment
            asin ={asinIsSelected}/>
        </>
    )
}

//esporta
export default CommentArea;