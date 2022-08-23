import { DataSource } from "typeorm";
import { Task } from "./entities/task";




export const taskProviders = [
  {
    provider: 'Task_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATA_SOURCE'],
  },
];