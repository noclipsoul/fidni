module.exports = () => ({


    seo: {
        enabled: true,
      },
      meilisearch: {
        config: {
          // Your meili host
          host: "http://51.195.222.168:7700",
          // Your master key or private key
          apiKey: "lkw-a4zF4d7CbpyR8miFcmLLUCX8rx-vxP4dbfj9vE4",
        }
      },
      email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: 'mail.fidni.tn', // Your Poste.io SMTP server
            port: 587, // Use TLS port
            secure: false, // Set to true if using port 465
            auth: {
              user: 'support@fidni.tn', // Email address
              pass: 'QKG6HwXGHN', // Email password
            },
          },
          settings: {
            defaultFrom: 'support@fidni.tn',
            defaultReplyTo: 'support@fidni.tn',
          },
        },
      },

});
