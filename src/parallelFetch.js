async function fetchTodos() {
  const [res1, res2, res3] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/2"),
    fetch("https://jsonplaceholder.typicode.com/todos/3")
  ])

  if (!res1.ok || !res2.ok || !res3.ok) {
    throw new Error("An error has occured while fetching todos")
  }

  const todo1 = await res1.json()
  const todo2 = await res2.json()
  const todo3 = await res3.json()

  console.log([todo1, todo2, todo3])
}

fetchTodos().catch(function (error) {
  console.log(error.message)
})