import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FeatureRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class FeatureModule { }
