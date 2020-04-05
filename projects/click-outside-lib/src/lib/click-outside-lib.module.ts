import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from './click-outside-directive';

const declarations = [
    ClickOutsideDirective
];

@NgModule({
  declarations,
  imports: [
  ],
  exports: declarations
})
export class ClickOutsideLibModule { }
