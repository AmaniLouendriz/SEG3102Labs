export class Employee {
  constructor(
    public name: string,
    public dateOfBirth: any,
    public city: string,
    public salary: number,
    public gender?: string,
    public email?: string
  ) {}
}
