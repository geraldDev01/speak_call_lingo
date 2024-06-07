import { createContext, useState, useContext } from "react";

const FormTypeContext = createContext();

export const FormTypeProvider = ({ children }) => {
  const [formType, setFormType] = useState(true);

  const contextValue = {
    formType,
    setFormType,
  };

  return (
    <FormTypeContext.Provider value={contextValue}>
      {children}
    </FormTypeContext.Provider>
  );
};

export const useFormType = () => useContext(FormTypeContext);
