import {Item} from "./Item";

export interface Movie extends Item{
  plot?: string;
  seen?: boolean;
}
