export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Correo electronico requerido";
  } else if (!/^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "dirección de correo electrónico es inválida";
  }

  if (!values.password) {
    errors.password = "Contraseña requerido";
  } else if (values.password.length < 6) {
    errors.password = "Contraseña debe tener seis caracteres o más";
  }
  return errors;
}
