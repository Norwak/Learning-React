import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
        I will not follow any of the styling options in this course besides normal css. Styles should be in a separate file and never written inline. Tailwind should not exist, styled-components should not exist, inline styling should not exist.
      </main>
    </>
  );
}
