import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Image} from "src/model/image.entity";
import {PaginationParams} from "src/controller/decorators";
import {Criteria, findByCriteria} from "./utils/findByCriteria";

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private readonly repository: Repository<Image>
  ) {}

  async findAll(pagination: PaginationParams, criteria: Criteria) {
    return findByCriteria(this.repository, criteria, pagination);
  }

  async findById(id: string) {
    return this.repository.findOneBy({id});
  }

  async saveOrUpdateAll(images: Image[]) {
    //FIXME
    const results = [];
    for (let img of images) {
      results.push(await this.repository.save(img));
    }
    return results;
  }

  async deleteById(id: string) {
    return this.repository.delete({id});
  }
}
