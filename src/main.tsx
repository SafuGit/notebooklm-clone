import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root'
import App from './pages/App'
import PdfPage from './pages/PdfPage'
import PdfProvider from './providers/PdfProvider'

const routes = createBrowserRouter([
  {path: '/', element: <PdfProvider> <Root /> </PdfProvider>, children: [
    {index: true, Component: App},
    {path: '/pdf', Component: PdfPage}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </StrictMode>,
)
