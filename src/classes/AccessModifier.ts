// /*
// Access Modifiers are Public,Private,Protected,ReadOnly,Static and Abstract
// */
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
// }

// class AccountingDep extends Department {
//   private static instance: AccountingDep;
//   private constructor(
//     public id: string,
//     public reports: string[] = [],
//     private lastReport: string
//   ) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
// }

// financeDep.Employees;    Error(protected)
// Department.showFiscalYear();
