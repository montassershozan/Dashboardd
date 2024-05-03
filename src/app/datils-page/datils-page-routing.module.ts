import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecPageComponent } from './secpage/secpage.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/second', pathMatch: 'full' },
  { path: 'second/:userid', component: SecPageComponent, title: 'second' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatilsPageRoutingModule {}
