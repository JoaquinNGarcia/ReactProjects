import {
    func,
    object
} from 'prop-types';
import {
    ListContainer
} from './styled';
import Item from '../Item/main';
import React from 'react';

const List = ({
    items,
    // onRemove,
    // onUpdateRating,
}) => {

    return (
        <ListContainer>
            {
                items.map(({
                    id,
                    title,
                    image
                    // rating
                }) =>
                    <Item 
                        id={ id } 
                        image={ !!image ? image : 'unnamed.jpg' }
                        key={ id } 
                        title={ title } 
                        // rating={ rating } 
                        // onRemove={ onRemove }
                        // onUpdateRating={ onUpdateRating }
                    />
                )
            }
        </ListContainer>
    );
};

List.propTypes = {
    items: object
    // onRemove: func,
    // onUpdateRating: func
};

export default List;
