// There should never be more than one reason for a class to change
// (Robert C. Martin)

namespace srp {
    class ProductRepository{
        productList: Product[] = [];
        add (product: Product) {
            this.productList.push(product);
        }
        remove (id: number) {
            // this.productList.slice()
        }
        update (product: Product) {}
    }
    
    class ProductPresenter {
        writeToConsole(productList: Product[]) {
            productList.forEach(x => {
                console.log(x);
            })
        }
    }    
    
    class Product {
        id: number;
        name: string;
    }
}

