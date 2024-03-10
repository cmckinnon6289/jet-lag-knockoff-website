<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <b>Jet Lag: In Toronto</b>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <header>
      <div class="wrapper">
        
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
nav {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  padding: 16px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}
</style>