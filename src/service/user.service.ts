import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>
    ) {};

    async findAll(): Promise<User[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOneBy({ id: id });
    }

    async saveUser(user: User): Promise<User> {
        return await this.repository.save(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.repository.findOneBy({ email: email });
    }
}
