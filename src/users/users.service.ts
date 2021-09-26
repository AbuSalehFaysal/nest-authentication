import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Abu',
            username: 'abu',
            password: 'abu',
        },
        {
            id: 2,
            name: 'Saleh',
            username: 'saleh',
            password: 'saleh',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
