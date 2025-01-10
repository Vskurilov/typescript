import { zSighInTrpcInput } from './input'
import { trpc } from '../../lib/trpc'
import { getPasswordHash } from '../../utils/getPasswordHash'

export const signInTrpcRoute = trpc.procedure.input(zSighInTrpcInput).mutation(async ({ ctx, input }) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  })
  if (!user) {
    throw new Error('Wrong nick or password')
  }
  return true
})
