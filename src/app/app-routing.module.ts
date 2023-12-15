import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyRouteComponent,
  },
  {
    path: 'micro-ng',
    component: EmptyRouteComponent,
  },
  {
    path: 'micro-react',
    component: EmptyRouteComponent,
  },
  {
    path: 'micro-vue',
    component: EmptyRouteComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
