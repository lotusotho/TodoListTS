import "@picocss/pico";
import { List } from "./List";
import { Phrases } from "./Phrases";

export function App(): JSX.Element {
  return (
    <>
    <div className="mainContainer">
      <h1 className="main-title"><i>My TodoList ✨</i></h1>
      <h3 className="caption-title-bluePhrase"><i>{`${Phrases[Math.floor((Math.random() * Phrases.length))]}`}</i></h3>
      <span className="bg-box"></span>
      <List/>
    </div>
  </>
    )
}