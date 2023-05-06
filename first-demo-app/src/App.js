import "./App.css";
// import Quiz from "./components/quiz";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import AuthProvider from "./context/auth-context";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
