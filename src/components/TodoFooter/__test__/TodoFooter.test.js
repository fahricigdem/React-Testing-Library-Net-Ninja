import { render, screen } from '@testing-library/react'
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"


const MockTodoFooter = ({ number }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={number} />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    it('TodoFooter test-1a', async () => {
        render(<MockTodoFooter number={1} />)
        const element = screen.getByText(/1 task left/i)
        expect(element).toBeInTheDocument()
    })

    it('TodoFooter test-1b', async () => {
        render(<MockTodoFooter number={5} />)
        const element = screen.getByText(/5 tasks left/i)
        expect(element).toBeInTheDocument()
    })
})



it('TodoFooter test-2', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByText(/1 task left/i)
    expect(element).toBeTruthy()
})

// it('TodoFooter test-3', async () => {
//     render(<MockTodoFooter number={1} />)
//     const element = screen.getByText(/1 task left/i)
//     expect(element).toBeVisible()
// })

// // it('TodoFooter test-4', async () => {
// //     render(<MockTodoFooter number={1} />)
// //     const element = screen.getByText(/1 task left/i)
// //     expect(element).not.toBeVisible()
// // })

// it('TodoFooter test-5', async () => {
//     render(<MockTodoFooter number={1} />)
//     const element = screen.getByText(/1 task left/i)
//     expect(element).toContainHTML('p')
// })

// it('TodoFooter test-6', async () => {
//     render(<MockTodoFooter number={1} />)
//     const element = screen.getByTestId("para")
//     expect(element).not.toBeFalsy()
// })

// it('TodoFooter test-7', async () => {
//     render(<MockTodoFooter number={3} />)
//     const element = screen.getByTestId("para")
//     expect(element.innerHTML).toBe("3 tasks left")
// })

// it('TodoFooter test-', async () => {
//     render(<MockTodoFooter number={3} />)
//     const element = screen.getByTestId("para")
//     expect(element.textContent).toBe("3 tasks left")
//     expect(element).not.toBeFalsy()
//     expect(element).toContainHTML('p')
// })