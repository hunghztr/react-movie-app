import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext)
const ModalProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState();
  const [activeTabId, setActiveTabId] = useState();
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShow]);
  const popup = (trailer) =>{
    setIsShow(true)
    setContent(trailer)
  }
  return (
    <ModalContext.Provider value={{popup,activeTabId,setActiveTabId}}>
      {children}
      {isShow && (
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-slate-600/60 flex items-center justify-center"
          onClick={() => setIsShow(false)}>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
