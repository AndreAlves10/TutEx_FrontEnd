import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomepageComponent } from './Components/homepage/homepage.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
