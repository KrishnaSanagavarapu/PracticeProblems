export const Endpoints = {
  GET_SHOP_EMPLOYEES(shopNo: number): string {
    return `https://srstest.jewels.com/EmployeeService/api/employees/?deptNo=${shopNo}`;
  }
};

// https://test-repair.jewels.com/EmployeeService/api/employees/?ids=570127
