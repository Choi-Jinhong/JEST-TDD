const productController = require("../../controller/products");
const productModel = require("../../models/Products");

productModel.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call productModel.create", () => {
    productController.createProduct();
    expect(productModel.create).toBeCalled();
  });
});
