import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './github-followers.service';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, BaseRequestOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ArchiveComponent } from './archive/archive.component';

import { OrderService } from './services/order.service';
import { TodosComponent } from './todos/todos.component';
import { DatedemoComponent } from './course/datedemo/datedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent, AuthorsComponent,
    SummaryPipe,
    TitleCasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    TodosComponent,
    ZippyComponent,
    DatedemoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'archive/:year/:month', component: ArchiveComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    RouterModule.forRoot([
      {path: '', component: DatedemoComponent},
      {path: 'archive/:year/:month', component: NotFoundComponent}
    ])
    // RouterModule.forRoot([
    //   { path:'', component: HomeComponent },
    //   { path:'followers/:id/:username', component: GithubProfileComponent },
    //   { path:'followers', component: GithubFollowersComponent },     
    //   { path:'posts', component: PostComponent },
    //   { path:'**', component: NotFoundComponent },
    // ]),
    // RouterModule.forRoot([
    //   {path:'', component: HomeComponent},
    //   {path:'admin', component: AdminComponent},
    //   {path:'login', component: LoginComponent},
    //   {path:'no-access', component: NoAccessComponent},
    // ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,   
    {provide: ErrorHandler, useClass : AppErrorHandler},
    OrderService,
    AuthorsService,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
