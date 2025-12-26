 function Button() {
    const buttonStyle = {
        backgroundColor: "hsl(220, 81%, 56%)",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer"
    }

    return (
        <button style={buttonStyle}>Click Me!</button>
    );
}

export default Button; 