import { Form, Button } from "react-bootstrap"
import { useState } from "react"

const AddComment = ({ asin, getComments}) => {
    const [inputComment, setInputComment] = useState({
        comment: '',
        rate: '',
        elementId: `${asin}`
    })
    console.log(inputComment.elementId)

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setInputComment({
            ...inputComment,
            [name]: value
        })
    }

    const onSubmitComment = async (e) => {
        e.preventDefault()
        const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODc4NjQ4NzYsImV4cCI6MTc4OTA3NDQ3Nn0.WEUhGu9DJdR0VKRF1JA8tvApR-XiF4ix-aRy_lDuoAc`
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputComment)
            })
            return await response.json()
        } catch (error) {
            console.log(error)
        } finally {
            getComments()
        }
    }

    return (
        <Form
            onSubmit={onSubmitComment}
            className="mt-3 p-2 w-100">
            <Form.Group
                className="d-flex flex-column gap-2 w-100"
            >
                <Form.Control
                    className="w-100"
                    value={inputComment.comment}
                    onChange={onChangeInput}
                    type='text'
                    placeholder='Inserisci il tuo commento...'
                    name='comment'></Form.Control>
                <Form.Control
                    className="w-100"
                    value={inputComment.rate}
                    onChange={onChangeInput}
                    type='number'
                    min='1'
                    max='5'
                    name='rate'></Form.Control>
                    <Button
                type="submit"
                className="mt-2 w-100 text-white fw-bold"
                variant='info'>Invia commento</Button>
            </Form.Group>
            
        </Form>
    )
}

export default AddComment;