'use strict'
/* eslint space-before-function-paren: 0 */
import { io } from '../app.js'
import { PM } from '../mocks/productManager.js'

export async function socketHandle(req, res, next) {
  const products = await PM.getProducts()
  io.emit('updateList', {
    list: products,
    showList: products.length > 0
  })
}