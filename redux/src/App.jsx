import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import CrudPage from "./pages/CrudPage";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
