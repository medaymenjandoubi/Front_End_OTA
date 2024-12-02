import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation(); // Utiliser la fonction useTranslation

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change la langue sélectionnée
  };
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark mode by changing the data-theme attribute
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      console.log("Language changed to:", lng);
    };

    // Listen to language change events
    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener on component unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  return (
    <div className="App" style={{ height: "100vh" }}>
      <header className="App-header">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img
              src={process.env.PUBLIC_URL + "/majota logo.png"}
              alt="Majota Logo"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10%",
              }}
            />
            <span style={{ fontWeight: "bold", color: "#0c1c3c" }}>Majota</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav " style={{marginRight:'auto'}}>
              <li className="nav-item active">
              <a className="nav-link" href="/home">
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                {t("about")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  {t("services")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                {t("contact")}

                </a>
              </li>
            </ul>
            <div className="ml-auto">
            <button onClick={() => changeLanguage('en')}>
            </button>
            <button onClick={() => changeLanguage('fr')}>
              
            </button>
          </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckCheckedDisabled"
                checked={darkMode}
                onChange={toggleDarkMode}
                style={{ backgroundColor: darkMode ? "black" : "#0c1c3c" }}
              />

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckCheckedDisabled"
              >
                {darkMode ? (
                  <i
                    className="fas fa-moon"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-sun"
                    style={{
                      color: "gray",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  ></i>
                )}
              </label>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
