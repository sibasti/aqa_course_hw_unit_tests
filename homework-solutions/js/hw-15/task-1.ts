interface IEmployee{
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee ={
    name: 'Denis',
    salary: 200000,
    isManager: false,
};

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type PartialEmployee = Partial<IEmployee>;

type EmployeeWithoutManager = Omit<IEmployee, "isManager">;

type ReadonlyEmployee = Readonly<IEmployee>;

const recordQA: Record<string, QaKeys> ={
    first: 'name',
    second: 'salary',
    third: 'isManager'
};

