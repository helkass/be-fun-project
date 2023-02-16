import GlobalStyle from "./styles/global/globalStyles";
import Routes from "./routes/Route";
function App() {
  return (
    <div className="App">
      {/* global style styled components */}
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
