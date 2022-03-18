import Home from "./components/Home";
import FadeIn from "react-fade-in";
import ContentBlock from "./components/ContentBlock";

function App() {
  return (
    <FadeIn transitionDuration={700}>
      {" "}
      <div className="App">
        <div>
          <Home></Home>
          <ContentBlock></ContentBlock>
        </div>
      </div>
    </FadeIn>
  );
}

export default App;
