// --------------------------------------------------------------------------------
// Declaring types and methods
// --------------------------------------------------------------------------------
// interface User {
//     name: string;
//     age: number;
// }

// class UserAccount {
//     name: string;
//     age: number;
//     password: string;

//     constructor(name: string, age: number, password: string) {
//         this.name = name;
//         this.age = age;
//         this.password = password;
//     }
// }

// let user1: User = new UserAccount("John", 20, "MyPassword");

// console.log("user1 => ", user1);

// --------------------------------------------------------------------------------
// Type Unions
// --------------------------------------------------------------------------------

// type LockStatus = "Locked" | "Unlocked"

// interface Vault {
//     lockStatus: LockStatus;
//     password: string;
// }

// class SecureVault {
//     lockStatus: LockStatus;
//     password: string;

//     constructor(lockStatus: LockStatus, password: string) {
//         this.lockStatus = lockStatus;
//         this.password = password;
//     }
// }

// let vault1: Vault = new SecureVault("Locked", "#PAss");

// console.log("Vault1 => ", vault1);

// --------------------------------------------------------------------------------
// Create  New Type
// --------------------------------------------------------------------------------

// type password = string | number | any | unknown | void | never | [] | {} | null | undefined | true | false | boolean | Function | bigint;

// type userList = Array<{name: string}>

// const list: userList = [{name: "Paul"}, {name: "Mark"}];

// console.log("list => ", list)



// --------------------------------------------------------------------------------
// Structural Types
// --------------------------------------------------------------------------------
// interface User {
//   name: string;
//   age: number;
// }

// function UserLog(user: User) {
//   console.log("Name: ", user.name);
//   console.log("Age: ", user.age);
// }

// let newUser = {
//   name: "John",
//   age: 20,
// };

// UserLog(newUser);

// --------------------------------------------------------------------------------

// interface Secret {
//     hash: string;
//     salt: string;
// }

// class ProjectSecret {
//     hash: string;
//     salt: string;

//     constructor(hash: string, salt: string){
//         this.hash = hash;
//         this.salt = salt;
//     }
// }

// function logSecret (secret: Secret) {
//     console.log("Hash: ", secret.hash);
//     console.log("Salt: ", secret.salt)
// }

// // const secret1 = new ProjectSecret("zzz", "123#");
// // logSecret(secret1);

// const secret2: Secret = new ProjectSecret("wwww", "567#");

// secret2.hash = "myHash";
// secret2.salt = "mySalt";

// logSecret(secret2);
