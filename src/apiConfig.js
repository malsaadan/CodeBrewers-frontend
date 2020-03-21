let apiUrl
const expressPort = 5000
const apiUrls = {
  production: 'https://obscure-tor-91069.herokuapp.com',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
