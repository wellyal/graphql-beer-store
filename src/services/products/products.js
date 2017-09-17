import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import productsMock from 'assets/mocks/products'

const getProductsByLocation = payload => {
  const mock = new MockAdapter(axios, { delayResponse: 2000 })
  mock.onGet('/products').reply(200, { productsMock })

  return axios.get('/products')
}

export default { getProductsByLocation }