const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
    const intern = new Intern("David", 1, "email", "School");

    expect(intern.name).toBe("David");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("email");
    expect(intern.school).toBe("School");
}) 

test("returns 'Intern'", () => {
    const intern = new Intern("David", 1, "email", 5, "School");
    const role = intern.getRole();

    expect(role).toBe("Intern");
})