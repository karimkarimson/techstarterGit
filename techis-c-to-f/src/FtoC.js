// react-site to translate from Fahrenheit to Celsius and vice versa

import React from 'react';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
};
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
};
// export function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     };
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

export function FtoC(fahren) {
    const fahrenheit = fahren;
    const celsius = toCelsius(fahrenheit);
    const celsiusRounded = Math.round(celsius * 1000) / 1000;
    return celsiusRounded;
};
export function CtoF(cels) {
    const celsius = cels;
    const fahrenheit = toFahrenheit(celsius);
    const fahrenheitRounded = Math.round(fahrenheit * 1000) / 1000;
    return fahrenheitRounded;
};
