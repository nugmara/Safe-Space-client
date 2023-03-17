import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();

function AuthWrapper(props) {
  const { children } = props;
  // ! siempre recibe props
  // nuestros estados de auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate()
  //funciones de auth
  // 1. Esta función va a contactar al BE para validar el Toekn
  const authenticateUser = async () => {
    setIsFetching(true);
    try {
      const response = await verifyService();
      setIsLoggedIn(true);
      setLoggedUser(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error")
      setIsLoggedIn(false);
      setLoggedUser(null);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    // autentica el token del usuario cuando visita la página o refresca la página
    authenticateUser();
  }, []);

  const passedContext = {
    isLoggedIn,
    loggedUser,
    authenticateUser,
  };

  if (isFetching) {
    return (
      <div className="App">
        <h2>Validando credenciales...</h2>
      </div>
    );
  }

  return (
    <div>
      <AuthContext.Provider value={passedContext}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export {AuthContext, AuthWrapper}