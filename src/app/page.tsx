import { Todo } from "./interfaces/todo";
import styles from "./page.module.css";

async function getData(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
}

export default async function Home() {
  const todos = await getData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {todos.length === 0 ? (
          <div>Loading...</div>
        ) : (
          todos.map((todo) => (
            <div key={todo?.id}>
              <p>
                {todo.id}: {todo.title}
              </p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
