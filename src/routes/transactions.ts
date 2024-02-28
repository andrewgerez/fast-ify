import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/start', async () => {
    const transactions = await knex('transactions')
      .where('amount', 500)
      .select('*')

    return transactions
  })
}
