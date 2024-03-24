import { useState } from "react";
import "./Examples.css";
import TabButton from "../../components/TabButton/TabButton";
import Example from "../../components/Example/Example";
import { EXAMPLES } from "./data";

function ExamplesSection() {
  const [tabLabel, printTabContent] = useState();

  function handleClick(newtabLabel) {
    printTabContent(newtabLabel);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onClick={() => handleClick('components')}>Component</TabButton>
        <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
        <TabButton onClick={() => handleClick('props')}>Props</TabButton>
        <TabButton onClick={() => handleClick('state')}>State</TabButton>
      </menu>
      <Example {...EXAMPLES[tabLabel]} />
    </section>
  );
}

export default ExamplesSection;