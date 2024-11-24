import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { VipClientsComponent } from './vip-clients/vip-clients.component';
import { PrivacySecurityComponent } from './privacy-security/privacy-security.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'add-client', component: ClientFormComponent },
  { path: 'edit-client/:id', component: ClientFormComponent },
  { path: 'search', component: ClientSearchComponent },
  { path: 'vip-clients', component: VipClientsComponent },
  { path: 'privacy-security', component: PrivacySecurityComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
