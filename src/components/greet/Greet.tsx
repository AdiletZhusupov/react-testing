import { GreetProps } from "./Greet.types"

function Greet(props: GreetProps) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet