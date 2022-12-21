const getEmployerRole = (employeeName, employees) => {
  const gotcha = employees.map(employee => employee.name).indexOf(employeeName);
  const roleOfGotcha = employees[gotcha].role;
  return gotcha === -1 ? undefined : roleOfGotcha;
};

module.exports = getEmployerRole;

// employee name = employeename
// if so, then identify the index of the employee;
// then print the value attibuted to their role.