import React from "react";
import { useAuthDispatch, logout, useAuthState } from "../../Context";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";

function Dashboard(props) {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Prensa española</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p>Welcome {userDetails.user.email}</p>
      <div>
        <a href="https://www.marca.com/">Marca</a>
        <img className={styles.periodico} src="https://e00-marca.uecdn.es/imagenes/2022/03/12/portada/marca_papel/g1203.35acebaaac283f4f521648cba01feca9.jpg" alt="marca"/>
        <img className={styles.periodico} src="https://s1.eestatic.com/2022/04/22/actualidad/666943303_223740704_855x1140.jpg" alt="as"/>
      </div>
      <div>
        <a href="https://as.com/">As</a>
      </div>
    </div>
  );
}

export default Dashboard;