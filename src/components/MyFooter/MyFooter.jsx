import { useContext } from "react";
import { ThemeContext } from '../../contexts/ThemeContext'
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
    const { isDark } = useContext(ThemeContext)
    return (
        <div
            className={isDark ? 'bg-dark text-white' : 'bg-white'}>
            <footer className="p-5"
            >
                <Container
                >
                    <Row>
                        <Col>
                            © 2026 My Website. All rights reserved.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default MyFooter;