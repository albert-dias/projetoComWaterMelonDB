import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class SalesModel extends Model {
  static table = "sales"

  @field('board_salesman')
  board_salesman!: string;

  @field("date_of_sale")
  date_of_sale!: string;

  @field("hour_of_sale")
  hour_of_sale!: string;

  @field("latitude")
  latitude!: string;

  @field("longitude")
  longitude!: string;

  @field("nearest_unit")
  nearest_unit!: string;

  @field("roaming")
  roaming!: string;

  @field("sale_value")
  sale_value!: number;

  @field("salesman")
  salesman!: string;

  @field("sync")
  sync!: boolean;

}
