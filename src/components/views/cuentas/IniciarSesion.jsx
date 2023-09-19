import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const IniciarSesion = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();

  const onSubmit = () => {
    //peticion PUT
  };

  return (
    <Container className="mt-5 mainSection">
      <h1 className="text-center display-4">Iniciar Sesión</h1>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            {...register("contraseniaUsuario", {
              required: "La contraseña es requerida",
              minLength: {
                value: 5,
                message: "Debe introducir una contraseña mayor a 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe introducir una contraseña menor a 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.contraseniaUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="danger" className="w-100 my-5">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default IniciarSesion;
