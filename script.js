/* --------------------------------------------
   TESTIMONIOS ROTATIVOS (con guardas)
--------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const testimonialsData = [
    { text: "Cambió una mochila de inodoro y quedó funcionando perfecto. Rápido y prolijo.", author: "Patricia (Saavedra)" },
    { text: "Tenía olor a gas, vino un domingo y lo resolvió en poco tiempo.", author: "Martín (Núñez)" },
    { text: "Instaló el termotanque nuevo, dejó todo limpio y funcionando.", author: "Lorena (Belgrano)" },
    { text: "Muy buena atención, me explicó todo por WhatsApp antes de venir.", author: "Valeria (Coghlan)" },
    { text: "Trabajo impecable, solucionó la presión baja en la ducha.", author: "Ana (Villa Urquiza)" },
    { text: "Revisó una pérdida de gas y la arregló. Muy profesional.", author: "Gustavo (Vicente López)" }
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
      textEl.textContent = `“${t.text}”`;
      authorEl.textContent = `— ${t.author}`;
      textEl.style.opacity = 1;
      authorEl.style.opacity = 1;
    }, 200);

    currentIndex = (currentIndex + 1) % testimonialsData.length;
  }

  showTestimonial();
  setInterval(showTestimonial, 5000);

  /* Año automático */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
