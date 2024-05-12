import { Link } from "react-router-dom";
import imagen from '../imgen/katir.png'
export const UsPage = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img src={imagen} alt="Imagen" style={{ maxWidth: "100%", maxHeight: "80vh", margin: "20px auto" }} />
      <div>
          <Link to="/login">
              <button>Ir al inicio de sesión</button>
          </Link>
      </div>
  </div>
      );
    };
