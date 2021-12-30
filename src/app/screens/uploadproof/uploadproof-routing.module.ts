import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadproofPage } from './uploadproof.page';

const routes: Routes = [
  {
    path: '',
    component: UploadproofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadproofPageRoutingModule {}
