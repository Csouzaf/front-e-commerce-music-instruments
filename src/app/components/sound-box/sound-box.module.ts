import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseSoundBoxComponent } from './purchase-sound-box/purchase-sound-box.component';
import { SoundBoxComponent } from './sound-box.component';
import { soundBoxRoutes } from './sound-box.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PurchaseSoundBoxFormComponent } from './purchase-sound-box-form/purchase-sound-box-form.component';



@NgModule({
  declarations: [
    SoundBoxComponent, PurchaseSoundBoxComponent, PurchaseSoundBoxFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(soundBoxRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SoundBoxModule { }
