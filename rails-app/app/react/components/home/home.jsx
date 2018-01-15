import ShoppingList from './shopping_list';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ShoppingList name="Today" />, 
    document.querySelector('#content')
  )
})
