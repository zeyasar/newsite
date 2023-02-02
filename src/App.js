import { CssBaseline } from "@mui/material";
import "./App.css";
import NewsContextProvider from "./context/NewsContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
    <CssBaseline />
      <NewsContextProvider>
        <AppRouter />
      </NewsContextProvider>
    </div>
  );
}

export default App;
