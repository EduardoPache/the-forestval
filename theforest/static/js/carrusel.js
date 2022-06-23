
var imagenes = ["static/images/1.jpg", "static/images/2.jpg", "static/images/3.jpg", "static/images/4.jpg"],
  count = 0;
function carrusel(contenedor) {
  contenedor.addEventListener("click", (e) => {
    let atras = contenedor.querySelector(".atrasIcon"),
      adelante = contenedor.querySelector(".adelanteIcon"),
      img = contenedor.querySelector(".images"),
      tgt = e.target;

    if (tgt == atras) {
      if (count > 0) {
        img.src = imagenes[count - 1];
        count--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        count = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (count < imagenes.length - 1) {
        img.src = imagenes[count + 1];
        count++;
      } else {
        img.src = imagenes[0];
        count = 0;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector(".contenedor");
  carrusel(contenedor);
});
