import { useRef, useEffect } from 'react'
import ReactDom from 'react-dom'

const portalRoot = document.getElementById('portal')

const Portal = props => {
  const container = useRef(document.createElement('div'))

  useEffect(() => {
    portalRoot.appendChild(container.current)

    return () => {
      portalRoot.removeChild(container.current)
    }
  }, [])

  return ReactDom.createPortal(props.children, container.current)
}

export default Portal
