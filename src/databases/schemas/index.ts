import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './userSchema';
import { saleSchema } from './saleSchema';

export const schemas = appSchema({
  version: 1,
  tables: [userSchema, saleSchema]
});