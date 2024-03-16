<script setup>
import { RouterView } from 'vue-router'

function handleNavbarModal() {
    let burger = document.querySelector(`#burger`);
    let menu = document.querySelector('.navbar-menu')
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
}
</script>

<template>
  <div class="layout">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item link" to="/"><b>Jet Lag: In Toronto</b></router-link>
        <a role="button" class="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" @click="handleNavbarModal()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <span class="navbar-item">
            <p><b>Tokens:</b> 5</p>
          </span>
          <span class="navbar-item">
            <p><b>Number of Districts:</b> 5</p>
          </span>
        </div>
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

.link {
  display: inline-flex;
  align-items: center;
  color: black;
}
</style>