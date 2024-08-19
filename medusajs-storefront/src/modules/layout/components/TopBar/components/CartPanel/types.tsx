export interface Product {
    name: string;
    price: number;
    quantity?: number;
}

export interface CartPanelProps {
    active: boolean;
    products: Array<Product>
}