import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe.skip('Greet', ()=>{
    test('renders Hello text', ()=> {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
    
    test('renders Hello text with a name', ()=>{
        render(<Greet name='Adilet'/>)
        const textElement = screen.getByText("Hello Adilet")
        expect(textElement).toBeInTheDocument()
    })
})
