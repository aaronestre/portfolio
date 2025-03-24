import RouterSwitcher from "./components/RouterSwitcher";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import FloatingFooter from "./components/FloatingFooter";

import "./styles/global.css";

function App() {
	return (
		<div className="App bg-(--background-dark)">
			<Navbar />
			<RouterSwitcher />
			<FloatingFooter />
			<Footer />
		</div>
	);
}

export default App;
