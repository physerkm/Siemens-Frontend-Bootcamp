interface IProductRepository{}

interface IReadProductRepository {
    getAll();
    getById(id:number);
}

interface IWriteProductRepository {
    save(data:string): any;
    uptdate(data:string): any;
    delete(id:number): any;
}

class ProductRepository implements IReadProductRepository,IWriteProductRepository {
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: string) {
        throw new Error("Method not implemented.");
    }
    uptdate(data: string) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
}