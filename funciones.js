function validarFormulario() {
  const nombre = document.getElementById("exampleInputPassword1").value.trim();

  const email = document.getElementById("exampleInputEmail1").value.trim();

  const mensjae = document.getElementById("floatingTextarea2").value.trim();

  // Validar que los campos no estén vacíos

  if (!nombre) {
    alert("Por favor, ingrese su nombre.");

    return false;
  }

  if (!email) {
    alert("Por favor, ingrese su dirección de correo electrónico.");

    return false;
  }
  if (!email) {
    alert("Por favor, ingrese su dirección de correo electrónico.");

    return false;
  }
  if (!mensjae) {
    alert("Por favor, ingrese un Mensaje.");

    return false;
  }
  return true;
}
$(document).ready(function () {
  $('#example').DataTable();
});