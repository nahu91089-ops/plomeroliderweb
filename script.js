/* --------------------------------------------
   TESTIMONIOS ROTATIVOS
--------------------------------------------- */

const testimonialsData = [
  {
    text: "Cambió una mochila de inodoro y quedó funcionando perfecto. Rápido y prolijo.",
    author: "Patricia (Saavedra)"
  },
  {
    text: "Tenía olor a gas, vino un domingo y lo resolvió en poco tiempo.",
    author: "Martín (Núñez)"
  },
  {
    text: "Instaló el termotanque nuevo, dejó todo limpio y funcionando.",
    author: "Lorena (Belgrano)"
  },
  {
    text: "Muy buena atención, me explicó todo por WhatsApp antes de venir.",
    author: "Valeria (Coghlan)"
  },
  {
    text: "Trabajo impecable, solucionó la presión baja en la ducha.",
    author: "Ana (Villa Urquiza)"
  },
  {
    text: "Revisó una pérdida de gas y la arregló sin romper de más. Muy profesional.",
    author: "Gustavo (Vicente López)"
  },
  {
    text: "Rápido, honesto y buen precio. Lo volvería a llamar.",
    author: "Julián (Florida)"
  },
  {
    text: "Arregló el calefón y me enseñó cómo mantenerlo. Excelente servicio.",
    author: "Camila (Pueyrredón)"
  },
  {
    text: "Cambió una grifería difícil sin romper cerámicas. Un capo.",
    author: "Hernán (Palermo)"
  },
  {
    text: "Me resolvió una humedad complicada que otros no podían. Re contra recomendable.",
    author: "Diego (Olivos)"
  }
];

let currentIndex = 0;
const textEl = document.getElementById("testimonial-text");
const authorEl = document.getElementById("testimonial-author");

function showTestimonial() {
  const t = testimonialsData[currentIndex];

  // efecto fade
  textEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = `“${t.text}”`;
    authorEl.textContent = `— ${t.author}`;

    textEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);

  currentIndex = (currentIndex + 1) % testimonialsData.length;
}

showTestimonial();
setInterval(showTestimonial, 5000);


/* --------------------------------------------
   AÑO AUTOMÁTICO EN EL FOOTER
--------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
