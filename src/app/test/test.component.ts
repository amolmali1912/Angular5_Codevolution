import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input type="text" [id]="myId" value="Vishwas" />
    <input type="text" class="{{myClass}}" value="Vishwas" bind-disabled="true" />
    <h2 [class.danger]="hasError">Codevolution</h2>
    <h2 [ngClass]="multipleClasses">Codevolution</h2>
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [ngStyle]='multiStyle'>using ngStyle</h2>

    <input type="text" [(ngModel)]="twoWayProp" placeholder="Enter something" />
    {{twoWayProp}}

    <div *ngIf = "visible">shown</div>
    <div *ngIf = "!visible">Hidden</div>

    <br/>
    <div *ngIf = "visible; else elseBlock">shown</div>
    <ng-template #elseBlock>Else Block</ng-template>

    <br/>
    <div *ngIf = "visible; then thenBlock; else elseBlock2"></div>
    <ng-template #thenBlock>Then Block</ng-template> 
    <ng-template #elseBlock2>Else2 Block</ng-template>
    <p>Display array elements alongwith index nos.</p>
    <div *ngFor = "let color of colors; index as i">{{ i }}: {{ color }}</div>
    <p>Display array elements alongwith element is first element or not</p>
    <div *ngFor = "let color of colors; first as f">{{ f }}: {{ color }}</div>
    <p>Display array elements alongwith element is last element or not</p>
    <div *ngFor = "let color of colors; last as l">{{ l }}: {{ color }}</div>
    <p>Display array elements checking element is odd element or not</p>
    <div *ngFor = "let color of colors; odd as o">{{ o }}: {{ color }}</div>
    <p>Display array elements alongwith element is even element or not</p>
    <div *ngFor = "let color of colors; even as e">{{ e }}: {{ color }}</div>
    <h3>Component Interaction</h3>
    <h4>From Parent to Child:</h4>
    <div>{{ parentData }}</div>
    <br/>
    <h4>From Child to Parent:</h4>
    <button (click)="sendToParent()">Click Me</button>
    <br/>
    <h2>Pipes:</h2>
    
    <h3>String Pipes:</h3>
    {{ pipeProp }}<br/>
    {{ pipeProp | lowercase }}<br/>
    {{ pipeProp | uppercase }}<br/>
    {{ message | titlecase }}<br/>
    {{ message | slice : 3 }}<br/>  
    {{ message | slice : 3 : 7 }}<br/> 
    {{ person | json }}<br/> 
    
    <h3>Number Pipes:</h3>
    {{ 5.678 | number : '1.2-3' }}<br/> 
    {{ 5.678 | number: "3.4-5" }}<br/> 
    {{ 5.678 | number: '3.1-2' }}<br/> 
    
    <h3>Percent Pipe:</h3>
    <p>{{ 0.25 | percent }}</p>

    <h3>Currency Pipe:</h3>
    <p>{{ 0.25 | currency }}</p>
    <p>{{ 0.25 | currency : 'GBP'}}</p>
    <p>{{ 0.25 | currency : 'GBP': 'code' }}</p>
    <p>{{ 0.25 | currency : 'Rs.'}}</p>

    <h3>Date Pipes:</h3>
    <p>date pipe with date: {{ date | date }}</p>
    <p>date pipe with short: {{ date | date : 'short'}}</p>
    <p>date pipe with shortDate: {{ date | date : 'shortDate'}}</p>
    <p>date pipe with shortTime: {{ date | date : 'shortTime'}}</p>
    <p>date pipe with long: {{ date | date : 'long'}}</p>
    <p>date pipe with longDate: {{ date | date : 'longDate'}}</p>
  `,
  styles: [`
    .success {
      color: green;
    }

    .danger {
      color: red;
    }

    .special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public myId = "dynamicId";
  public myClass = "dynamicClass"
  public hasError = true;
  public special = true;

  public multipleClasses = {
    'success': !this.hasError,
    'danger': this.hasError,
    'special': this.special
  }

  public multiStyle = {
    'color': 'green',
    fontStyle: 'italic',

  }

  public visible = true;
  public colors = ['red', 'green', 'blue', 'black'];
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  childProp = 'Hi All';
  pipeProp = "Amol";
  message = "Welcome to codevolution";

  person = {
    'firstName' : "John",
    'lastName' : 'Doe'
  }
  
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.childEvent.emit(this.childProp);
  }

}
