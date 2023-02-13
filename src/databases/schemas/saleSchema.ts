import { tableSchema } from '@nozbe/watermelondb';

export const saleSchema = tableSchema({
  name: 'sales',
  columns: [
    {
      name: "board_salesman",
      type: "string"
    },
    {
      name: "date_of_sale",
      type: "string"
    },
    {
      name: "hour_of_sale",
      type: "string"
    },
    {
      name: "latitude",
      type: "string"
    },
    {
      name: "longitude",
      type: "string"
    },
    {
      name: "nearest_unit",
      type: "string"
    },
    {
      name: "roaming",
      type: "number"
    },
    {
      name: "sale_value",
      type: "number"
    },
    {
      name: "salesman",
      type: "string"
    },
    {
      name: "sync",
      type: "boolean"
    }
  ]
})