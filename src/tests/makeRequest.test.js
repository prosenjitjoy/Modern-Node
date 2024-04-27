import { test, describe, it, mock, beforeEach } from "node:test"
import assert from "node:assert"
import MakeRequest from "../index.js"

describe("testing", function () {
  beforeEach(() => mock.restoreAll())
  it("fetchDataFromAPI should return a product", async function (t) {
    mock
      .method(MakeRequest, MakeRequest.fetchDataFromAPI.name)
      .mock.mockImplementation(async function () {
        return { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
      })

    const res = await MakeRequest.fetchDataFromAPI()
    assert.strictEqual(res.userId, 1)
    assert.strictEqual(res.completed, false)
  })

  it("fetchDataFromAPI should return product with given ID", async function (t) {
    const id = 3
    mock
      .method(MakeRequest, MakeRequest.fetchDataFromAPI.name)
      .mock.mockImplementation(async function (id) {
        return { userId: 1, id: 3, title: 'delectus aut autem', completed: false }
      })

    const res = await MakeRequest.fetchDataFromAPI(id)
    assert.deepEqual(res.id, id)
  })

  it("should create a slug based on the title", async function (t) {
    const slugSpy = mock.method(MakeRequest, "slugifyTitle")
    mock
      .method(MakeRequest, "fetchDataFromAPI")
      .mock.mockImplementation(async function () {
        return { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
      })

    await MakeRequest.addToDB()
    const call = MakeRequest.slugifyTitle.mock.calls[0]
    assert.deepEqual(slugSpy.mock.calls.length, 2)
    assert.deepEqual(MakeRequest.fetchDataFromAPI.mock.callCount(), 1)
    assert.strictEqual(call.result.slug, `delectus-aut-autem1`)
  })
})