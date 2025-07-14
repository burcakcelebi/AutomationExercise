class loginpage {

    sendkeysUsername(value){
        cy.get('[name="email"]').type(value);
        return this;
    }

    sendkeysPassword(value){
        cy.get('[name="password"]').type(value);
        return this;
    }

    clicklogin(){
        cy.get('[value="Log In"]').click();
        return this;
    }
}

export default loginpage;