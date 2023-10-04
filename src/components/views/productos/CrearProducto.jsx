import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const {register,handleSubmit,formState: { errors }, reset} = useForm();
  const onSubmit = (data)=>{
    crearProductoAPI(data).then((respuesta)=>{
      if(respuesta.status === 201){
        Swal.fire('Listo!', 'Su producto ha sido creado', 'success')
        reset();
      }else{
        Swal.fire('Oh!', 'Ocurrió un error, inténtelo más tarde', 'error')
      }
    })
  }
  return (
    <Container className="my-5 mainSection">
      <h1 className="display-4 text-center">Crear un producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-5">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ejemplo: pizza"
            {...register("nombreProducto", {
              required: "El nombre del producto es un campo obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad mínima de caracteres debe ser de dos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad máxima de caracteres debe ser de cien",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Breve descripción del producto"
            {...register("descripcion", {
              required: "La descripción del producto es un campo obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad mínima de caracteres debe ser de dos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad máxima de caracteres debe ser de cien",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ejemplo: 500"
            {...register("precio", {
              required: "El precio es un campo obligatorio",
              min: {
                value: 10,
                message: "El precio mínimo debe ser de 10 pesos",
              },
              max: {
                value: 100000,
                message: "El precio máximo debe ser de 100000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ejemplo: https://img.freepik.com/vector-premium/conjunto-ilustracion-comida-rapida-dibujos-animados_530597-17.jpg?w=2000"
            {...register("imagen", {
              required: "La imagen es un campo obligatorio",
              minLength: {
                value: 10,
                message: "La cantidad mínima de caracteres es de 10",
              },
              maxLength: {
                value: 400,
                message: "La cantidad máxima de caracteres es de 400",
              },
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "URL incorrecta",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Select
            {...register("categoria", { required: "Seleccione una categoría" })}
          >
            <option value="">Seleccione una opción...</option>
            <option value="Pizzas">Pizza</option>
            <option value="Pastas">Pasta</option>
            <option value="Empanadas">Empanada</option>
            <option value="Bebidas">Bebida</option>
            <option value="Postres">Postre</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
