import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceComponent } from './appliance/appliance.component';
import { FamiliesComponent } from './families/families.component';

export const CatalogosRoutes: Routes = [{
  path: '',
  children: [ {
      path: 'catalogs/families',
      component: FamiliesComponent
  },{
    path: 'catalogs/appliance',
    component: ApplianceComponent
  }]
}]; 

