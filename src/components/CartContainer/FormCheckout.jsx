import React, { useState } from "react";

export default function FormCheckout({ handleCheckout }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  function handleReset() {
    setFormData({
      username: "",
      email: "",
      phone: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCheckout({ name: formData.username, email: formData.email, phone: formData.phone });
    console.log("Formulario enviado:", formData);
  }

  function handleNumber(event) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(Number(event.key))) {
      console.log("es un número");
    } else {
      event.preventDefault();
      console.log("no es un número");
    }
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Nombre
        <input
          value={formData.username}
          onChange={handleChange}
          type="text"
          name="username"
        />
      </label>
      <br />
      <label>
        Email
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
      </label>
      <br />
      <label>
        Teléfono
        <input
          value={formData.phone}
          onChange={handleChange}
          onKeyDown={handleNumber}
          type="text"
          name="phone"
        />
      </label>
      <br />
      <button type="submit">Finalizar compra</button>
      <button type="reset">Reset form</button>
    </form>
  );
}
