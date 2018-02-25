import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './SearchService';
import { PaginationService } from './PaginationService';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { RetrieveGiphyComponent } from './components/retrieve-giphy/retrieve-giphy.component';


const ROUTES: Routes = [
  { path: "",component: SearchComponent},
  { path: "search",component: SearchComponent},
  { path: "retrieve", component: RetrieveGiphyComponent},
  { path: "**", redirectTo:'/',pathMatch:'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    RetrieveGiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ SearchService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
