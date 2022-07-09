import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestuarantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Dish {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restuarantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dish, DishMetaData>);
  static copyOf(source: Dish, mutator: (draft: MutableModel<Dish, DishMetaData>) => MutableModel<Dish, DishMetaData> | void): Dish;
}

export declare class Restuarant {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDelivery: number;
  readonly maxDelivery: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restuarant, RestuarantMetaData>);
  static copyOf(source: Restuarant, mutator: (draft: MutableModel<Restuarant, RestuarantMetaData>) => MutableModel<Restuarant, RestuarantMetaData> | void): Restuarant;
}