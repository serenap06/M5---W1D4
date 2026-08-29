import { Alert, Row, Col } from "react-bootstrap";

const Welcome = () => {
    return (
        <Row>
            <Col>
                <Alert className="text-center fs-5" variant="light">
                    Benvenuto su EpiBooks, perditi tra le pagine dei nostri libri!
                </Alert>
            </Col>
        </Row>

    )
}
export default Welcome;