<template>
  <section class="contact-view container py-4">
    <header class="mb-4">
      <h1 class="section-title">Contáctame</h1>
      <p class="section-copy">Si quieres conversar sobre frontend, un portafolio o una colaboración, puedes escribirme
        por correo o revisar mis perfiles.</p>
    </header>

    <div class="row g-3">
      <div class="col-12 col-md-4">
        <article class="contact-card h-100">
          <h2>Correo</h2>
          <a href="mailto:ayelen.sl@gmail.com">ayelen.sl@gmail.com</a>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="contact-card h-100">
          <h2>GitHub</h2>
          <a href="https://github.com/amymey21" target="_blank" rel="noopener noreferrer">github.com/amymey21</a>
        </article>
      </div>

      <div class="col-12 col-md-4">
        <article class="contact-card h-100">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/missayesilva/" target="_blank"
            rel="noopener noreferrer">linkedin.com/in/missayesilva/</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  color: #100a31;
  font-size: 2rem;
}

.section-copy {
  color: #445;
  max-width: 48rem;
}

.contact-card {
  background: #f7f9fc;
  border: 1px solid #d7e4f2;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 10px 24px rgba(16, 10, 49, 0.06);
}

.contact-card h2 {
  color: #100a31;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.contact-card a {
  color: #0a8aa0;
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}
</style>