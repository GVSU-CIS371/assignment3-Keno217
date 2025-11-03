<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <strong>Temperature:</strong>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Base:</strong>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Creamer:</strong>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <strong>Syrup:</strong>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <div style="margin-top: 10px">
      <label>
        <strong>Name:</strong>
        <input
          type="text"
          placeholder="Beverage Name"
          v-model="beverageStore.currentBeverageName"
        />
      </label>
      <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
    </div>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <div v-if="beverageStore.savedBeverages.length > 0">
      <strong>Saved Beverages:</strong>
      <ul>
        <li v-for="beverage in beverageStore.savedBeverages" :key="beverage.id">
          <label>
            <input
              type="radio"
              name="saved-beverage"
              :value="beverage.id"
              @change="beverageStore.showBeverage(beverage.id)"
            />
            {{ beverage.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from './components/Beverage.vue';
import { useBeverageStore } from './stores/beverageStore';
const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
