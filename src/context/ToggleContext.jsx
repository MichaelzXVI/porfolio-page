import { useContext, Provider, useState, createContext } from 'react';

const ToggleContext = createContext();

function ToggleProvider({ children }) {
  const [toggleMode, setToggleMode] = useState(false);
  const [toggleResponsive, setToggleResponsive] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const [toggleActive, setToggleActive] = useState(null);

  const handleToggleMode = () => {
    setToggleMode((toggleMode) => !toggleMode);
  };

  const handleResponsive = () => {
    setToggleResponsive((toggleResponsive) => !toggleResponsive);
  };

  const handleLanguage = () => {
    setToggleLanguage((toggleLanguage) => !toggleLanguage);
  };

  const handleActive = (index) => {
    setToggleActive(index);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleActive,
        toggleLanguage,
        toggleResponsive,
        toggleMode,

        onToggleMode: handleToggleMode,
        onResponsive: handleResponsive,
        onLanguage: handleLanguage,
        onActive: handleActive,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined) {
    throw new Error('ToggleContext was used outside of the provider!');
  }
  return context;
}

export { ToggleProvider, useToggle };
