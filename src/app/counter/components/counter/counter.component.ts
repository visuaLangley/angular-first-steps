import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
            <hr>
            <h3>Counter: {{counter}} </h3>
            <button (click)="increaseBy(+1)">+1</button>
            <button (click)="reset(10)"> Reset</button>
            <button (click)="decreaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
  counter : number = 10;
  increaseBy(value : number) : void{
    this.counter += 1;
  }
  reset(value : number) : void{
    this.counter = 10;
  }
  decreaseBy(value : number): void{
    this.counter -= 1;
    if(this.counter < 0){
      this.counter = 0;
    }
  }

}
