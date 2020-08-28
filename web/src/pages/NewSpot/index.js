import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import camera from "../../assets/camera.svg";
import api from "../../services/api";
import "./styles.css";

function NewSpot() {
  const [thumbnail, setThumbnail] = useState();
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem("user");
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id },
    });
    alert("Spot criado!");
    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={(event) => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="aqui" />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input
        type="text"
        id="company"
        placeholder=" Sua empresa"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        Tecnologias* <span>(Separadas por vírgula)</span>
      </label>
      <input
        type="text"
        id="techs"
        placeholder=" Sua empresa"
        placeholder="Quais técnologias usam?"
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        Valor da diária* <span> (Em branco para GRATUITO)</span>
      </label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}

export default NewSpot;
