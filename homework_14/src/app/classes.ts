export class Class {
    constructor(
      public id: number,
      public topic: string,
      public date: string,
      public lecturer: string
    ) {}
}


export const Classes: Class[] = (localStorage.getItem('database'))
    ? JSON.parse(localStorage.getItem('database'))
    : [
        new Class(0, 'HTML', '2018/1/1', 'John Doe'),
        new Class(1, 'CSS', '2018/1/1', 'Jane Doe'),
        new Class(2, 'Javascript', '2018/1/1', 'John Smith')
    ];
