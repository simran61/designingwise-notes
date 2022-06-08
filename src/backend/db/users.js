import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Simran",
    lastName: "Gangwani",
    email: "simrangangwani3107@gmail.com",
    password: "simran",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
