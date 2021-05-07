import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTechnologiesComponent } from './home-technologies/home-technologies.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HomeEducationComponent } from './home-education/home-education.component';
import { BackendService } from './backend.service';
import 'hammerjs';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { CarouselCommentComponent } from './carousel-comment/carousel-comment.component';
import { HeaderComponent } from './header/header.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTechnologiesComponent,
    HomeIntroComponent,
    HomePersonalComponent,
    HomeEducationComponent,
    HomeCommentsComponent,
    CarouselCommentComponent,
    HeaderComponent,
    PageHomeComponent,
    PageContactComponent,
    ModalErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NguCarouselModule,
    NgbModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
