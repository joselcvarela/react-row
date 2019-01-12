import React, { Component } from 'react'
import Box from 'react-inln'

class Row extends Component {
  fillColumns = columns => columns && columns.props ? [columns] : (new Array(12).fill()).reduce((acc, value, i, arr) => {
    if (columns[i+1]) return acc.concat([{ component: columns[i+1], span: 1 }])
    else {
      const latest = acc.slice(-1)[0]
      i > 0 && (latest.span += 1)
      return acc
    }
  }, [{ component: '', span: 1 }])

  render() {
    const {
      gutterWidth = '32px',
      children,
      gutterProps,
      columnProps,
      ...props
    } = this.props

    const columns = this.fillColumns(children)

    return (
      <Box display="flex" {...props}>
        { columns.map(({ component, span }, ci) => [
          <Box key={ci} flex={span} paddingLeft={gutterWidth} {...columnProps}>
            {component}
          </Box>
        ])}
      </Box>
    )
  }
}

export default Row
