import { useState } from "react";
import "./Examples.css";
import TabButton from "../../components/TabButton/TabButton";
import Example from "../../components/Example/Example";
import { EXAMPLES } from "./data";
import Section from "../../components/Section";
import Tabs from "../../components/Tabs";

function ExamplesSection() {
  const [tabLabel, printTabContent] = useState();

  function handleClick(newtabLabel) {
    printTabContent(newtabLabel);
  }

  const tabButtons = 
    <>
      <TabButton isActive={tabLabel === 'components'} onClick={() => handleClick('components')}>Component</TabButton>
      <TabButton isActive={tabLabel === 'jsx'}  onClick={() => handleClick('jsx')}>JSX</TabButton>
      <TabButton isActive={tabLabel === 'props'}  onClick={() => handleClick('props')}>Props</TabButton>
      <TabButton isActive={tabLabel === 'state'}  onClick={() => handleClick('state')}>State</TabButton>
    </>;

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={tabButtons}>
        <Example {...EXAMPLES[tabLabel]} />
      </Tabs>
    </Section>
  );
}

export default ExamplesSection;