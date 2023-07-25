module.exports = {
    toCelsius: (fahrenheit) => { return (5/9) * (fahrenheit-32); },
    toFahrenheit: (celsius) => { return (celsius * 9/5) + 32; }
};