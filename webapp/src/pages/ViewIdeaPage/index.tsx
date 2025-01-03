import { useParams } from 'react-router-dom'
import { type ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery(
    {
      ideaNick
    })

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>
  }

  if(!data.idea) {
    return <span>Idea not found</span>
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div>
        <div dangerouslySetInnerHTML={{__html:data.idea.text}}/>
      </div>
    </div>
  )
}
