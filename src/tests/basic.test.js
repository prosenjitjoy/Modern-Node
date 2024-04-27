import { test, describe, it } from "node:test"
import assert from "node:assert"

test("some test", function (t) {
  assert.strictEqual(1, 1)
})

test("second basic test", function () {
  assert.equal(2, 2)
})

// group test
describe("testing", function () {
  it("some test", function () {
    assert.strictEqual(1, 1)
  })
})

// skip test
test.skip("Skipping tests", function () {
  assert.notEqual(1, 1)
})