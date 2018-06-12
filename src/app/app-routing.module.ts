import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReferenceListComponent} from './reference-list/reference-list.component';


const routes: Routes = [
  { path: 'reference-list', component: ReferenceListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ]
})
export class AppRoutingModule { }
