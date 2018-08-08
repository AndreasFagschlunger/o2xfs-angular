import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryXfsManager, XfsInMemoryModule } from 'xfs';

export class TestXfsManager implements InMemoryXfsManager {

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XfsInMemoryModule.forRoot(TestXfsManager)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
