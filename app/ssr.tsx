import { StartServer } from '@tanstack/start'
import { createRouter } from './router'

export default function SSR() {
  const router = createRouter()
  
  return <StartServer router={router} />
}