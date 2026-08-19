const { describe, it } = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator", () => {
    describe("add", () => {
        it("adds two positive numbers", () => {
            assert.strictEqual(add(2, 3), 5);
        });

        it("adds negative numbers", () => {
            assert.strictEqual(add(-1, -1), -2);
        });
    });

    describe("subtract", () => {
        it("subtracts two numbers", () => {
            assert.strictEqual(subtract(5, 3), 2);
        });
    });

    describe("multiply", () => {
        it("multiplies two numbers", () => {
            assert.strictEqual(multiply(4, 3), 12);
        });
    });

    describe("divide", () => {
        it("divides two numbers", () => {
            assert.strictEqual(divide(10, 2), 5);
        });

        it("throws on division by zero", () => {
            assert.throws(() => divide(10, 0), {
                message: "Cannot divide by zero",
            });
        });
    });
});
