abstract class Department {
  static fiscalYear: number = 2024;
  constructor(
    public id: string,
    public name: string,
    protected employees: string[] = []
  ) {}
  abstract doSomething(): void;
  static showFiscalYear() {
    console.log(Department.fiscalYear);
  }
  describe(this: Department) {
    console.log(`Department ${this.name} and ${this.id}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(
      `the number of employees is ${this.employees.length} and they are [${this.employees}]`
    );
  }
}
// const financeDep = new Department("Dep1", "finance");
// financeDep.addEmployee("khaled");
// financeDep.printEmployees();
// financeDep.Employees;    Error(protected)

class ITDep extends Department {
  constructor(
    public id: string,
    public admins: string[],
    public priveleges: string[]
  ) {
    super(id, "IT");
    // this.employees = []; Correct
    admins = priveleges;
  }
  doSomething(): void {
    console.log("Hi from ItDep");
  }
}

// const itDep = new ITDep("Dep3",[],[])
// itDep.employees;

class AccountingDep extends Department {
  private static instance: AccountingDep;
  private constructor(
    public id: string,
    public reports: string[] = [],
    private lastReport: string
  ) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No file report found");
  }
  set recentReport(value: string) {
    if (!value) {
      throw new Error("please provide name report");
    }
    this.addReport(value);
  }
  static getInstace() {
    if (AccountingDep.instance) {
      return AccountingDep.instance;
    }
    this.instance = new AccountingDep("Dep2", [], "report1");
    return this.instance;
  }
  doSomething(): void {
    console.log("Hiiiiii!!!!!!");
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  printReport() {
    console.log(this.reports);
  }
  showEmployees() {
    console.log(this.employees);
  }
}

const accounting1 = AccountingDep.getInstace();
console.log(accounting1);
const accounting2 = AccountingDep.getInstace();
console.log(accounting2);

// const account = new AccountingDep("Dep4", ["DepAccount"], "lastReport");
// account.addReport("main");
// account.printReport();
// account.addReport("new");
// account.printReport();
// console.log(account.recentReport);
// account.recentReport = "newReport2";
// account.printReport();
// account.doSomething();
// // const dep = new Department("Dep1", "Dep");
// // dep.showFiscalYear();

// Department.showFiscalYear();
