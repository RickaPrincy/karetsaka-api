import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "src/model";
import {PaginationParams} from "src/controller/decorators";
import {Criteria, findByCriteria} from "./utils/findByCriteria";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>
  ) {}

  async findAll(
    pagination: PaginationParams,
    criteria: Criteria<User>
  ): Promise<User[]> {
    return findByCriteria(this.repository, criteria, pagination);
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOneBy({id: id});
  }

  async saveUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({email: email});
  }
}
