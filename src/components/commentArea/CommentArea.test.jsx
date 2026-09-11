import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";

test('Render Comment Area',()=>{

    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
    const detailButton = screen.findAllByTestId("BookCard")
    fireEvent.click(detailButton[0])

    const commentArea = screen.queryByTestId("CommentTest")
    expect(commentArea).toBeInTheDocument()
})