import { zSighUpTrpcInput } from './input'
import { trpc } from '../../lib/trpc'
import { getPasswordHash } from '../../utils/getPasswordHash'

export const sighUpTrpcRoute = trpc.procedure.input(zSighUpTrpcInput).mutation(async ({ ctx, input }) => {
  const exUser = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  })

  if (exUser) {
    throw new Error('A user with this nickname already exists.')
  }
  await ctx.prisma.user.create({
    data: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  })
  return true
})
