import { useState } from "react";
import data from "./data";
import List from "./components/List";

function App() {
  const [books, setBooks] = useState(data);
  console.log(books);
  return (
    <main>
      <h2>Harry Potter's Books</h2>
      <List books={books} />
    </main>
  );
}

export default App;
