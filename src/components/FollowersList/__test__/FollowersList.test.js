import { render, screen, fireEvent } from "@testing-library/react"
import FollowersList from "../Followerslist"
import { BrowserRouter } from 'react-router-dom'

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>)
}

describe("FollowersList", () => {
    beforeEach(() => {
        console.log("Running before each Test")
    })
    beforeAll(() => {
        console.log("Running once before All Test")
    })
    afterEach(() => {
        console.log("Running after each Test")
    })
    afterAll(() => {
        console.log("Running once after All Test")
    })
    it("FollowersList test-1", async () => {
        render(<MockFollowersList />)
        const elements = await screen.findAllByRole("heading")
        expect(elements.length).toBe(10)
    })

    it("FollowersList test-2", async () => {
        render(<MockFollowersList />)
        const elements = await screen.findAllByTestId("card-0")
        expect(elements.length).toBe(1)
    })

    it("FollowersList test-3", async () => {
        render(<MockFollowersList />)
        const element = await screen.findByTestId("card-0")
        expect(element).toBeInTheDocument()
    })

    it("FollowersList test-4", async () => {
        render(<MockFollowersList />)
        const elements = await screen.findAllByTestId(/card/i)
        //screen.debug()
        expect(elements.length).toBe(5)
    })



})
