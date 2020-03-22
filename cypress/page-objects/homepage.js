/// <reference types="cypress" />

export function navigateToBaseUrl() {
    cy.visit('https://www.joinpiggy.com/')
}

export function acceptCookiePolicy() {
    cy.get('.iubenda-cs-close-btn', { timeout: 7000}).click()
}
export const loginFromUI = (invalidemail, password) => {
    cy.get('#register_modal .modal-content', { timeout: 10000 }).should('be.visible')
    cy.get('.register-step2 > [type="email"]').should('have.attr', 'placeholder', 'Email Address').type(invalidemail, { force: true })
    cy.get('.register-step2 > [name="password"]').should('have.attr', 'placeholder', 'Password').type(password, { force: true })
    cy.get('.register-step2 > [name="password2"]').should('have.attr', 'placeholder', 'Confirm Password').type(password, { force: true })
    cy.get('.register-step2 > .btn-green-v2').contains('Join with').click()
}

export function clickByStringSearch(text) {
    cy.contains(text).click()
}

export function validateErrorMsg(text) {
    cy.get('.alert', { timeout: 10000 }).should('contain', text)
}

export function validateHeader(text) {
    cy.get('h1').should('contain', text)
}

export function verifySuccessfulloginByAPICall(email, password) {
    cy.request({
        method: 'POST',
        url: 'auth/signin',
        form: true,
        body: {
            email: email,
            password: password,
        },
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).property('ok').to.eq(true)
    })
}

export function verifyGetCookie(cookie) {
    cy.getCookie(cookie).should('exist')
}


export function navigateToPage(url) {
    cy.visit(url)
}

export function verifyAddToChromeFeature() {
    //stubs the window.open method using cy.stub()
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    })
    // Click all the "Add to Chrome" related buttons
    cy.get('a.btn-green-v2').click({ multiple: true, force: true })
    
    // Verify the opened new windows(which is not visible in Cypress interactive modes), should be called with expected URL
    cy.get('@windowOpen', { timeout: 7000 }).should('be.calledWith', 'https://chrome.google.com/webstore/detail/hfapbcheiepjppjbnkphkmegjlipojba?hl=us')
}

export function isLogoVisible() {
    cy.get('.desktop-home-link > img').should('be.visible').should('have.attr', 'alt', 'Join Piggy')
}

export function validatePageTitle(text) {
    cy.title().should('eq', text)
}

export function areAddToChromeButtonsVisible() {
    cy.get('a.btn-green-v2').should('be.visible').should('have.css', 'background-color', 'rgb(0, 186, 74)').
        then(($button) => {
            expect($button).to.have.length(3)
            expect($button.get(0).innerText, 'first \'Add to Chrome\' Button').to.contain('Chrome')
            expect($button.get(1).innerText, 'second \'Add to Chrome\' Button').to.contain('Activate Free')
            expect($button.get(2).innerText, 'third \'Add to Chrome\' Button').to.contain('Continue')
        })
}

export function areDesktopNavMenuItemsVisbile() {
    cy.get('.nav-desktop > li').then(($lis) => {
            expect($lis).to.have.length(4)
            expect($lis.eq(0), 'first item').to.contain('Coupons')
            expect($lis.eq(1), 'second item').to.contain('Stores')
            expect($lis.eq(2), 'third item').to.contain('Register')
            expect($lis.eq(3), 'fourth item').to.contain('Login')
        })
}