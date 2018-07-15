// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/headlines' //db name
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL //when on heroku, tells it to look here
  }
};
