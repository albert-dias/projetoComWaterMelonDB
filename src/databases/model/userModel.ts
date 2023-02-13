import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class UserModel extends Model {
  static table = "users"

  @field('name')
  user_id!: string;

  @field('name')
  name!: string;

  @field("email")
  email!: string;

  @field("profile")
  profile!: string;

  @field("border_id")
  board_id!: string;

  @field("unit_id")
  unit_id!: string;

  @field("token")
  token!: string;

}
