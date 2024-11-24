import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import RequestTravelPage from "./pages/RequestTravelPage";
import TravelOptionsPage from "./pages/TravelOptionsPage"; 
import TravelHistoryPage from "./pages/TravelHistoryPage";
import Footer from "./components/Footer";
import "./App.css"


const App: React.FC = () => {

  return (
      <Router>
        <Navebar />                                
        <Routes>
          <Route path="/" element={<RequestTravelPage />} />
          <Route path="/traveloption" element={<TravelOptionsPage />} />
          <Route path="/History" element={<TravelHistoryPage />} />
        </Routes>                                 
        <Footer />
      </Router>
  );
};

export default App;
