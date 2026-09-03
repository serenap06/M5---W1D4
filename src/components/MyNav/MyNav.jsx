import { Container, Col, Nav, Navbar } from 'react-bootstrap';
import { Library } from 'lucide-react';
import SearchBar from '../searchBar/SearchBar';
import { useContext } from 'react';
import { SearchBookContext } from '../../contexts/SearchBookContext';
import DarkThemeMode from '../DarkThemeMode/DarkThemeMode';
import { ThemeContext } from '../../contexts/ThemeContext';


const MyNav = () => {
    const { isDark } = useContext(ThemeContext)
    return (
        <Navbar expand="lg"  
        bg={isDark ? 'dark' : 'info'}
        data-bs-theme={isDark ? 'dark':'light'}>
            <Container>
                <Library className='me-2' 
                color={isDark ? '#ffffff' : '#000000'}/>
                <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
                <div className='d-flex align-items-center gap-2 order-lg-last'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <DarkThemeMode />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;