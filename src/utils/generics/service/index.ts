import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/database/interface/IRepository';
import { Repository } from 'typeorm';

@Injectable()
export class GenericService<Entity, DTO> implements IRepository {
  constructor(
    private repository: Repository<Entity>,
    private entity: Entity,
  ) {}

  public getSkipNumber(page: number, rows: number): number {
    if (page == 1) return 0;
    return page * rows - rows;
  }

  public getNumberOfPagesLeft(
    currentPage: number,
    rowsPerPage: number,
    totalItems: number,
  ): number {
    return Math.ceil(totalItems / rowsPerPage - currentPage);
  }

  public getNumberOfTotalPages(
    rowsPerPage: number,
    totalItems: number,
  ): number {
    return Math.ceil(totalItems / rowsPerPage);
  }

  public getPreviousPage(page: number): number {
    return page - 1;
  }

  public getNextPage(page: number, totalPages: number) {
    if (page !== totalPages) return page + 1;
    return 0;
  }

  public async find(page: number, rows: number) {
    const [requestedData, count] = await this.repository.findAndCount({
      skip: this.getSkipNumber(page, rows),
      take: rows,
    });

    return {
      data: requestedData,
      count,
      previousPage: this.getPreviousPage(page),
      nextPage: this.getNextPage(
        Number(page),
        this.getNumberOfTotalPages(rows, count),
      ),
      pagesLeft: this.getNumberOfPagesLeft(page, rows, count),
      totalPages: this.getNumberOfTotalPages(rows, count),
    };
  }

  public async findAll() {
    const requestedData = await this.repository.find({
      //   relations: [...this.properties.relations],
    });
    return requestedData;
  }

  public async findById(id: number) {
    const requestedData = this.repository.manager
      .createQueryBuilder(this.entity.constructor.name, 'entidade')
      .where('entidade.id = :id', { id })
      .getOne();

    return requestedData;
  }

  public async create(data: DTO) {
    const requestNewData = await this.repository
      .createQueryBuilder()
      .insert()
      .into(this.entity.constructor.name)
      .values({ ...data })
      .execute();

    return requestNewData;
  }

  public async updateById(id: any, data: Partial<DTO>) {
    const requestDataToUpdate = await this.repository
      .createQueryBuilder()
      .update(this.entity.constructor.name)
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    return requestDataToUpdate;
  }

  public async deleteById(id: number) {
    const requestedDataToDelete = await this.repository.delete(id);

    return requestedDataToDelete;
  }
}
