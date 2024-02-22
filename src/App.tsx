import "@picocss/pico";
import { List } from "./List";
import { getPhraseAPI } from "./APIs";

export function App(): JSX.Element {
  getPhraseAPI();
  
  return (
    <>
    <div className="mainContainer">
      <h1 className="main-title"><i>My TodoList ✨</i></h1>
      <h3 className="caption-title-bluePhrase"><i id="quote"></i></h3>
      <span className="bg-box"></span>
      <List/>
    </div>
  </>
    )
}