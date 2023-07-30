import React from 'react'
const pages = import.meta.glob('../pages/**/index.tsx')

export const routes = Object.entries(pages).map((data) => {
  const [path, page] = data as any[]
  const componentName = path.split('/').slice(-2, -1).pop().replace('.tsx', '')
  const routePath = componentName === 'Home' ? '/' : `${componentName.toLocaleLowerCase()}`
  const item = {
    path: routePath,
    component: React.lazy(page)
  }
  return item
})
