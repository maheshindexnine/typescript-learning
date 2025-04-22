console.log("TYPESCRIPT CODE STARTED");

interface User {
  id?: number;
  name: string;
  age: number;
  isVerified: boolean;
}

class userClass {
  userArray: User[] = [];

  constructor() {}

  getUsers(): User[] {
    return this.userArray;
  }

  addUser(user: User): void {
    this.userArray.push({ ...user, id: this.userArray.length + 1 });
  }

  verifyUser(name: string): boolean {
    const user: User | undefined = this.userArray.find((u) => u.name === name);
    if (!user) return false;
    this.userArray = this.userArray.map((u) => {
      if (u.id === user.id) {
        u.isVerified = true;
      }
      return u;
    });
    return true;
  }
}

const userData = new userClass();

console.log("1) User Data cheking ", userData.userArray);

userData.addUser({ name: "Mahesh Gaikwad", age: 24, isVerified: false });

userData.addUser({ name: "Hina Kauser", age: 29, isVerified: false });

console.log("2) User Data cheking ", userData.userArray);

userData.verifyUser("Hina Kauser");

console.log("3) User Data cheking ", userData.userArray);

console.log(
  "Is Hina Gaikwad User Exists",
  userData.verifyUser("Hina Gaikwad") ? "Yes" : "No"
);
