import {render, screen} from '../../test-utils'
import MuiMode from './Mui-Mode'


describe.skip("MuiMode", ()=>{
    test("renders text correctly", ()=>{
        render(<MuiMode/>)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })
})
