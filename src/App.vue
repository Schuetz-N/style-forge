<script setup lang="ts">
import ControlPanel from "@/components/ControlPanel.vue";
</script>

<template>
  <main class="app-container">
    <div class="sidebar">
      <ControlPanel/>
    </div>

    <div class="preview-area">
      <h1 class="placeholder-text">Preview...<br>Work in progress</h1>
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #121212;
  color: white;
}

.app-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.preview-area {
  background: #252530;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #383844;
}

.placeholder-text {
  text-align: center;
  color: #505060;
}
</style>
