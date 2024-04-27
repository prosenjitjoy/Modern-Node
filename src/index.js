class MakeRequest {
  constructor() { }
  static async fetchDataFromAPI(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)

    if (!response.ok) {
      const message = `An error has occured: ${response.statusText}`
      throw new Error(message)
    }

    const todo = await response.json()
    return todo
  }

  static slugifyTitle(todo) {
    const slug = `${todo.title.replace(/ /g, "-")}${todo.id}`
    return { ...todo, slug }
  }

  static async addToDB() {
    const todo = await this.fetchDataFromAPI()
    this.slugifyTitle(todo)
    return this.slugifyTitle(todo)
  }
}

export default MakeRequest
