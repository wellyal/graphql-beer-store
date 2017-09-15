import axios from 'axios'

const test = payload => {
  console.log('called with', payload)
  return axios.get('http://demo6288389.mockable.io/user')
}

export default { test }