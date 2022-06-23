const Engineer = require('../lib/Engineer');

test("creates an Engineer object", () => {
    const engineer = new Engineer("David", 1, "email", "Seeker");

    expect(engineer.name).toBe("David");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("email");
    expect(engineer.github).toBe("Seeker");
}) 

test("returns 'Engineer'", () => {
    const engineer = new Engineer("David", 1, "email", 5, "Seeker");
    const role = engineer.getRole();

    expect(role).toBe("Engineer");
})