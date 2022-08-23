import { DataSource } from "typeorm";
import { User } from "./entities/user";



export const usersProviders = [
  {
    provider: 'User_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];