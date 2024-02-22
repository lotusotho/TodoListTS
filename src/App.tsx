import "@picocss/pico";
import { List } from "./List";
import { ApiCall } from "./APIs";

export function App(): JSX.Element {
  return (
    <>
    <div className="mainContainer">
      <h1 className="main-title"><i>My TodoList ✨</i></h1>
      <ApiCall/>
      <span className="bg-box"></span>
      <List/>
    </div>
  </>
    )
}