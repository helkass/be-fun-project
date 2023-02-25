import Router from "./routes/Router";
import Layout from "./template/Layout";
function App() {
   return (
      <div className="App">
         <Layout>
            <Router />
         </Layout>
      </div>
   );
}

export default App;
