import { rootRouteId } from '@tanstack/react-router'  
import { Route as indexRoute } from './routes/index'  
  
export const routeTree = rootRouteId.children({  
  indexRoute,  
})  
