/* --------------------------------------------
   TESTIMONIOS ROTATIVOS (Reseñas Google reales)
--------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const testimonialsData = [
    { text: "Un genio total, me solucionó todo lo que Aysa no quiso hacer...rápido, honesto, prolijo, recpmendable 100%", author: "Marcela de Laurentiis ⭐⭐⭐⭐⭐" },
    { text: "Vinieron a arreglar un calefón. Pidieron fotos para estimar costos, pasaron presupuesto. Trabajo muy bien y prolijo. Quedamos super conformes!", author: "Agustina Scarafia ⭐⭐⭐⭐⭐" },
    { text: "Muy buena atención, puntual, realizaron un excelente trabajo.", author: "Patricia Ruiz ⭐⭐⭐⭐⭐" },
    { text: "Hizo cambio de termotanque eléctrico, excelente trabajo, muy prolijo. Buenas recomendaciones, ya se lo recomendé a una amiga!", author: "Sussy Rossi ⭐⭐⭐⭐⭐" },
    { text: "Desde el primer contacto demostró profesionalismo y puntualidad. Evaluó el problema con rapidez y ofreció soluciones claras. Trabajo impecable, dejó todo limpio. Es un plomero de confianza, honesto y muy recomendable.", author: "Rosario Castells ⭐⭐⭐⭐⭐" }
  ];

  const textEl = document.getElementById("testimonial-text");
  const authorEl = document.getElementById("testimonial-author");

  let currentIndex = 0;

  function showTestimonial() {
    if (!textEl || !authorEl) return;

    const t = testimonialsData[currentIndex];

    textEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(() => {
      textEl.textContent = `"${t.text}"`;
      authorEl.textContent = `— ${t.author}`;
      textEl.style.opacity = 1;
      authorEl.style.opacity = 1;
    }, 200);

    currentIndex = (currentIndex + 1) % testimonialsData.length;
  }

  showTestimonial();
  setInterval(showTestimonial, 6000);

  /* Año automático */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
