import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements AfterContentInit{

  ngAfterContentInit(){
    this.paragraphEl.nativeElement.textContent = 'This is new paragraph value.'
    console.log(this.paragraphEl.nativeElement.textContent);
  }
  // If you want to change value of this paragraph element
//  you can do that inside this ngAfterContentInit LifecycleHook

@ContentChild('paragraph') paragraphEl!: ElementRef;

}

//We Use @ContentChild decorator to access html elements,components or directives from
// ViewTemplate of the Parent Component in Child Component
