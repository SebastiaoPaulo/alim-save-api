import { BagType, RetrieveForm } from 'src/utils/enum';

export class CreateBagDto {
  description: string;

  price: number;

  type: BagType;

  qtdAvailable: number;

  qtdSold: number;

  createdAt: string;

  updatedAt: string;

  retrieveForm: RetrieveForm;
}
