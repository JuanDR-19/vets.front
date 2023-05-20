import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistersComponent } from './registers/registers.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:'', component: MainMenuComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'reg', component: RegistersComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
