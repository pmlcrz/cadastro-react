import React, { useState } from "react";
import { insertClientes } from "../../Api/clientesApi";

const useForm = (propsDoForm) => {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    clearform() {
      setValues({ id: "", nome: "", email: "" });
    },
  };
};

const CadastrarClientes = () => {
  const formCadastro = useForm({
    initialValues: { id: "", nome: "", email: "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          insertClientes(formCadastro.values);
          alert("Cliente Cadastrado");
        }}
      >
        <input
          placeholder="Id do Cliente"
          name="id"
          value={formCadastro.values.id}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Nome do Cliente"
          name="nome"
          value={formCadastro.values.nome}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Email do Cliente"
          name="email"
          value={formCadastro.values.email}
          onChange={formCadastro.handleChange}
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarClientes;
