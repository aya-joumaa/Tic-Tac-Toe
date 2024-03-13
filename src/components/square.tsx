import {useState} from "react"

function Square() {
    const [value, setValue] = useState("")

    function handleOnClick() {
        setValue("X")
    }

    return (
        <button className="square" onClick={handleOnClick}>
            {value}
        </button>
    )
}

export default Square;