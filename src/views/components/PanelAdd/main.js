import React, {
    Component
} from 'react';
import {
    PanelAddContainer,
    Panel,
    ButtonPanel,
    Form,
    Label
} from './styled';

class PanelAdd extends Component {
yarn 
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: 1
        };
    }

    cancelAction = (e) => {
        const { onHide } = this.props;
        onHide();
    }

    onChangeTitle = (e) => {
        const { target: { value } } = e;
        this.setState({
            title: value
        });
    }

    onChangeImage = (e) => {
        const { target: { value } } = e;
        this.setState({
            image: value
        });
    }

    onChangeRating = (e) => {
        const { target: { value } } = e;
        const rating = parseInt(value);
        this.setState({
            rating
        });
    }

    createItem = (e) => {
        const { onAdd } = this.props;
        const { title, image, rating } = this.state;
        e.preventDefault();
        const newTitle = title;
        const newImage = image;
        const newRating = rating;
        onAdd({
            title: newTitle,
            image: newImage,
            rating: newRating
        });
        this.cancelAction();
    }

    render(){
        const { onHide } = this.props;
        return(
            <PanelAddContainer>
                <Panel>
                    <Form>
                        <Label>Modelo</Label>
                        <input
                            type="text"
                            name="title"
                            placeholder='Ingrese su modelo'
                            onChange={this.onChangeTitle}
                        />
                        <Label>Nombre de imagen</Label>
                        <input
                            type="text"
                            name="image"
                            placeholder='Ingrese su nombre'
                            onChange={ this.onChangeImage } />
                        <Label> Calificación </Label>
                        <select onChange={ this.onChangeRating }>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                        <ButtonPanel onClick={ this.createItem }>
                            Registrar auto
                        </ButtonPanel>
                        <ButtonPanel onClick={ onHide } >
                            Cancelar
                        </ButtonPanel>
                    </Form>
                </Panel>
            </PanelAddContainer>
        );
    }
}

export default PanelAdd;
