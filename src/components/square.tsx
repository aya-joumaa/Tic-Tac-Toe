interface props {
    value?: string,
    clickSquare: () => void,
}

function Square({value, clickSquare}: props) {
    return (
        <button className="square" onClick={clickSquare}>
            {value}
        </button>
    )
}

export default Square;