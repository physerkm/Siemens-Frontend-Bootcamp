class Product {
    id: number;
    name: string;
    price: number;
    
    constructor(id: number, name:string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ProductRepository implements IProductRepository{
    GetAll(): Product[] {

        // SQL Server
        let productList: Product[] = [];
        productList.push(new Product(1, "Pencil 1", 100))
        productList.push(new Product(2, "Pencil 2", 200))
        productList.push(new Product(3, "Pencil 3", 300))
        return productList;
    }
}

class ProductRepositoryWithOracle implements IProductRepository {
    GetAll(): Product[] {
        // SQL Server
        let productList: Product[] = [];
        productList.push(new Product(1, "Oracle pencil 1", 100))
        productList.push(new Product(1, "Oracle pencil 2", 100))
        productList.push(new Product(1, "Oracle pencil 3", 100))
        return productList
    }
}

interface IProductRepository {
    GetAll(): Product[];
}

class ProductService {
    private _productRepository: IProductRepository
    readonly _kdv: number = 1.19;
    constructor(productRepository:IProductRepository) {
        this._productRepository = productRepository;
    }
    GetAll(): Product[] {
        let newProductList: Product[] = [];
        this._productRepository.GetAll().forEach(x => {
            newProductList.push(new Product(x.id, x.name, x.price * this._kdv));
        })
        return newProductList;
    }
}

class ProductFactory {
    public CreateRepository(): IProductRepository {
        return new ProductRepository();
    }
    public CreateRepositoryWithOracle():IProductRepository {
        return new ProductRepositoryWithOracle();
    }
}

var ProductService = new ProductService(new ProductFactory().CreateRepository());
ProductService.GetAll().forEach(x => {
    console.log(`${x.id} ${x.name} ${x.price}`)
})