import React from 'react';
import ReactDOM from 'react-dom';

import * as _ from 'lodash';
// import { includes } from 'lodash';
import * as loader from 'html-webpack-plugin';

console.log('over here')

function functionName (
  first: string,
  second: string, third: string,
): void {
}

const employee = {
  firstName: 'mac',
  email: 'test.com',
  age: 28,
  getFullName: function() {
    return this.first;
  }
}

const apple = 'fruit', banana = 'fruit';

for (let i = 0; i < 10; i++) {
  
}

// const isAdmin = true;

const isAdmin = null;

if (isAdmin === true) {
  console.log('over here');
}
else {
  console.log('something else')
}

// let employees: Array<{ name: string }>;
let employees: { name: string }[];

//Some comment

const frit = {
  'color': 'green',
  shape: 'line'
}

interface Some {
  firstName: string,
  // sayHi(): void
  sayHi: () => void,
  yahoo: string, zzz: string,
}

enum ItemType {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
}

// function doubleNumber(item: any): number {
//   if (
//     item.type === ItemType.FIRST ||
//     item.type === ItemType.SECOND ||
//     item.type === ItemType.THIRD
//   ) {
//     return item.num * 2;
//   }
//   return item.num;
// }

function anotherTest() {
  return;
}

function doubleNumber(n: number): number {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n === 2) {
    return 2;
  }
  return n;
}


function some () {}

class Some {
  private names: [];
  private bbb: [];
  _someProp: any;

  otherName = ['some other names'];

  constructor(
    private readonly name: string,
  ) {

  }

  abc_some(): boolean {
    const any = 2;
    [2].map(x => x * 2)
      .toString();
    const some$Name = 'some';
    return true;
  }

  test() {
    return this.backed.bind(this);
  }

  backed = () => {
    const bbb = [];
  }

  render() {
    return <div>Some</div>;
  }
}
