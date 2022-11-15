import {renderHook, act} from '../../../test-utils'
import UseCounter from './UseCounter'

describe.skip("UseCounter", ()=>{
    test("should render the initial count", ()=> {
        const {result} = renderHook(UseCounter)
        expect(result.current.count).toBe(0)
    })

    test('should accept and render the same initial count', ()=>{
        const {result} = renderHook(UseCounter,{
            initialProps:{
                initialCount: 10
            }
        })
        expect(result.current.count).toBe(10)
    })

    test("should increment the count", ()=>{
        const {result} = renderHook(UseCounter)
        act(()=> result.current.increment())
        expect(result.current.count).toBe(1)
    })

    test("shound decrement the count", ()=>{
        const {result} = renderHook(UseCounter)
        act(()=> result.current.decrement())
        expect(result.current.count).toBe(-1)
    })


})