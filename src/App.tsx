import "@picocss/pico";
import { List } from "./List";

export function App(): JSX.Element {
  return (
    <>
    <div className="mainContainer">
      <h1 className="main-title"><i>My TodoList ✨</i></h1>
      <h3 className="caption-title-bluePhrase"><i>{`${phrases[Math.floor((Math.random() * phrases.length))]}`}</i></h3>
      <span className="bg-box"></span>
      <List/>
    </div>
  </>
    )
}

const phrases: string[] = [
  "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "You can observe a lot just by watching.",
  "A house divided against itself cannot stand.",
  "Be the chief but never the lord.",
  "Life is a learning experience, only if you learn.",
  "Well begun is half done.",
  "Peace comes from within. Do not seek it without.",
  "We can only learn to love by loving.",
  "You'll see it when you believe it."
]