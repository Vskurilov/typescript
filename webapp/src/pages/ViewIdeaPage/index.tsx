import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }
  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description</p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi asperiores quas accusamus suscipit
          distinctio dolore, iure unde, officiis a laborum animi expedita aperiam, illo nesciunt eveniet rerum. Quis,
          quas saepe.
        </p>
      </div>
    </div>
  )
}
