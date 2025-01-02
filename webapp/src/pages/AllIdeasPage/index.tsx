import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div>
      <h1>Ideanick</h1>
      {data.ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2><Link to={getViewIdeaRoute({ideaNick: idea.nick})}>{idea.name}</Link></h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
