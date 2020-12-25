import {
    MenuContainer,
    Subcontainer,
    Logo,
    Searches,
    // Actions,
    // Button
} from './styled';
import React, {
    Component
} from 'react';
import Search from '../Search/main';
// import PanelAdd from '../PanelAdd/main';
import { bool } from 'prop-types';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            newItemPanel: false
        };
    }

    // _handleAdd = () => {
    //     this.setState({
    //         newItemPanel: true
    //     });
    // }

    // _handleOnCancel = () => {
    //     this.setState({
    //         newItemPanel: false
    //     });
    // }

    render(){
        const {
            title,
            // onAdd,
            onSearch
        } = this.props;
        // const { newItemPanel } = this.state;
        return(
            <MenuContainer>
                <Subcontainer>
                    <Logo>
                        { title }
                    </Logo>
                    <Searches>
                        <Search onSearch={ onSearch } />
                    </Searches>
                    {/* <Actions>
                        <Button onClick={ this._handleAdd } >
                            + Añadir nuevo auto
                        </Button>
                    </Actions> */}
                </Subcontainer>
                {/* {
                    !!newItemPanel
                        ? <PanelAdd
                            onHide={ this._handleOnCancel }
                            onAdd={ onAdd } />
                        : ''
                } */}
            </MenuContainer>
        )
    }
}

Menu.propTypes = {
    newItemPanel: bool
};

export default Menu;
