// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//components
import './component/hairCarePage'
import './component/makeupPage'
import './component/booksPage'

//action
import './action/hairCarePageAction'
import './action/makeupPageAction'
import './action/booksPageAction'

//queries
import './queries/hairCareQueries'
import './queries/chekcoutPage'
import './queries/booksQueries'