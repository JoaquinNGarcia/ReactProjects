import React from 'react';
import {
    Image,
    ImageLogoContainer
} from './styled';

const ImageLogo = ( { image } ) => {

    return (
        <ImageLogoContainer>
                <Image>
                    <img 
                        src={ 'img/' + image }
                        width= "160"
                    />
                </Image>
        </ImageLogoContainer>
    );
};

export default ImageLogo;
