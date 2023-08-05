import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersRoutes } from './others.routing';


@NgModule({
  imports: [RouterModule.forChild(OthersRoutes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
