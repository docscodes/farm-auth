import "./App.css";
import { Footer } from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
