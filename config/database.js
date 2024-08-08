    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST','localhost'),
          port: env.int('DATABASE_PORT', 5433),
          database: env('DATABASE_NAME','fidnidb'),
          user: env('DATABASE_USERNAME','postgres'),
          password: env('DATABASE_PASSWORD','fidni@ibsar123'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
        
        },
        debug: false,
      },
    });