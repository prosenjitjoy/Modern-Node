import { test, describe, it, beforeEach, mock } from "node:test"
import assert from "node:assert"

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

describe("Spies test: it should call sumArray function with arguments", async function () {
  it("some test", async function (t) {
    const spy = mock.fn(sumArray)
    assert.strictEqual(spy([1, 5, 3]), 9)
    assert.strictEqual(spy([2, 7, 5]), 14)
    assert.strictEqual(spy.mock.calls.length, 2)

    const call1 = spy.mock.calls[0]
    assert.deepEqual(call1.arguments[0], [1, 5, 3])
    assert.strictEqual(call1.result, 9)

    const call2 = spy.mock.calls[1]
    assert.deepEqual(call2.arguments[0], [2, 7, 5])
    assert.strictEqual(call2.result, 14)
  })
})

test.skip("Skipping tests", function () {
  assert.notEqual(1, 2)
})