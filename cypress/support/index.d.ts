declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      createDefaultTodos(): Chainable<any>
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
      createTodos(title: string): Chainable<any>
    }
  }