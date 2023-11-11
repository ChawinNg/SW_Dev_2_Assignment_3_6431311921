import React from 'react'
import HospitalCatalog from './hospitalCatalog'
import getHospitals from '@/libs/getHospitals'
describe('<HospitalCatalog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HospitalCatalog hosJson={getHospitals()} />)
  })
})