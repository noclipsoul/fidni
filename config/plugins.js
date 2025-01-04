module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  meilisearch: {
    config: {
      host: "http://51.195.222.168:7700",
      apiKey: "lkw-a4zF4d7CbpyR8miFcmLLUCX8rx-vxP4dbfj9vE4",
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mail.fidni.tn',
        port: 587,
        secure: false,
        auth: {
          user: 'support@fidni.tn',
          pass: 'QKG6HwXGHN',
        },
      },
      settings: {
        defaultFrom: 'support@fidni.tn',
        defaultReplyTo: 'support@fidni.tn',
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET','a2Wy1zVNcl2x2tSYc9Txfg=='),
    },
  },
});
