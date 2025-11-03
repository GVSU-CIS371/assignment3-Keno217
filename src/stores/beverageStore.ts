import { defineStore } from 'pinia';
import tempretures from '../data/tempretures.json';
import bases from '../data/bases.json';
import creamers from '../data/creamers.json';
import syrups from '../data/syrups.json';
import type {
  BeverageType,
  BaseBeverageType,
  CreamerType,
  SyrupType,
} from '../types/beverage';

export const useBeverageStore = defineStore('BeverageStore', {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases as BaseBeverageType[],
    creamers: creamers as CreamerType[],
    syrups: syrups as SyrupType[],
    currentBase: bases[0] as BaseBeverageType,
    currentCreamer: creamers[0] as CreamerType,
    currentSyrup: syrups[0] as SyrupType,
    savedBeverages: [] as BeverageType[],
    currentBeverageName: '',
    displayedBeverage: null as BeverageType | null,
  }),

  actions: {
    makeBeverage() {
      if (!this.currentBeverageName.trim()) {
        alert('Please enter a beverage name');
        return;
      }

      const newBeverage: BeverageType = {
        id: `bev_${Date.now()}`,
        name: this.currentBeverageName,
        temp: this.currentTemp,
        base: { ...this.currentBase },
        syrup: { ...this.currentSyrup },
        creamer: { ...this.currentCreamer },
      };

      this.savedBeverages.push(newBeverage);
      this.displayedBeverage = newBeverage;
      this.currentBeverageName = '';
    },

    showBeverage(beverageId: string) {
      const beverage = this.savedBeverages.find((b) => b.id === beverageId);
      if (beverage) {
        this.displayedBeverage = beverage;
        this.currentTemp = beverage.temp;
        this.currentBase = beverage.base;
        this.currentCreamer = beverage.creamer;
        this.currentSyrup = beverage.syrup;
      }
    },
  },
  persist: true,
});
