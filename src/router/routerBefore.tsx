import { useRoutes, Navigate } from 'react-router-dom'
import { routes } from './routes'

// 拦截
const RouterBeforeEach = (props: { route: any; children: any }) => {
  // 
  return <div>{props.children}</div>
}

const renderRoutes = (routes: any[]) => {
  return routes.map((item) => {
    const route: any = { meta: item.meta, path: item.path }
    if (item.component) {
      // element 要接收react.element类型 item.component 是对象 所以要转一下
      const { component: Component } = item;
      // 看着里看着里
      route.element = (
        <RouterBeforeEach route={item}>
          <Component />
        </RouterBeforeEach>
      )
    }
    if (item.children) {
      route.children = renderRoutes(item.children)
    }
    if (item.redirect) {
      route.element = <Navigate to={item.redirect} />
    }
    return route
  })
}

export function Router() {
  const appRoutes = renderRoutes(routes)
  return useRoutes(appRoutes)
}
