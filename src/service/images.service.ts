import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Image} from "src/model/image.entity";
import {Repository} from "typeorm";

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private readonly repository: Repository<Image>
  ) {}

  async findAll(): Promise<Image[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Image> {
    return await this.repository.findOneBy({id: id});
  }

  async saveImage(image: Image): Promise<Image> {
    return await this.repository.save(image);
  }
}
