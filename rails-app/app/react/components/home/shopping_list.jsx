import uuidv1 from 'uuid/v1';
import axios from 'axios';

import styles from './home.scss';

export class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    let self = this;

    this.state = {
      ShoppingListItems: []
    }

    axios.get('/home/shopping_items')
    .then(function (response) {
      self.setState({
        ShoppingListItems: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  itemClicked(item) {
    alert(item);
  }

  render() {
    return (
      <div className={styles.Wrapper}>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          { this.state.ShoppingListItems.map((item) => 
            <li key={uuidv1()} onClick={this.itemClicked.bind(this, item)}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}