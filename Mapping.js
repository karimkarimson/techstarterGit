function Event() {
    const numbers = [1, 2, 3, 4, 5];
    const {clicked, setClicked} = useState(0);
    const handleClick = (n) => { setClicked(n)};
    const handleEvent = (e, n) => { setClicked(n)};

    return (
        <>
        <p> 
            {clicked > 0 ? "clicked" + clicked : "not clicked"}
        </p>
        {numbers.map((number) => <button key="{number}" onClick={() => handleEvent(event, number)}></button>)}
        </>
    )
}
