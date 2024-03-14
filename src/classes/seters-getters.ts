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
//   get recentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No file report found");
//   }
//   set recentReport(value: string) {
//     if (!value) {
//       throw new Error("please provide name report");
//     }
//     this.addReport(value);
//   }

//   printReport() {
//     console.log(this.reports);
//   }
//   showEmployees() {
//     console.log(this.employees);
//   }
// }
