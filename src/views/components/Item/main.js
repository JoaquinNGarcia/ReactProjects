import React, {
    Component
} from 'react';
import {
    ItemContainer,
    Image,
    Title,
    // Rating,
    // Actions,
    // Label,
    // ButtonItem
} from './styled';
import {
    array,
    string
} from 'prop-types';
class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            // rating: 1,
            // stars: []
        }
    }

    componentDidMount() {
        const {
            id,
            title,
            image,
            // rating
        } = this.props;
        this.setState({
            id,
            title,
            image,
            // rating: parseInt(rating),
            // start: Array(parseInt(rating)).fill(1)
        });
    }

    // _handleOnRemove = (e) => {
    //     const { id, onRemove } = this.props;
    //     onRemove(id);
    // }

    // _handleOnChangeRating = (e) => {
    //     const { onUpdateRating } = this.props;
    //     const { target: { value } } = e;
    //     const { id, title, image } = this.state;
    //     const rating = parseInt(value);
    //     this.setState({
    //         rating,
    //         stars: Array(parseInt(value)).fill(1)
    //     });
    //     onUpdateRating({
    //         id,
    //         title,
    //         image,
    //         rating
    //     })
    // }

    render() {
        const {
            image,
            title,
            // stars,
            // rating
        } = this.state;
        return(
            <ItemContainer>
                <Image>
                    <img
                        src={ `${'img/' + image }` }
                        width="100%"
                    />
                </Image>
                <Title>
                    { title }
                </Title>
                {/* <Rating>
                    {
                        // stars.map(elem => <img src='img/star.png' width='32' />)
                    }
                </Rating>
                <Label>Calificación</Label>
                <select
                    onChange={ this._handleOnChangeRating }
                    value={ rating }
                >
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
                <Actions>
                    <ButtonItem onClick={ this._handleOnRemove } >
                        Eliminar
                    </ButtonItem>
                </Actions> */}
            </ItemContainer>
        )
    }

}

Item.propTypes = {
    title: array,
    image: array,
    rating: array,
    stars: string
};

export default Item;
