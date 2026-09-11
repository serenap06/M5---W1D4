import { Container, Nav, Navbar } from 'react-bootstrap';
import { Library } from 'lucide-react';
import SearchBar from '../searchBar/SearchBar';
import { useContext } from 'react';
import DarkThemeMode from '../DarkThemeMode/DarkThemeMode';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';


const MyNav = () => {
    const { isDark } = useContext(ThemeContext)
    return (
        <Navbar expand="lg"
            bg={isDark ? 'dark' : 'info'}
            data-bs-theme={isDark ? 'dark' : 'light'}>
            <Container>
                <Library className='me-2'
                    color={isDark ? '#ffffff' : '#000000'} />
                
                    <Link to='/'>EpiBooks</Link>
               
                <div className='d-flex align-items-center gap-2 order-lg-last'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <DarkThemeMode />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="me-auto">
                        <Link to='/'>Home</Link>
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;