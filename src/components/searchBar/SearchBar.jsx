import { Row, Col,Button } from "react-bootstrap";
import { Search } from 'lucide-react';

const SearchBar =({inputData,onChangeInput,onSearch})=>{
    return( 
            <Row>
                <Col>
                    <form
                        className='my-2 d-flex justify-content-end align-items-center gap-2' onSubmit={onSearch}
                    >
                        <input
                            value={inputData}
                            onChange={onChangeInput}
                            type="text"
                            placeholder='Cerca il tuo libro...'
                        />
                        <Button
                            onClick={onSearch}
                            className='btn btn-info'>
                            <Search />
                        </Button>
                    </form>
                </Col>
            </Row>
     )
}
export default SearchBar;