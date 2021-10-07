import { render, screen, fireEvent } from "@testing-library/react"
import Todo from "../Todo"
import { BrowserRouter } from 'react-router-dom'

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>)
}

const addTodo = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    tasks.map(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

describe("Todo", () => {
    it("Todo test-1", async () => {
        render(<MockTodo />)
        addTodo(["Go out!"])
        const divElement = screen.getByText(/Go out!/i)
        expect(divElement).toBeInTheDocument()
    })


    it("Todo test-2", async () => {
        render(<MockTodo />)
        const todos = ["Go out!", "Come back!", 'hoh oho']
        addTodo(todos)
        //screen.debug()
        const divElements = screen.getAllByTestId("todo")
        expect(divElements.length).toBe(todos.length)
    })

    it("Todo test-3", async () => {
        render(<MockTodo />)
        const todos = ["Go out!"]
        addTodo(todos)
        const divElement = screen.getByText(/Go out!/i)
        expect(divElement).toHaveClass("todo-item")
    })

    it("Todo test-4", async () => {
        render(<MockTodo />)
        const todos = ["Go out!"]
        addTodo(todos)
        const divElement = screen.getByText(/Go out!/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })

    it("Todo test-5", async () => {
        render(<MockTodo />)
        const todos = ["Go out!"]
        addTodo(todos)
        const divElement = screen.getByText(/Go out!/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})


