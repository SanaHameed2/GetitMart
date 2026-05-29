import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1>GetIt Mart</h1>
      <p>Welcome to GetIt Mart! Your one-stop shop.</p>
    </div>
  )
}