const Employee = require('../lib/Employee');

test("creates an Employee object", () => {
    const employee = new Employee("David", 1, "email");

    expect(employee.name).toBe("David");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("email");
}) 