import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PetsPage.module.css';
import pets from '../../pets.json';

export default class PetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petsList: [],
    };
  }

  componentDidMount() {
    this.setState({
      petsList: pets,
    });
  }

  render() {
    const { petsList } = this.state;
    return (
      <div>
        <h2 className={styles.title}> Available pets </h2>

        <ul className={styles.petCardList}>
          {petsList.map(pet => (
            <li className={styles.petCard} key={pet.id}>
              <Link to={`/pets/${pet.id}`}>
                <img src={pet.image} alt="" className={styles.image} />

                <h3 className={styles.name}> {pet.name} </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
