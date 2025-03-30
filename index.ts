import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const result = response.data;

  const id = result.id;
  const title = result.title;
  const fineshed = result.completed;

  console.log(`
    Todo  id: ${id}, title: ${title}... e fineshed: ${fineshed}
    `);
});
