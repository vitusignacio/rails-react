import uuidv1 from 'uuid/v1';

import styles from './home.scss';

export default class ShoppingList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ShoppingListItems: [ 'meats', 'broccoli', 'apparatuses' ]
    }
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