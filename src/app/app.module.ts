import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterVoterComponent } from './components/register-voter/register-voter.component';
import { ElectionResultComponent } from './components/election-result/election-result.component';

@NgModule({
  declarations: [AppComponent, RegisterVoterComponent, ElectionResultComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
