import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { BeerStylePipe } from './beerStyle.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  NewKegComponent,
                  BeerStylePipe],
  bootstrap: [AppComponent]
})

export class AppModule {}
