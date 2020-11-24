import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  setActiveCounter = 0;
  setInactiveCounter = 0;

  addSetActive(): number {
    this.setActiveCounter++;
    this.logCounters();
    return this.setActiveCounter;
  }
  addSetInactive(): number {
    this.setInactiveCounter++;
    this.logCounters();
    return this.setInactiveCounter;
  }
  logCounters(): void {
    console.log('Active to Inactive: ' + this.setInactiveCounter + ' - Inactive to Active: ' + this.setActiveCounter);
  }
}
