const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager("David", 1, "email", 5);

    expect(manager.name).toBe("David");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("email");
    expect(manager.officeNumber).toBe(5);
}) 