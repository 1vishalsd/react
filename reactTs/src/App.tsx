import "./App.css";
function App() {
  return (
    <div>
      <Todo title="hi there" descripation="jdsfkj" done={false} />
    </div>
  );
}
interface TodoProp {
  title: string;
  descripation: string;
  done: boolean;
}
function Todo(props: TodoProp) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.descripation}</h2>
    </div>
  );
}
export default App;
