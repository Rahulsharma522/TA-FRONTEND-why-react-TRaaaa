import Articles from './articles';
import Header from './header';
import Hero from './hero';
import Footer from './footer';

function App(props) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;