import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { DirectivesModule } from './directives/directives.module';
import { TooltipComponent } from './tooltip/tooltip.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DirectivesModule
  ],
  exports: [
    ButtonModule,
    DirectivesModule,
  ]
})
export class SharedModule { }
