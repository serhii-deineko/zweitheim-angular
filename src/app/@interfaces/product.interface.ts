export interface Image {
    id: number;
    src: string;
    alt?: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    images: Image[];
}
