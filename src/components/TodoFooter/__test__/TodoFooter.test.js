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

it('render correct number of incompleted tasks ', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByText(/1 task left/i)
    expect(element).toBeInTheDocument()
})


it('render correct number of incompleted tasks ', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByText(/1 task left/i)
    expect(element).toBeTruthy()
})

it('is it Visible ', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByText(/1 task left/i)
    expect(element).toBeVisible()
})

// it('is it Visible ', async () => {
//     render(<MockTodoFooter number={1} />)
//     const element = screen.getByText(/1 task left/i)
//     expect(element).not.toBeVisible()
// })

it('is it Visible ', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByText(/1 task left/i)
    expect(element).toContainHTML('p')
})

it('has it text ', async () => {
    render(<MockTodoFooter number={1} />)
    const element = screen.getByTestId("para")
    expect(element).toHaveTextContent("1 task left")
})