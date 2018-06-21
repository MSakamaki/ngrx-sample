import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './main.effects';
import { BackendModule } from 'backend';


@NgModule({
  imports: [
    BackendModule,
    CommonModule,
    StoreModule.forFeature('main', fromMain.reducers, { metaReducers: fromMain.metaReducers }),
    EffectsModule.forFeature([MainEffects])
  ],
  declarations: []
})
export class CoreDataModule { }
