import Header from "./common/Header";
import CoreConceptsSection from "./sections/CoreConcepts/CoreConceptsSection";
import ExamplesSection from "./sections/Examples/ExamplesSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSection />
        <ExamplesSection />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
