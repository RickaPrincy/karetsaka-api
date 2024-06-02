import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Image} from "src/model/image.entity";

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private readonly repository: Repository<Image>
  ) {}

  async findAll() {
    return this.repository.find();
  }

  async findById(id: string) {
    return this.repository.findOneBy({id: id});
  }
}
