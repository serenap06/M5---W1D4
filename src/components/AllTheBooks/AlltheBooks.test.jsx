import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "../../App";


test('Books Cards Render', async () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
    const response = await fetch('https://epibooks.onrender.com')
    const data = await response.json()
    const bookCard = screen.queryAllByTestId('BookCard')
    
    expect(bookCard).toHaveLength(12)

})