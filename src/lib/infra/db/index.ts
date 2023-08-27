import { DatabaseService } from "./DatabaseModule";
import { UnitOfWork } from './UnitOfWork';

export const dataService = new DatabaseService();
export const  uow = new UnitOfWork();