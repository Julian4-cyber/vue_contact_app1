<template>
  
<nav class="navbar fixed-top bg-body-tertiary" style="background-color: blue;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Gallery</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Contact</a>
  </li>
</ul>
  </div>

</nav>

</template>

<script setup>
    const props = defineProps({
        title: String,
        required: true
    })
</script>