const { expect } = require('chai');	
const app = require('../app');

describe("Teste toCelsius", () => {
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

describe("Teste funktionen auf falsche Typen", () => {
    it("toCelsius sollte nicht auf Arrays reagieren", () => {
        expect(app.toCelsius([1,2,3])).to.be.NaN;
    });
    it("toFahrenheit sollte nicht auf Arrays reagieren", () => {
        expect(app.toFahrenheit([1,2,3])).to.be.NaN;
    });
    it("toCelsius sollte nicht auf Strings reagieren", () => {
        expect(app.toCelsius("Hallo")).to.be.NaN;
    });
    it("toFahrenheit sollte nicht auf Strings reagieren", () => {
        expect(app.toFahrenheit("Hallo")).to.be.NaN;
    });
    it("toCelsius sollte nicht auf Boolean reagieren", () => {
        expect(app.toCelsius(true)).to.be.NaN;
    });
    it("toFahrenheit sollte nicht auf Boolean reagieren", () => {
        expect(app.toFahrenheit(true)).to.be.NaN;
    });
    it("toCelsius sollte nicht auf null reagieren", () => {
        expect(app.toCelsius(null)).to.be.NaN;
    });
    it("toFahrenheit sollte nicht auf null reagieren", () => {
        expect(app.toFahrenheit(null)).to.be.NaN;
    });
    it("toCelsius sollte nicht auf undefined reagieren", () => {
        expect(app.toCelsius(undefined)).to.be.NaN;
    });
    it("toFahrenheit sollte nicht auf undefined reagieren", () => {
        expect(app.toFahrenheit(undefined)).to.be.NaN;
    });
});