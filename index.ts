import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Result {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const result = response.data as Result;

  const id = result.id;
  const title = result.title;
  const completed = result.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo  id: ${id}, title: ${title}... e fineshed: ${completed}
    `);
};
