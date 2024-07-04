import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const StepNavigationContextProvider = ({ children }) => {
  const [activeStep, navigateTo] = useState(0);
  return (
    <NavContext.Provider value={{ activeStep, navigateTo }}>
      {children}
    </NavContext.Provider>
  );
};

const useActiveStep = () => {
  const context = useContext(NavContext);
  return context.activeStep;
};
const useANavigateStep = () => {
  const context = useContext(NavContext);
  return context.navigateTo;
};

export { useActiveStep, useANavigateStep };
export default StepNavigationContextProvider;
