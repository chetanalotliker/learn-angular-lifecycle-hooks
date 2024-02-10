import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() myCounter!: number;
  @Input() secondValue: number;
  @Input() numbers!: number[];

  public changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

    for (const propName in changes) {
      const change: SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      this.changeLog.push(
        `ngOnChanges ${propName}: 
        currentValue = ${current}, 
        previousValue = ${previous},
        firstChange = ${change.firstChange}
        `
      )
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.changeLog.push('ngOnInit')
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    this.changeLog.push(`ngDoCheck: ${this.numbers.toString()}`);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    this.changeLog.push(`ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    this.changeLog.push(`ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    this.changeLog.push(`ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    this.changeLog.push(`ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.changeLog.push(`ngOnDestroy`);
  }
}
