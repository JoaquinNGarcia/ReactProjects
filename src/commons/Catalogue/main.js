import React, {
    Component
} from 'react';
import {
    CatalogueContainer
} from './styled';
import {
    object
} from 'prop-types';
import List from '../../views/components/List/main';
import Menu from '../../views/components/Menu/main';

class Catalogue extends Component {

    constructor(props){
        super(props);
        this.state = {
            cars:[
                {id:0, image: 'Ford1.jpg', title: 'Ford Fiesta ST'},
                {id:1, image: 'Renault1.jpg', title: 'Renault Sandero RS'},
                {id:2, image: 'Peugeot1.jpg', title: 'Peugeot 208'},
                {id:3, image: 'Peugeot2.jpg', title: 'Peugeot 208 GTI'},
                {id:4, image: 'Volkswagen1.jpg', title: 'Volkswagen Gol'},
                {id:5, image: '', title: 'Volkswagen Polo'},
                {id:6, image: 'FordFocusRS.jpg', title: 'Ford Focus RS'},
                {id:7, image: 'KoenigseggAgeraR.jpg', title: 'Koenigsegg Agera R'},
                {id:8, image: 'MiniJohnCooperWorks.jpg', title: 'Mini John Cooper Works'},
                {id:9, image: 'Toyota2.jpg', title: 'Toyota Yaris GR'} 
            ],
            copyCars: []
        };
    }

    componentDidMount() {
        this._handleInitCars();
    }

    _handleAddItem = (e) => {
        const { cars } = this.state;
        let temp = [...cars];
        const id = temp[temp.length-1].id + 1;
        e['id'] = id;
        temp.push(e);
        this.setState({
            cars: [...temp]
        });
        this._handleInitCars();
    }

    _handleInitCars = () => {
        this.setState((state, props) => ({
            copyCars: [...state.cars]
        }));
    }

    _handleOnSearch = (e) => {
        const { cars } = this.state;
        if (e === '') {
            this.setState({copyCars: [...cars]});
        } else {
            const temp = [...cars];
            let res = [];
            temp.forEach(elem => {
                elem.title.toLowerCase().indexOf(e) > -1 && res.push(elem);
            });
            this.setState({
                copyCars: [...res]
            });
        }
    }

    _handleRemove = (id) => {
        const { cars } = this.state;
        let temp = [...cars];
        const res = temp.filter(elem => elem.id !== id);
        this.setState({
            cars: [...res]
        });
        this._handleInitCars();
    }

    render () {
        const { copyCars } = this.state;
        return (
            <CatalogueContainer>
                <Menu
                    onAdd={ this._handleAddItem }
                    onSearch={ this._handleOnSearch }
                    title="Autos"
                />
                <List
                    items={ copyCars }
                    onRemove={ this._handleRemove }
                />
            </CatalogueContainer>
        );
    }
}

Catalogue.propTypes = {
    history: object
};

export default Catalogue;