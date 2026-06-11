<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Contacto</h2>
          <hr class="w-25 mx-auto border-info" style="border-width: 3px; opacity: 1;">
        </div>
        
        <form>
          <div class="mb-4">
            <label for="nombre" class="form-label text-muted fw-bold">Nombre</label>
            <input type="text" class="form-control bg-light border-0 shadow-sm py-2" id="nombre">
          </div>
          <div class="mb-4">
            <label for="email" class="form-label text-muted fw-bold">Email</label>
            <input type="email" class="form-control bg-light border-0 shadow-sm py-2" id="email">
          </div>
          <div class="mb-4">
            <label for="mensaje" class="form-label text-muted fw-bold">Mensaje</label>
            <textarea class="form-control bg-light border-0 shadow-sm" id="mensaje" rows="5"></textarea>
          </div>
          <div class="text-center mt-5">
            <button type="submit" class="btn btn-dark px-5 py-2">Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>