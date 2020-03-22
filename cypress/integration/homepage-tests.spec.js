/// <reference types="cypress" />

import {
    
    loginFromUI,
    validateHeader,
    navigateToPage,
    isLogoVisible,
    verifyGetCookie,
    validateErrorMsg,
    navigateToBaseUrl,
    validatePageTitle,
    acceptCookiePolicy,
    clickByStringSearch,
    verifyAddToChromeFeature,
    areAddToChromeButtonsVisible,
    areDesktopNavMenuItemsVisbile,
    verifySuccessfulloginByAPICall,
} from "../page-objects/homepage"

describe('JoinPiggy Homepage Tests', () => {
    beforeEach(() => {
        navigateToBaseUrl()
        acceptCookiePolicy()
    })

    it('Validate the visibility of the key elements in Home page', () => {
        validatePageTitle('Automatic Coupons, Huge Sales, and Cash back! - Piggy')
        validateHeader('easiest way to save money')
        isLogoVisible()
        areAddToChromeButtonsVisible()
        areDesktopNavMenuItemsVisbile()
    })

    it('Verify all the three Add to Chrome buttons open the expected chrome webstore page in new tab', () => {
        verifyAddToChromeFeature()
    })

    it('Verify User Registration Process using UI', () => {
        const user = Cypress.env('user')
        clickByStringSearch('Register')
        loginFromUI(user.invalidemail, user.validpassword)
        validateErrorMsg('Email already registered')
    })

    it('Verify Successful Login via API', function () {
        const user = Cypress.env('user')
        verifySuccessfulloginByAPICall(user.validemail, user.validpassword)
        verifyGetCookie('PHPSESSID')
        navigateToPage('https://www.joinpiggy.com/account/preferences')
        validateHeader('Settings')
    })
})