import "./App.css";
import { Chatbot } from "gts-chatbot";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Demo Chatbot for AU BANK</h1>
        <p>
          Welcome to the AI-powered banking assistant.
        </p>
      </div>

      <Chatbot
        config={{
          API_BASE_URL: "https://genaitechsol.shop",
          PROJECT_NAME: "au-bank-demo",
        }}
      />
    </div>
  );
}

export default App;