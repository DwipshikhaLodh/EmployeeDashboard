import { Routes } from '@angular/router';
import { MainLayout } from './layout/main/main-layout.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home.component').then((m) => m.HomePage)
            },
            {
                path: 'employees',
                loadComponent: () => import('./features/employees/employees.component').then((m) => m.EmployeesPage)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
