import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PremuimPagesComponent } from './premuim-pages/premuim-pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StartPageComponent, title: 'First' },
  { path: 'premuim', component: PremuimPagesComponent, title: 'PremuimPAGE' },
  {
    path: 'details',
    loadChildren: () =>
      import('./datils-page/datils-page.module').then(
        (m) => m.DatilsPageModule
      ),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
