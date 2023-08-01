export function Clock() {
    const date = new Date();
    return (
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
}