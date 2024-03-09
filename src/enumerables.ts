const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};
console.log(statuses.inProgress);

enum StatusesEnum {
  NotStarted,
  InProgress,
  Done,
}
console.log(StatusesEnum.InProgress);

interface TaskInterface {
  id: string;
  status: StatusesEnum;
}
const task: TaskInterface = {
  id: "task1",
  status: StatusesEnum.Done,
};
