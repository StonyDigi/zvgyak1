import { Routes } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';

export const routes: Routes = [
    { path: 'feladat', component: FeladatComponent },
    { path: '', redirectTo: '/feladat', pathMatch: 'full' },
    { path: '**', redirectTo: '/feladat', pathMatch: 'full' }
];
