import React from 'react'



const withSuspense = (Component: React.ComponentType<{}>) => {
  return (
    (props: {}) => {
        return (
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
  )
}

export default withSuspense