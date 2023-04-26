//Scenario 1. Iterating through a set of items or elements
const elements: JQuery<HTMLElement>[] = Array.from(cy.get('.element'))
elements.forEach((element: JQuery<HTMLElement>) => {
    // perform some action on each element
})

//Scenario 2. Repeating a test with different inputs or expected outputs
interface TestCase {
    input: string,
    expectedOutput: string
}

const testCases: TestCase[] = [
    { input: 'input1', expectedOutput: 'output1' },
    { input: 'input2', expectedOutput: 'output2' },
    { input: 'input3', expectedOutput: 'output3' }
]

for (const { input, expectedOutput } of testCases) {
    cy.get('#input').type(input)
    cy.get('#submit').click()
    cy.get('#output').should('have.text', expectedOutput)
}

//Scenario 3. Navigating through multiple pages
const pages = ['/', '/about', '/contact'];
pages.forEach((page) => {
    cy.visit(page);
    cy.get('h1').should('have.text', 'Page Header');
});

//Scenario 4. Testing multiple user accounts or roles
interface User {
    username: string;
    password: string;
    role: string;
}

const users: User[] = [
    { username: 'user1', password: 'password1', role: 'admin' },
    { username: 'user2', password: 'password2', role: 'user' },
    { username: 'user3', password: 'password3', role: 'manager' }
];

describe('Testing multiple user accounts or roles', () => {
    for (const user of users) {
        it(`should perform actions as ${user.role} user`, () => {
            cy.login(user.username, user.password);
            cy.performActions(user.role);
            cy.logout();
        });
    }
});

//Scenario 5. Running the same test with different configurations
interface Config {
    environment: string;
    baseUrl: string;
    user: string;
    password: string;
}

const configs: Config[] = [
    {
        environment: 'prod',
        baseUrl: 'https://example.com',
        user: 'user1',
        password: 'password1',
    },
    {
        environment: 'dev',
        baseUrl: 'https://dev.example.com',
        user: 'user2',
        password: 'password2',
    },
];

for (const config of configs) {
    describe(`My App (${config.environment})`, () => {
        beforeEach(() => {
            cy.visit(config.baseUrl);
            cy.login(config.user, config.password);
        });

        it('should do something with config', () => {
            // test code using config
        });
    });
}

//Scenario 6. Dynamically generating test data
interface TestData {
    input: string;
    expectedOutput: string;
}

const testData: { [key: string]: TestData } = {
    foo: {
        input: 'foo',
        expectedOutput: 'bar',
    },
    baz: {
        input: 'baz',
        expectedOutput: 'qux',
    },
};

Object.keys(testData).forEach((key) => {
    const data = testData[key];
    it(`should do something with ${data.input}`, () => {
        // generate some dynamic test data based on input
        const result = generateResult(data.input);

        // verify the result
        expect(result).to.equal(data.expectedOutput);
    });
});

//Scenario 7. Iterating through a set of test steps
const steps = [
    { action: 'click', selector: '#button-1' },
    { action: 'type', selector: 'input[name="name"]', value: 'Alice' },
    { action: 'type', selector: 'input[name="email"]', value: 'alice@example.com' },
    { action: 'click', selector: 'button[type="submit"]' },
];

steps.forEach((step) => {
    it(`should ${step.action} ${step.selector}`, () => {
        if (step.action === 'click') {
            cy.get(step.selector).click();
        } else if (step.action === 'type') {
            cy.get(step.selector).type(step.value);
        }
    });
});

//Scenario 8. Testing the same functionality or behavior across different environments, such as multiple screen resolutions or browser types
interface Environment {
    name: string;
    width: number;
    height: number;
}

const environments: Environment[] = [
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 }
];

describe('Testing the same functionality or behavior across different environments', () => {
    environments.forEach(({ name, width, height }) => {
        it(`should render properly on ${name} view`, () => {
            cy.viewport(width, height);
            cy.visit('/');
            cy.get('.content').should('be.visible');
        });
    });
})