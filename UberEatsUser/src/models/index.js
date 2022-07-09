// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dish, Restuarant } = initSchema(schema);

export {
  Dish,
  Restuarant
};