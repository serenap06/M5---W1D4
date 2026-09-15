import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-center">
      <Container>
        <h1 className="display-1 fw-bold text-danger">Error 404</h1>
        <h2 className="mb-3">Pagina non trovata</h2>
        <p className="lead mb-4">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link className="btn btn-info" to="/">
          Torna alla Home
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
