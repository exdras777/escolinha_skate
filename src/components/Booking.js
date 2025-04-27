import React, { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    nivel: "",
    horario: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento enviado!\nNome: ${form.nome}\nIdade: ${form.idade}\nNível: ${form.nivel}\nHorário: ${form.horario}`);
    setForm({ nome: "", idade: "", nivel: "", horario: "" });
  };

  return (
    <div>
      <h2>Agende sua aula</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Idade</label>
          <input
            type="number"
            name="idade"
            className="form-control"
            value={form.idade}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nível de experiência</label>
          <select
            name="nivel"
            className="form-select"
            value={form.nivel}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Horário preferido</label>
          <input
            type="time"
            name="horario"
            className="form-control"
            value={form.horario}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Booking;
