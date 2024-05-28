import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "src/model";
import {PaginationParams} from "src/controller/decorators";
import {createPagination} from "./utils/create-pagination";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>
  ) {}

  async findAll(pagination: PaginationParams): Promise<User[]> {
    return await this.repository.find(createPagination(pagination));
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOneBy({id: id});
  }

  async saveUser(user: User): Promise<User> {
    return await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOneBy({email: email});
  }
}
