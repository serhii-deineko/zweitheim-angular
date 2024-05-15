import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Environment } from 'environment/environment';
import { Product } from '@interfaces/product.interface';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
    private api: WooCommerceRestApi;

    skeletons: any[] = new Array(8);
    products: Product[] = [];

    constructor() {
        this.api = new WooCommerceRestApi({
            url: Environment.woocommerce.url,
            consumerKey: Environment.woocommerce.consumerKey,
            consumerSecret: Environment.woocommerce.consumerSecret,
            version: 'wc/v3',
        });
        this.loadProducts();
    }

    async loadProducts(): Promise<void> {
        try {
            const response = await this.api.get('products', { per_page: 8 });
            this.products = await response.data;
        } catch (error) {
            console.error('Failed to load products', error);
        }
    }
}
