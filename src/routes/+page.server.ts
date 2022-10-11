import { PrismaClient } from '@prisma/client';
import { type Load, error, type Actions } from '@sveltejs/kit';

// this code can only run on the server
/** @type {import('./$types').PageServerLoad} */
export const load: Load = async ({ params }) => {
  console.log('Run on the server only');
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  if (!products) {
    throw error(404, 'No products found');
  }
  return products;
};

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    // todo action when the form is submitted
  },
};
