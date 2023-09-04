import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FamiliesComponent } from './families/families.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { FormsModule } from '@angular/forms';
import { CatalogosRoutes } from './catalogos-routing.module';

@NgModule({
  declarations: [
    FamiliesComponent,
    ApplianceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CatalogosRoutes),
  ]
})
export class CatalogosModule { }
