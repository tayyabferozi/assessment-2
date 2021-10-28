const Product = require("./model");

exports.getAllProducts = (req, res) => {
  Product.find()
    .then((foundProds) => {
      res.json({ prods: foundProds });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  Product.create({ name, price })
    .then((createdProd) => {
      res.json({ msg: "Product created successfully", product: createdProd });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(404).json({ msg: "Product not found" });
      }

      res.json({ product: deletedProduct });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "Something went wrong" });
    });
};
