async function fetchWithTimeout() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    signal: AbortSignal.timeout(500)
  })

  if (!response.ok) {
    const message = `An error has occured: ${response.statusText}`
    throw new Error(message)
  }

  const data = await response.json()
  console.log(data)
}

fetchWithTimeout().catch(function (error) {
  console.log(error.message)
})