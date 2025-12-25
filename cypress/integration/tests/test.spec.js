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
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        
        cy.get('#education_count').should('contain', '1');
        cy.get('.entry-item').should('have.length', 1);
    });

    it('Validating skills field', () => {
        fillProfileAndEducation();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#skills_count').should('contain', '1');
    });

    it('Validating projects field', () => {
        fillProfileAndEducation();
        cy.get('#next').click();
        cy.get('#add_skill').click(); // Add one skill to proceed
        cy.get('#next').click();
        
        cy.get('input[name="projectName"]').type('Project 1');
        cy.get('input[name="techStack"]').type('React');
        cy.get('textarea[name="description"]').type('Description');
        cy.get('#add_project').click();
        cy.get('#projects_count').should('contain', '1');
    });

    it('Validating social media links', () => {
        fillProfileEducationSkillsAndProjects();
        cy.get('#next').click();
        
        cy.get('input[name="Social"]').type('http://github.com/user');
        cy.get('#add_social').click();
        cy.get('#social_count').should('contain', '1');
    });
});

// Helper functions to reduce duplication
function fillProfileDetails() {
    cy.get('input[name="fname"]').type('John');
    cy.get('input[name="lname"]').type('Doe');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="address"]').type('Address');
    cy.get('input[name="url"]').type('http://example.com');
}

function fillProfileAndEducation() {
    fillProfileDetails();
    cy.get('#save_continue').click();
    cy.get('input[name="courseName"]').type('BSc');
    cy.get('input[name="completionYear"]').type('2020');
    cy.get('input[name="college"]').type('ABC College');
    cy.get('input[name="percentage"]').type('85');
    cy.get('#add_education').click();
}

function fillProfileEducationSkillsAndProjects() {
    fillProfileAndEducation();
    cy.get('#next').click();
    cy.get('input[name="skill"]').type('JavaScript');
    cy.get('#add_skill').click();
    cy.get('#next').click();
    cy.get('input[name="projectName"]').type('Project 1');
    cy.get('input[name="techStack"]').type('React');
    cy.get('textarea[name="description"]').type('Description');
    cy.get('#add_project').click();
}