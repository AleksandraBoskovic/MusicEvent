import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matf-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {

  slike = ['prva','druga','treca'];


  selected : String = 'prva';

  constructor() {

   }

 setValue(people: string): void {
    this.selected = people;
  }

  ngOnInit() {
    this.definingVariables();
    this.basicTypes();
    this.classes();
  }

  definingVariables(): void {
    var a = 3;
    if (true) {
      var a = 5;
    }
    console.log('a is ' + a);

    let b = 3;
    if (true) {
      let b = 5;
    }
    console.log('b is ' + b);

    const c = 3;
    if (true) {
      const c = 5;
    }
    console.log('c is ' + c);
  }

  basicTypes(): void {
    let n: number = 3;
    let s: string = 'Hello World!';
    let b: boolean = true;
    let a: Array<number> = [1, 2, 3];
    let a1: number[] = [1, 2, 3];
    let x: any;
    let y: number | boolean;
    let z = [ 1, false, 5, 4, 'foo' ];
  }

  classes(): void {
    let musashi = new Person('Musashi', 'Miyamoto', 61);
    console.log(musashi.hello());
  }
}

class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number
  ) {}

  public hello(): string {
    return `Hello, my name is ${this.name} ${this.lastName}.`;
  }
}
