import { CORE_CONCEPTS } from "./data";
import "./CoreConcepts.css";
import CoreConcept from "../../components/CoreConcept/CoreConcept";

function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => <CoreConcept {...coreConcept} />)}
      </ul>
    </section>
  );
}

export default CoreConceptsSection;