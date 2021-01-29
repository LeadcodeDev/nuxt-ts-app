const Env = {
  API_URL:
    process.env.NODE_ENV == 'production'
      ? 'https://my-domain.fr/api'
      : 'http://localhost:3333/api',
}

export default Env
