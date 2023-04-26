import * as path from 'path'

describe('Testing Excel data', () => {

    const xlsxPath: string = './cypress/downloads/companies.xlsx'
    const jsonName: string = path.basename(xlsxPath).replace('.xlsx', '.json');

    before(() => {
        cy.task('convertXlsxToJson', xlsxPath)
    })

    beforeEach(() => {
        cy.fixture(jsonName).as('companiesData')
    })

    it('Verify if file includes data of 10 companies', () => {
        cy.get('@companiesData').should('have.length', 10)
    })

    it('Verify if each company data contains non-empty values', () => {
        cy.get('@companiesData').then((companies) => {
            for (const company of companies) {
                expect(company['Company Name']).to.not.be.empty
                expect(company['Product']).to.not.be.empty
                expect(company['City']).to.not.be.empty
                expect(company['Email']).to.not.be.empty
            }
        })
    })

    it('Verify if each company data contains unique emails', () => {
        cy.get('@companiesData')
            .then(companies => {
                const emails = companies.map(company => company.Email)
                const uniqueEmails = new Set(emails)

                expect(uniqueEmails.size).to.equal(emails.length)
            })
    })
})