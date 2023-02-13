import { tableSchema } from '@nozbe/watermelondb';

export const userSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'profile',
      type: 'string'
    },
    {
      name: 'border_id',
      type: "string"
    },
    {
      name: 'unit_id',
      type: "string"
    },
    {
      name: 'token',
      type: "string"
    }
  ]
})