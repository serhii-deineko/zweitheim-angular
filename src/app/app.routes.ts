import { Routes } from '@angular/router';
import { ProductsComponent } from '@components/products/products.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: '**', component: PageNotFoundComponent },
];
