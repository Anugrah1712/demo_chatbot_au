
import React from "react";
import "./App.css";
import { Chatbot } from "gts-chatbot-au_bank";

function App() {
  return (
    <div className="container">

      <div className="demo-content">

        {/* Original chatbot search bar appears here */}
        <div
          id="aura-launcher-target"
          className="aura-launcher-target"
        />

        {/* Original demo card */}
        <div className="hero">
          <h1>Demo Chatbot for AU BANK</h1>
          <p>
            Welcome to the AI-powered banking assistant.
          </p>
        </div>

      </div>

      {/* Chatbot functionality remains unchanged */}
      <Chatbot
        config={{
          API_BASE_URL: "https://api.genaitechsol.shop",
          PROJECT_NAME: "au-bank-demo",

          // Correct configuration property
          HEADER_SELECTOR: "#aura-launcher-target",
        }}
      />

    </div>
  );
}

export default App;
