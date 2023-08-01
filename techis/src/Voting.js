export function VotingButton() {
    const [counter, setCounter] = useState(0);
    const incrementCount = () => { setCounter++};
    const decrementCount = () => { setCounter--};
    const toSend = (
        <>
        <h1>Crazy Vote Button</h1>
        <button onclick={incrementCount}>+</button>
        <button onclick={decrementCount}>-</button>
        </>
    );
    return toSend;
}