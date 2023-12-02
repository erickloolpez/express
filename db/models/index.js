const {Usuario, usuarioSchema} = require('./usario.model')
const {Carrito, carritoSchema} = require('./carrito.model')
const {ProductoItem, productoItemSchema} = require('./productoItem.model')
const {Producto, productoSchema} = require('./producto.model')
const {Categoria, categoriaSchema} = require('./categoria.model')
const {CarritoProducto, carritoProductoSchema} = require('./carrito-producto.model')

function setupModels(sequelize){
  Categoria.init(categoriaSchema,Categoria.config(sequelize))
  Producto.init(productoSchema,Producto.config(sequelize))
  ProductoItem.init(productoItemSchema,ProductoItem.config(sequelize))
  Usuario.init(usuarioSchema,Usuario.config(sequelize))
  Carrito.init(carritoSchema,Carrito.config(sequelize))
  CarritoProducto.init(carritoProductoSchema,CarritoProducto.config(sequelize))

  Categoria.associate(sequelize.models)
  Producto.associate(sequelize.models)
  Usuario.associate(sequelize.models)
  Carrito.associate(sequelize.models)
  ProductoItem.associate(sequelize.models)
}

module.exports = setupModels
