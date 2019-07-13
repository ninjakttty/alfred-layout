const alfy = require('alfy')
const layouts = require('./layouts.json')

const results = alfy.inputMatches(layouts, 'name').map((item) => ({
  title: item.name,
  arg: item.key,
  uid: item.name,
  subtitle: item.display,
  autocomplete: item.display,
  icon: {
    path: `./icons/${item.name}.png`,
  },
}))

alfy.output(results)
