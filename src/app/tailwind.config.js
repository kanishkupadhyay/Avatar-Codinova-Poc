module.exports = {
  mode: 'jit',
  content: ["*"],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
