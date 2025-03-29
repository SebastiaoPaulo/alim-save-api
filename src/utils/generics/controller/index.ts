import { Delete, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { IRepository } from 'src/database/interface/IRepository';

export class GenericController<DTO> {
  constructor(private service: IRepository) {}

  @ApiOperation({ summary: 'Lista todos.' })
  @Get()
  public async findAll() {
    return await this.service.findAll();
  }

  @ApiOperation({ summary: 'Procura por ID.' })
  @Get('/:id')
  public async findById(@Param('id') id: number) {
    return await this.service.findById(id);
  }

  @ApiOperation({ summary: 'Apaga por ID.' })
  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @ApiOperation({ summary: 'Lista com paginação.' })
  @Get('/:page/:rows')
  public async find(@Param('page') page: number, @Param('rows') rows: number) {
    return await this.service.find(page, rows);
  }
}
