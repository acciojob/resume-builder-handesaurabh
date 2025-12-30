describe('Resume Builder App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('should display the correct heading', () => {
        cy.contains('RESUME GENERATOR');
    });

    it('should display a form for entering personal details', () => {
        cy.get('input[name="fname"]').should('be.visible');
        cy.get('input').should('have.length', 5);
    });

    it('Validating Profile details field', () => {
        fillProfileDetails();
        cy.get('#save_continue').click();
        cy.get('h2').contains('Add your Education Details').should('be.visible');
    });

    it('Validating Education field', () => {
        fillProfileDetails();
        cy.get('#save_continue').click();
        cy.get('h2').contains('Add your Education Details').should('be.visible');

        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').first().click();

        cy.get('#education_count').should('have.text', '1');
        cy.get('.entry-item').should('have.length', 1);
    });

    it('Validating skills field', () => {
        fillProfileAndEducation();

        cy.get('#next').click();
        cy.get('h2').contains('Skills').should('be.visible');

        cy.get('input[name="skill"]').clear().type('JavaScript');
        cy.get('#add_skill').click();

        cy.get('#skills_count').should('have.text', '1');
    });

    it('Validating preojects field', () => {
        fillProfileAndEducation();

        cy.get('#next').click();
        cy.get('h2').contains('Skills').should('be.visible');

        cy.get('input[name="skill"]').clear().type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#skills_count').should('have.text', '1');

        cy.get('#next').click();
        cy.get('h2').contains('Add your Mini Projects').should('be.visible');

        cy.get('input[name="projectName"]').clear().type('Project 1');
        cy.get('input[name="techStack"]').clear().type('React');
        cy.get('textarea[name="description"]').clear().type('Description');
        cy.get('#add_project').click();

        cy.get('#projects_count').should('have.text', '1');
    });

    it('Validating social media links', () => {
        fillProfileEducationSkillsAndProjects();

        cy.get('#next').click();
        cy.get('h2').contains('Social Media Links').should('be.visible');

        cy.get('input[name="Social"]').clear().type('http://github.com/user');
        cy.get('#add_social').click();

        cy.get('#social_count').should('have.text', '1');
    });
});

function fillProfileDetails() {
    cy.get('input[name="fname"]').clear().type('John');
    cy.get('input[name="lname"]').clear().type('Doe');
    cy.get('input[name="phone"]').clear().type('1234567890');
    cy.get('input[name="address"]').clear().type('Address');
    cy.get('input[name="url"]').clear().type('http://example.com');
}

function fillProfileAndEducation() {
    fillProfileDetails();
    cy.get('#save_continue').click();
    cy.get('h2').contains('Add your Education Details').should('be.visible');

    cy.get('input[name="courseName"]').clear().type('BSc');
    cy.get('input[name="completionYear"]').clear().type('2020');
    cy.get('input[name="college"]').clear().type('ABC College');
    cy.get('input[name="percentage"]').clear().type('85');
    cy.get('#add_education').click();
    cy.get('#education_count').should('have.text', '1');
}

function fillProfileEducationSkillsAndProjects() {
    fillProfileAndEducation();

    cy.get('#next').click();
    cy.get('h2').contains('Skills').should('be.visible');

    cy.get('input[name="skill"]').clear().type('JavaScript');
    cy.get('#add_skill').click();
    cy.get('#skills_count').should('have.text', '1');

    cy.get('#next').click();
    cy.get('h2').contains('Add your Mini Projects').should('be.visible');

    cy.get('input[name="projectName"]').clear().type('Project 1');
    cy.get('input[name="techStack"]').clear().type('React');
    cy.get('textarea[name="description"]').clear().type('Description');
    cy.get('#add_project').click();
    cy.get('#projects_count').should('have.text', '1');
}
