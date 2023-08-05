import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { QueryKkc01Component } from "./query-kkc01/query-kkc01.component";
import { Kkc01P01Component } from "./query-kkc01/kkc01-p01/kkc01-p01.component";

export const OthersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'home', breadcrumb: 'home' }
      },
      {
        path: 'queryKkc01',
        component: QueryKkc01Component,
        data: { title: 'queryKkc01', breadcrumb: 'queryKkc01' }
      },
      {
        path: 'kkc01P01',
        component: Kkc01P01Component,
        data: { title: 'kkc01P01', breadcrumb: 'kkc01P01' }
      },
    ]
  },
]
