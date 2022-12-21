const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const employees = [
      { name: "Satti", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Javid", role: "Human Recommended Reading Assistant" },
    ];
    const employees2 = [
      {name: "Lewis", role: "Care Manager"},
      {name: "Bradley", role: "DPD Software Developer"},
      {name: "Connor", role: "Business Consultant"},
    ];
    expect(getEmployerRole("Satti", employees)).toEqual("Developer");
    expect(getEmployerRole("Javid", employees)).toEqual("Human Recommended Reading Assistant");
    expect(getEmployerRole("Lewis", employees2)).toEqual("Care Manager");
  });
});

