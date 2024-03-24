import CoreConceptListItem from "./CoreConceptListItem";
import { CORE_CONCEPTS } from "./data";
import "./CoreConcept.css";

function CoreConceptList() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConceptListItem {...CORE_CONCEPTS[0]} />
        <CoreConceptListItem {...CORE_CONCEPTS[1]} />
        <CoreConceptListItem {...CORE_CONCEPTS[2]} />
        <CoreConceptListItem {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
}

export default CoreConceptList;