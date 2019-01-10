import React, { Component } from 'react'
import Box from 'react-inln'

const Gutter = ({ width, ...props }) => (
  <Box flex="1" maxWidth={width} {...props}></Box>
)

class Row extends Component {
  fillColumns = columns => columns && columns.props ? [columns] : (new Array(12).fill()).reduce((acc, value, i, arr) => {
    if (columns[i+1]) return acc.concat([{ component: columns[i+1], span: 1 }])
    else {
      const latest = acc.slice(-1)[0]
      latest.span++
      return acc
    }
  }, [{ component: '', span: 1 }])

  render() {
    const {
      columnWidth = '85.33px',
      gutterWidth = '32px',
      children,
      gutterProps,
      columnProps,
      ...props
    } = this.props

    const columns = this.fillColumns(children)

    return (
      <Box display="flex" flexWrap="wrap" flexDirection_s="column" alignItems_s="center" {...props}>
        { columns.map(({ component, span }, ci) => [
          <Gutter key={ci+1} width={this.gutterWidth} {...gutterProps} />,
          <Box key={-ci} flex={span} {...columnProps}>{component}</Box>
        ])}
      </Box>
    )
  }
}

export default Row