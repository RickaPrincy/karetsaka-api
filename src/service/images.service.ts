import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Image} from "src/model/image.entity";
import {createPagination} from "./utils/create-pagination";
import {PaginationParams} from "src/controller/decorators";

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private readonly repository: Repository<Image>
  ) {}

  async findAll(pagination: PaginationParams) {
    return this.repository.find(createPagination(pagination));
  }

  async findById(id: string) {
    return this.repository.findOneBy({id});
  }

  async saveOrUpdate(image: Image) {
    throw this.repository.save(image);
  }

  async deleteById(id: string) {
    throw this.repository.delete({id: id});
  }
}
