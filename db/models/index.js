const {User, userSchema} = require('./user.model')
const {Customer, customerSchema} = require('./customer.model')
const {Category, CategorySchema} = require('./category.model')
const {Product, ProductSchema} = require('./product.model')
const {Order, OrderSchema} = require('./order.model')
const {OrderProduct, OrderProductSchema} = require('./order-product.model')

function setupModels(sequelize){
  User.init(userSchema,User.config(sequelize))
  Customer.init(customerSchema,Customer.config(sequelize))
  Category.init(CategorySchema,Category.config(sequelize))
  Product.init(ProductSchema,Product.config(sequelize))
  Order.init(OrderSchema,Order.config(sequelize))
  OrderProduct.init(OrderProductSchema,OrderProduct.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
  Order.associate(sequelize.models)
}

module.exports = setupModels
