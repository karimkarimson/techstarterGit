module.exports = {
    toCelsius: (fahrenheit) => { 
        if (typeof fahrenheit !== "number") {
            return NaN;
        }
        return (5/9) * (fahrenheit-32);
    },
    toFahrenheit: (celsius) => { 
        if (typeof celsius !== "number") {
            return NaN;
        }
        return (celsius * 9/5) + 32;
    }
};