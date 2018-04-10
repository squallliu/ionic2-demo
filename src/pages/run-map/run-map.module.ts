import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunMapPage } from './run-map';

@NgModule({
  declarations: [
    RunMapPage,
  ],
  imports: [
    IonicPageModule.forChild(RunMapPage),
  ],
})
export class RunMapPageModule {}
