const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')
// const pool = require('../../libs/postgres.pool')
// const sequelize = require('../../libs/sequelize')

const {models} = require('../../libs/sequelize')

class ProductsService {

  constructor() {
    this.products = []
    this.generate()
    // this.pool = pool
    // this.pool.on('error', (err)=>{console.log(err)})
  }

  async generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }

  }

  async create(data) {
    // const newProduct = {
    //   id: faker.string.uuid(),
    //   ...data

    // }
    // this.products.push(newProduct)
    // return newProduct

    const newProduct = await models.Product.create(data)
    return newProduct

  }

  async find() {
    // const query ='select * from tasks'
    // const rta = await this.pool.query(query) with pool
    // const [data, metadata] = await sequelize.query(query) with sequelize
    const products = await models.Product.findAll({
      include: ['category']
    })

    // return new Promise((resolve, reject)=>{
    //   setTimeout(()=>{
    //     resolve({
    //       data,
    //     })
    //     // resolve(rta.rows)
    //     // resolve(this.products)
    //   },5000)
    // })
    return products
  }

  async findOne(id) {
    return this.products.find(item => item.id === id)

  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw  boom.notFound("Product not found")
    }

    const product = this.products[index]
    this.products[index] ={
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item=> item.id === id)

    if(index === -1){
      throw  boom.notFound('Product not found')
    }
    this.products.splice(index,1)
    return {id}
  }
}

module.exports = ProductsService
