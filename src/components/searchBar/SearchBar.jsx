import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { Search } from 'lucide-react';
import { useContext } from "react";
import { SearchBookContext } from "../../contexts/SearchBookContext";
import { ThemeContext } from '../../contexts/ThemeContext';

const SearchBar = () => {
    const { inputData, onChangeInput, onSearch } = useContext(SearchBookContext)
    const { isDark } = useContext(ThemeContext)
    return (

        <Form
            onSubmit={onSearch}
        >
            <Row>
                <Col xs='auto' >
                    <Form.Control
                        value={inputData}
                        onChange={onChangeInput}
                        type="text"
                        placeholder='Cerca il tuo libro...'
                    />
                </Col>
                <Col xs='auto'>
                    <Button
                        variant={isDark ? 'dark' : 'info'}
                        onClick={onSearch}
                        className='btn d-flex px-0'>
                        <Search />
                    </Button>
                </Col>
            </Row>
        </Form>

    )
}
export default SearchBar;