import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { crearUsuarioAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Registrar = ({ setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    crearUsuarioAPI(data).then((respuesta) => {
      if (respuesta.status === 201) {
        reset();
        Swal.fire(
          "Su cuenta ha sido creada",
          "Ya puede iniciar sesión",
          "success"
        );
        localStorage.setItem("usuarioCreadoKey", JSON.stringify(data));
        setUsuarioLogeado(data);
        navegacion("/");
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Intente este proceso más tarde",
          "error"
        );
      }
    });
  };

  return (
    <Container className="mt-5 mainSection">
      <h1 className="text-center display-4">Registrate</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            required
            type="text"
            className="text-center mt-5"
            placeholder="Nombre"
            {...register("nombreUsuario", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "El nombre debe requerir como mínimo 3 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El nombre debe requerir como máximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="email"
            className="text-center mt-5"
            placeholder="Email"
            {...register("emailUsuario", {
              required: "El email es requerido",
              minLength: {
                value: 10,
                message: "El Email debe requerir como mínimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El Email debe requerir como máximo 100 caracteres",
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese un Email válido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.emailUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            type="password"
            className="text-center mt-5"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 5,
                message: "Debe introducir una contraseña mayor a 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe introducir una contraseña menor a 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="danger" className="w-100 mt-5">
          Crear
        </Button>
        <Link to="/IniciarSesion" className="text-decoration-none">
          <p className="text-center mt-3 mb-4 colorRojoTexto">
            Ya tienes una cuenta? inicie sesión
          </p>
        </Link>
      </Form>
    </Container>
  );
};

export default Registrar;
