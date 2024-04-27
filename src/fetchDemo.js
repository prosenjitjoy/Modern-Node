async function fetchDemo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  if (!response.ok) {
    const message = `An error has occured: ${response.statusText}`
    throw new Error(message)
  }

  const data = await response.json()
  console.log(data)
}

fetchDemo().catch(function (error) {
  console.log(error.message)
})