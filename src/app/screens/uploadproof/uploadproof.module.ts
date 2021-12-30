import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadproofPageRoutingModule } from './uploadproof-routing.module';

import { UploadproofPage } from './uploadproof.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadproofPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UploadproofPage],
})
export class UploadproofPageModule {}
