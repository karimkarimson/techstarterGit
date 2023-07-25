const { expect } = require('chai');	
const app = require('../app');

describe("Teste toCelcius", () => {
    it("sollte 0 zurückgeben, wenn 32 übergeben wird", () => {
        expect(app.toCelsius(32)).to.equal(0);
    });
    it("sollte 100 zurückgeben, wenn 212 übergeben wird", () => {
        expect(app.toCelsius(212)).to.equal(100);
    });
    it("sollte -40 zurückgeben, wenn -40 übergeben wird", () => {
        expect(app.toCelsius(-40)).to.equal(-40);
    });
});

describe("Teste toFahrenheit", () => {
    it("sollte 32 zurückgeben, wenn 0 übergeben wird", () => {
        expect(app.toFahrenheit(0)).to.equal(32);
    });
    it("sollte 212 zurückgeben, wenn 100 übergeben wird", () => {
        expect(app.toFahrenheit(100)).to.equal(212);
    });
    it("sollte -40 zurückgeben, wenn -40 übergeben wird", () => {
        expect(app.toFahrenheit(-40)).to.equal(-40);
    });
});