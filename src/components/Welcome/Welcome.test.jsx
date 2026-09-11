import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";


test('Welcome render Test', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
    const Welcome = screen.queryByText(/Benvenuto su EpiBooks/)

    expect(Welcome).toBeInTheDocument()
})