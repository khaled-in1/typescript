// class Department {
//   static fiscalYear: number = 2024;
//   constructor(
//     public id: string,
//     public name: string,
//     protected employees: string[] = []
//   ) {}
//   static showFiscalYear() {
//     console.log(Department.fiscalYear);
//   }
//   describe(this: Department) {
//     console.log(`Department ${this.name} and ${this.id}`);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployees() {
//     console.log(
//       `the number of employees is ${this.employees.length} and they are [${this.employees}]`
//     );
//   }
// }
// const financeDep = new Department("Dep1", "finance");
// financeDep.addEmployee("khaled");
// financeDep.printEmployees();
// // financeDep.Employees;    Error(protected)

// class ITDep extends Department {
//   constructor(
//     public id: string,
//     public admins: string[],
//     public priveleges: string[]
//   ) {
//     super(id, "IT");
//     // this.employees = []; Correct
//     admins = priveleges;
//   }
// }

// // const itDep = new ITDep("Dep3",[],[])
// // itDep.employees;

// class Account extends Department {
//   constructor(public id: string, public reports: string[] = []) {
//     super(id, "Accounting");
//   }
//   addReport(report: string) {
//     this.reports.push(report);
//   }
//   printReport() {
//     console.log(this.reports);
//   }
//   showEmployees() {
//     console.log(this.employees);
//   }
// }
// const account = new Account("DepAccount");
// account.addReport("main");
// account.printReport();
// account.addReport("new");
// account.printReport();
// // const dep = new Department("Dep1", "Dep");
// // dep.showFiscalYear();

// Department.showFiscalYear();
