import "./App.css";

import {
  Navbar,
  Header,
  Brands,
  Deals,
  About,
  Products,
  Blogs,
  Footer,
} from "./components";

function App() {
  return (
    <div className="APP">
      <Navbar />
      <Header />
      <Brands />
      <Deals />
      <About />
      <Products />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
