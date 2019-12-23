import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { useAmendable } from '@amendable/core'

export default forwardRef(({ component = 'div', children, ...rest }, ref) => {
  const { css, component: styledComponent, ...props } = useAmendable({
    component,
    ...rest,
  })

  const Component = styled[styledComponent](css);

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
})
