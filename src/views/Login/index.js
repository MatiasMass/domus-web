import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initSesion } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import users from "../../users";

//components
import { Input, Button } from "../../components/atomics";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function userExist() {
    const userResult = users.find((user) => user.email === email);
    if (userResult) {
      return true;
    } else {
      return false;
    }
  }

  function onPressInitSession(e) {
    e.preventDefault();
    if (password !== "123") {
      alert("Usuario o contraseña incorrecta");
      return;
    }
    switch (email) {
      case "secretaria@domus.com":
        navigate("/secretary");
        break;
      case "agente@domus.com":
        navigate("/realestateagent");
        break;
      case "admin@domus.com":
        navigate("/admin");
        break;
      case "administrativo@domus.com":
        navigate("/administrative");
        break;
      default:
        alert("Usuario no registrado");
        break;
    }
    dispatch(initSesion(email, password));
  }

  return (
    <div className="d-flex  flex-column align-items-center h-100 justify-content-center bg-dark">
      <form className="form-container bg-light shadow-box">
        <p className="fw-bold text-center fs-4 mb-3">INICIAR SESION</p>
        <div>
          <p className="fw-bold mt-3 fs-5 mb-1">Nombre de usuario:</p>
          <Input value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <p className="fw-bold mt-3 fs-5 mt-1">Contraseña:</p>
          <Input type="password" value={password} onChange={onChangePassword} />
        </div>
        <Button onClick={onPressInitSession} className="mt-4 fs-5">
          INGRESAR
        </Button>
        <div className="d-flex ">
          <Link
            to="/"
            className="fw-bold mt-4 cursor-pointer no-select-text text-decoration-none text-dark"
          >
            Soy cliente
          </Link>
        </div>
      </form>
      {/* <div className="soy-trabajador-container cursor-pointer no-select-text">
            <p className="text-light fs-5 fw-bolder ">SOY TRABAJADOR</p>
            <img src={ARROW} alt="arrow" className="arrow" />
          </div> */}
    </div>
  );
};

export default Login;
