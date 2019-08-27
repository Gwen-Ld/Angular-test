import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchensinkRoutingModule } from './kitchensink-routing.module';
import { KitchensinkComponent } from './kitchensink.component';

@NgModule({
  declarations: [KitchensinkComponent],
  imports: [
    CommonModule,
    KitchensinkRoutingModule
  ]
})
export class KitchensinkModule { }
