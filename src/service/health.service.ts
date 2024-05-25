import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Dummy} from "src/model/dummy.entity";
import {Repository} from "typeorm";

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Dummy) private readonly repository: Repository<Dummy>
  ) {}

  async getDummies(): Promise<Dummy[]> {
    return this.repository.find();
  }
}
