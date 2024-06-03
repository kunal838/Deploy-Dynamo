module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    env: {
      API_URL: process.env.API_URL,
      SOCKET_URL:process.env.SOCKET_URL
    }
  }