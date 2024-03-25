import { CORE_CONCEPTS } from "./data";
import "./CoreConcepts.css";
import CoreConcept from "../../components/CoreConcept/CoreConcept";
import Section from "../../components/Section";

function CoreConceptsSection() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => <CoreConcept {...coreConcept} />)}
      </ul>
    </Section>
  );
}

export default CoreConceptsSection;