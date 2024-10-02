import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { taskReducer } from './store/task/task.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store/task/task.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    StoreModule.forFeature('tasks', taskReducer),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]), 
    EffectsModule.forFeature([TaskEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
