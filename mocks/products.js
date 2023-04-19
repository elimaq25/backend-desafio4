'use strict'

/* eslint space-before-function-paren: 0 */
import { encryptID } from '../logic/cripto.js'

export class Products {
  constructor(
    lastID,
    {
      title,
      description,
      code,
      price,
      status = true,
      stock = 0,
      thumbnail // should be an array, fix in the next update
    }
  ) {
    this.ref = lastID
    this.id = encryptID(lastID)
    this.title = title
    this.description = description
    this.price = price
    this.status = status
    this.thumbnail = thumbnail
    this.stock = stock
    this.code = code ?? `code-${this.lastID}`
  }
}