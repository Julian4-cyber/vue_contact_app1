<template>
<nav class="navbar fixed-top bg-body-tertiary" style="background-color: blue;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/gallery">Gallery</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link>
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