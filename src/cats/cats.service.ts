import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
 

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository:
    Repository<Cat>
  ){}

  async create(createCatDto: CreateCatDto) {
    const cat = this.catsRepository.create(createCatDto)
    cat.id = v4();
    return await this.catsRepository.save(cat);
  }

 async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: string) {
    const cat = await this.catsRepository.findOne({where: {id}})
    if(!cat){
      throw new NotFoundException();
    }
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    const cat = await this.catsRepository.findOne({where: {id}})
    if(!cat){
      throw new NotFoundException();
    }

    Object.assign(cat, updateCatDto);

    return await this.catsRepository.save(cat);
  }

  async remove(id: string) {
    const cat = await this.catsRepository.findOne({where: {id}})
    if(!cat){
      throw new NotFoundException();
    }

    return await this.catsRepository.remove(cat);
  }
}
