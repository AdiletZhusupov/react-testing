import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe.skip("Application", ()=>{
    test("renders correctly", ()=>{
        render(<Application/>)

        const pageHeading = screen.getByRole("heading",{
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole("heading",{
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()

        const paragraphElement2 = screen.getByText("ields ar", {exact:false})
        expect(paragraphElement2).toBeInTheDocument()

        const paragraphElement3 = screen.getByText(/^all fields are mandatory$/i)
        expect(paragraphElement3).toBeInTheDocument()

        const paragraphElement4 = screen.getByText((content)=>content.startsWith("All"))
        expect(paragraphElement4).toBeInTheDocument()

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument()

        const imageElement = screen.getByAltText("food")
        expect(imageElement).toBeInTheDocument()

        const customElement = screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument()

        const nameElement = screen.getByRole("textbox",{
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()
        
        const nameElement2 = screen.getByLabelText("Name", {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()
        
        const nameElement3 = screen.getByPlaceholderText("FullName")
        expect(nameElement3).toBeInTheDocument()
        
        const nameElement4 = screen.getByDisplayValue("Adilet")
        expect(nameElement4).toBeInTheDocument()

        const bioElement = screen.getByRole("textbox",{
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument()


        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()
        
        const termsElement2 = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement2).toBeInTheDocument()

        const submitButtonnElement = screen.getByRole("button")
        expect(submitButtonnElement).toBeInTheDocument()
    })
})