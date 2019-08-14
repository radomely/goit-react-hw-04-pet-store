import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import pets from '../../pets.json';
import styles from './PetPage.module.css';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      pet: pets.find(pet => pet.id === getIdFromProps(this.props)),
    };
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    const redirect = pets.find(obj => obj.id === getIdFromProps(this.props));
    return (
      <>
        {redirect ? (
          <section className={styles.mainSection}>
            <button
              type="button"
              className={styles.button}
              onClick={this.handleClick}
            >
              Return
            </button>

            <p className={styles.title}> All about {pet.name} </p>

            <div className={styles.wrapper}>
              <img src={pet.image} alt="" className={styles.image} />

              <div className={styles.textWrapper}>
                <p>
                  <span> Age: </span> {pet.age}
                </p>

                <p>
                  <span> Gender: </span> {pet.gender}
                </p>

                <p>
                  <span> Color: </span> {pet.color}
                </p>

                <p>
                  <span> Breed: </span> {pet.breed}
                </p>
              </div>
            </div>

            <p className={styles.description}> {pet.description} </p>
          </section>
        ) : (
          <Redirect to="/NotFaundPage" />
        )}
      </>
    );
  }
}
