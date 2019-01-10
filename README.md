# react-row 〰
Define gutter and column width and set indexed children

## Usage
```sh
$ npm i react-row
```

```js
import Row from 'react-row'

export default () => (
  <Row>{{
    3: <h2>Hi! I am on column 3</h2>,
    6: <h2>Hi! I am on column 6</h2>,
    8: <h2>Hi! I am on column 8</h2>,
  }}</Row>
)
```

## Props
 - **{ ...css rules }**: because it uses [react-inln](https://github.com/joselcvarela/react-inln) you can apply css rules with breakpoints directly in props. Check project to see more.
 - **columnWidth** - [String] Define column width. Default value is '85.33px'
 - **gutterWidth** - [String] Define gutter width. Default value is '32px'
 - **gutterProps** - [Object] [react-inln](https://github.com/joselcvarela/react-inln) props
 - **columnProps** - [Object] [react-inln](https://github.com/joselcvarela/react-inln) props

## Contributing
- Fork it
- Create a branch with proper name in kebab-case (eg. fix-something)
  > Optional: Create React app in other folder and install this package with npm link or npm i path/to/react-inln
- Create a PR describing what you did
- Grab a coffee

## Author
[Jose Varela](https://github.com/joselcvarela)\
(joselcvarela@gmail.com)
