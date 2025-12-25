describe('Resume Builder App', () => {
    it('should display the correct heading', () => {
        cy.visit('http://localhost:8080');
        cy.contains('RESUME GENERATOR').should('be.visible');
    });

    it('should display a form for entering personal details', () => {
        cy.visit('http://localhost:8080');
        cy.get('input').should('have.length', 5);
    });

    it('Validating Profile details field', () => {
        cy.visit('http://localhost:8080');
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        cy.contains('h2', 'Add your Education Details').should('be.visible');
    });

    it('Validating Education field', () => {
        cy.visit('http://localhost:8080');
        // Fill profile
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        // Add education
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        
        cy.get('#education_count').should('contain', '1');
    });

    it('Validating skills field', () => {
        cy.visit('http://localhost:8080');
        // Profile -> Education -> Skills
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#skills_count').should('contain', '1');
    });

    it('Validating projects field', () => {
        cy.visit('http://localhost:8080');
        // Profile -> Education -> Skills -> Projects
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#next').click();
        
        cy.get('input[name="projectName"]').type('Project 1');
        cy.get('input[name="techStack"]').type('React');
        cy.get('textarea[name="description"]').type('Description');
        cy.get('#add_project').click();
        cy.get('#projects_count').should('contain', '1');
    });

    it('Validating social media links', () => {
        cy.visit('http://localhost:8080');
        // Full flow to social page
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#next').click();
        
        cy.get('input[name="projectName"]').type('Project 1');
        cy.get('input[name="techStack"]').type('React');
        cy.get('textarea[name="description"]').type('Description');
        cy.get('#add_project').click();
        cy.get('#next').click();
        
        cy.get('input[name="Social"]').type('https://github.com/user');
        cy.get('#add_social').click();
        cy.get('#social_count').should('contain', '1');
    });
});
describe('Resume Builder App', () => {
    it('should display the correct heading', () => {
        cy.visit('http://localhost:8080');
        cy.contains('RESUME GENERATOR').should('be.visible');
    });

    it('should display a form for entering personal details', () => {
        cy.visit('http://localhost:8080');
        cy.get('input').should('have.length', 5);
    });

    it('Validating Profile details field', () => {
        cy.visit('http://localhost:8080');
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        cy.contains('h2', 'Add your Education Details').should('be.visible');
    });

    it('Validating Education field', () => {
        cy.visit('http://localhost:8080');
        // Fill profile
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        // Add education
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        
        cy.get('#education_count').should('contain', '1');
    });

    it('Validating skills field', () => {
        cy.visit('http://localhost:8080');
        // Profile -> Education -> Skills
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#skills_count').should('contain', '1');
    });

    it('Validating projects field', () => {
        cy.visit('http://localhost:8080');
        // Profile -> Education -> Skills -> Projects
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#next').click();
        
        cy.get('input[name="projectName"]').type('Project 1');
        cy.get('input[name="techStack"]').type('React');
        cy.get('textarea[name="description"]').type('Description');
        cy.get('#add_project').click();
        cy.get('#projects_count').should('contain', '1');
    });

    it('Validating social media links', () => {
        cy.visit('http://localhost:8080');
        // Full flow to social page
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[name="phone"]').type('1234567890');
        cy.get('input[name="address"]').type('Address');
        cy.get('input[name="url"]').type('http://example.com');
        cy.get('#save_continue').click();
        
        cy.get('input[name="courseName"]').type('BSc');
        cy.get('input[name="completionYear"]').type('2020');
        cy.get('input[name="college"]').type('ABC College');
        cy.get('input[name="percentage"]').type('85');
        cy.get('#add_education').click();
        cy.get('#next').click();
        
        cy.get('input[name="skill"]').type('JavaScript');
        cy.get('#add_skill').click();
        cy.get('#next').click();
        
        cy.get('input[name="projectName"]').type('Project 1');
        cy.get('input[name="techStack"]').type('React');
        cy.get('textarea[name="description"]').type('Description');
        cy.get('#add_project').click();
        cy.get('#next').click();
        
        cy.get('input[name="Social"]').type('https://github.com/user');
        cy.get('#add_social').click();
        cy.get('#social_count').should('contain', '1');
    });
});
