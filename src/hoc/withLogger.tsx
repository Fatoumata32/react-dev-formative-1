import { useEffect, type ComponentType, type JSX } from 'react'

function withLogger<P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>,
  componentName?: string,
) {
  const name = componentName ?? Component.displayName ?? Component.name ?? 'Component'

  function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${name} mounted`)

      return () => {
        console.log(`${name} unmounted`)
      }
    }, [])

    return <Component {...props} />
  }

  LoggedComponent.displayName = `withLogger(${name})`

  return LoggedComponent
}

export default withLogger