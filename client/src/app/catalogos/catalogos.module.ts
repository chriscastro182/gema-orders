import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { FamiliesComponent } from './families/families.component';
import { ApplianceComponent } from './appliance/appliance.component';


@NgModule({
  declarations: [
    FamiliesComponent,
    ApplianceComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
