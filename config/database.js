module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '51.195.222.168'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'fidnidb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'fidni@ibsar123'),
      ssl: false,
    },
  },
});

