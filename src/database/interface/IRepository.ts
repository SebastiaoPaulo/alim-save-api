export interface IRepository {
  findAll(): any;
  find(...parameters): any;
  findById(id: any): any;
  create(...parameters): any;
  deleteById(id: any): any;
  updateById(id: any, ...parameters): any;
}
