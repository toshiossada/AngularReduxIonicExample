import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ProductModel } from './models/product.model'

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public url = 'http://localhost:3000/v1'

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<ProductModel[]>(`${this.url}/products`);
    }
}