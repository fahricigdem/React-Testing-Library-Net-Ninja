import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from "../AddInput"


const mockedSetTodo = jest.fn()

describe("AddInput", () => {
    it('AddInput test-1', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const element = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(element).toBeInTheDocument()
    })


    it('AddInput test-2', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const element = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(element, { target: { value: "Go out!" } })
        expect(element.value).toBe("Go out!")
    })

    it('AddInput test-3', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const element = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", { name: /Add/i })
        fireEvent.change(element, { target: { value: "Go out!" } })
        fireEvent.click(buttonElement)
        expect(element.value).toBe("")
    })

})
