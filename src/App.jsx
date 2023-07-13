import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import ExploreSearch from "./pages/explore/ExploreSearch";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp/:type" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/:postId" element={<Details />} />
        <Route path="/search/:searchRes" element={<ExploreSearch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
