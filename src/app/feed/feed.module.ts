import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule, 
    IonicModule, 
    RouterModule
  ], 
  exports: [FeedComponent]
})
export class FeedModule { }
