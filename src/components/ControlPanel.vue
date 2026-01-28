<script setup lang="ts">
import {useFlexStore} from '../stores/useFlexStore';
import {flexValues, labels} from '../constants/flexValues';

const store = useFlexStore();

const getId = (key: string) => `control-${key}`;
</script>

<template>
  <aside class="control-panel">
    <header>
      <h2>Generator</h2>
      <p class="subtitle">Configuration</p>
    </header>

    <div class="controls-grid">
      <div
        v-for="(options, key) in flexValues"
        :key="key"
        class="control-group"
      >
        <label :for="getId(key)">
          {{ labels[key] || key }}
        </label>

        <div class="select-wrapper">
          <select
            :id="getId(key)"
            v-model="store.options[key as keyof typeof store.options]"
          >
            <option v-for="opt in options" :key="opt" :value="opt">
              {{ opt }}
            </option>
          </select>
        </div>
      </div>

      <div class="control-group full-width">
        <div class="label-row">
          <label for="control-gap">Gap</label>
          <span class="value-badge">{{ store.options.gap }}px</span>
        </div>

        <input
          id="control-gap"
          type="range"
          min="0"
          max="50"
          step="1"
          v-model.number="store.options.gap"
          class="custom-range"
        />
      </div>
    </div>

    <footer>
      <button class="reset-btn" @click="store.reset()">
        Reset
      </button>
    </footer>
  </aside>
</template>

<style scoped>
.control-panel {
  --bg-panel: #1e1e24;
  --text-main: #ffffff;
  --text-muted: #a0a0a0;
  --accent: #4cc9f0;
  --accent-hover: #3a9dc0;
  --input-bg: #2b2b36;
  --border: #383844;

  background-color: var(--bg-panel);
  color: var(--text-main);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Segoe UI', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.subtitle {
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.controls-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.select-wrapper {
  position: relative;
}

select {
  width: 100%;
  background-color: var(--input-bg);
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 0.75rem;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

select:hover, select:focus {
  border-color: var(--accent);
  outline: none;
  background-color: #323240;
}

.select-wrapper::after {
  content: '▼';
  font-size: 0.7rem;
  color: var(--text-muted);
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.value-badge {
  background: var(--accent);
  color: #000;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

.custom-range {
  width: 100%;
  height: 6px;
  background: var(--input-bg);
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: var(--accent);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.1s;
}

.custom-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

/* Button */
.reset-btn {
  margin-top: auto;
  width: 100%;
  padding: 0.8rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.reset-btn:hover {
  border-color: #ff6b6b;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.05);
}
</style>
