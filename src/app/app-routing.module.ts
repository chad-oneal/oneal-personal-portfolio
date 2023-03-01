import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { DatabaseDiagramsComponent } from './database-diagrams/database-diagrams.component';
import { ApiUnitTestsComponent } from './api-unit-tests/api-unit-tests.component';
import { PresentationsComponent } from './presentations/presentations.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

},
{
    path: "about",
    component: AboutComponent
},
{
  path: "resume",
  component: ResumeComponent
},
{
  path: "projects",
  component: ProjectsComponent
},
{
  path: "database-diagrams",
  component: DatabaseDiagramsComponent
},
{
  path: "api-unit-tests",
  component: ApiUnitTestsComponent
},
{
  path: "presentations",
  component: PresentationsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
