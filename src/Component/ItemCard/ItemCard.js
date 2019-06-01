import React, { Component } from 'react';
import './ItemCard.css';
import PropTypes from 'prop-types';
import { getStoryInfo } from '../../Services/api';

const image = `https://cdnvn.truyenfull.vn/cover/eJwN0UkWY0AAANAT1euYCoteSAxBgpjZeGaiDEWMp-_-V_ioof7w1LHHXn2xD381U46Lal5razGL4MU3AKcNL7LrcgrcQ0bi8xPrYBZv7aqJksgazmTJE9L1CTHG4GJHesfVkeUYY6txfZbdyL2we0KlOhAJrOw3HXXWpmpfj-1GmslHe8nLBwt-qqeC5U3qLakc_Uj2R2nl2eHqsVuUe1H5R0FJiMHOnq6NHC6URnXLMWfKEtktJvux3yHxOtyP8DV083nYmpqm9BVrxhJVGswuknciIHy8pMqjhYmGr-dXRRf6kFHkrmU7fYfzoKCjvrv71uK4eK8_00kLZSKDGUSq_vb97hfutjMGT-xcabCkesX9XKXya5k9zseIsKri2dqWULRr0Zu_0MJzx63HZFnaqxW4F_2thhpcgColyQzY0-Xcqj6yLlkPskSEKb5HEJchWj8lk2HYsy0v0Vf7bfDNSNWYZy2Cdr034Rw0Y8BLU7P-ak8COcSeBfIkQSLITTND1HN6pafyMJheqe_SWMHxVi7Jdb8DOMRSZBWRM0Csh6owXHYJaCc_GmPaS2JH5vDKqyiywfl_Dgm8-AalIENh7r-xLALLmLASwgKIUCKL20wdDbeNfr151zdwP_Hi7Gf0g5X9mkkBtsgc1zwORK20QHgyA4jfZ9DMPD-3VjIWd5gLHj3c6a2aH_aCfj8tlaUntfJYKqe43BIkDjV02KWne42N_u4kwYCGIsl_urPslQ==/doc-truyen-choc-tuc-vo-yeu-mua-mot-tang-mot-full.jpg`

export default class ItemCard extends Component {
  goToDetail = async () => {
    alert('hmmm');
  }

  render() {
    return (
      <button className="Card-container"
        onClick={this.goToDetail}
        style={{ backgroundImage: `url(${this.props.poster})` }}
        // style={{ backgroundImage: `url(${image})` }}
      >
        <div className="Card-footer">
          <div className="Title">
            {this.props.title}
          </div>
          <div className="Author">
            {this.props.author}
          </div>
        </div>
      </button>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  poster: PropTypes.string,
  // latestChap: PropTypes.number,
}