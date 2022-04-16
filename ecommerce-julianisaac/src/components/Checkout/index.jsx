import React, { useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const Checkout = ({ cart, total }) => {
  
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [ordenId, SetOrdenId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || dni === "") {
      return;
    }
    const ordenGenerada = {
      comprador: {
        nombre: nombre,
        dni: dni,
      },
      articulos: cart,
      total: total,
      fechaCreacion: new Date().toLocaleString(),
    };

    const db = getFirestore();
    const ordenes = collection(db, "ordenes");
    addDoc(ordenes, ordenGenerada).then(({id}) => SetOrdenId(id))

  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <form onSubmit={onSubmit}>
          <input placeholder="Nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input placeholder="Dni" id="dni" value={dni} onChange={(e) => setDni(e.target.value)} />
          <button type="submit">Confirmar compra</button>

          {ordenId !== '' ? 
              <p>Se genero la orden con id ${ordenId}</p> 
              :
              null
          }

        </form>

      </div>
    </div>
  );
};

export default Checkout;
