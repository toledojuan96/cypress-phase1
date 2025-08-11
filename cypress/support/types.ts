export interface UsersData {
    "validUser": User;
    "lockedUser": User;
    "problemUser": User;
    "invalidUser": User;
}

interface User {
    username: string;
    password: string;
}