import { EnvironmentConfiguration } from "../models/environmentConfig";

const env = Cypress.env() as EnvironmentConfiguration;

describe('empty spec', () => {
  it('passes', () => {
    cy.visit(env.host)
  })
})