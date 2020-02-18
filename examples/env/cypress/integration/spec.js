it('has all expected env variables', () => {
  // environmentName is set as workflow environment variable
  expect(Cypress.env('environmentName')).to.equal('staging')

  // host and port are set via action's "with: env:" parameter
  expect(Cypress.env()).to.deep.include({
    host: 'api.dev.local',
    port: 4222
  })
})