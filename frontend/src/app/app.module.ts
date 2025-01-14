import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { CompanySelectComponent } from './company-select/company-select.component';
import { CompanyService } from './services/company.service';
import { EditProjectComponent } from './teams/projects/edit-project/edit-project.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './teams/projects/projects.component';
import { UsersComponent } from './users/users.component';
import { AnnouncementCardComponent } from './announcements/announcement-card/announcement-card.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { AddProjectComponent } from './teams/projects/add-project/add-project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddAnnouncementComponent } from './announcements/add-announcement/add-announcement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAnnouncementComponent } from './announcements/edit-announcement/edit-announcement.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { LoadingComponent } from './loading/loading.component';





const routes: Routes = [ 
  { path: "announcements", component: AnnouncementsComponent},
  { path: "edit-project", component: EditProjectComponent},
  { path: "company-select", component: CompanySelectComponent},
  { path: "add-user", component: AddUserComponent},
  { path: 'edit-user', component: EditUserComponent},
  { path: 'edit-user/:userId', component: EditUserComponent },
  { path: "add-announcement", component: AddAnnouncementComponent},
  { path: 'edit-announcement', component: EditAnnouncementComponent },
  { path: 'edit-announcement/:announcement', component: EditAnnouncementComponent },  
  { path: "login", component: LoginComponent},
  { path: "teams", component: TeamsComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "add-team", component: AddTeamComponent},
  { path: "edit-team", component: EditTeamComponent},
  { path: "edit-team/:teamToEdit", component: EditTeamComponent},
  { path: "add-project", component: AddProjectComponent},
  { path: 'add-project/:teamId', component: AddProjectComponent },
  { path: 'projects/:teamId', component: ProjectsComponent },
  { path: "users", component: UsersComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanySelectComponent,
    AddUserComponent,
    EditProjectComponent,
    AnnouncementsComponent,
    NavbarComponent,
    TeamsComponent,
    ProjectsComponent,
    UsersComponent,
    AnnouncementCardComponent,
    TeamCardComponent,
    AddTeamComponent,
    AddProjectComponent,
    PageNotFoundComponent,
    AddAnnouncementComponent,
    EditAnnouncementComponent,
    EditTeamComponent,
    EditUserComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [AuthService, CompanyService],
  bootstrap: [AppComponent]
})




export class AppModule { 


}