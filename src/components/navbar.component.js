
import React ,{Component} from 'react'
import { Icon } from '@iconify/react';
import diceIcon from '@iconify/icons-mdi/dice';

export default class Navbar extends Component{

    constructor(props){
        super(props)
        this.state ={
            views: "select players"

        }

    }

    render(){
        const {views} = this.state
        return (<nav>
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">
            <div className="navbrand">
            <Icon icon={diceIcon} width="100" height="100" rotate="180deg"/>
            <Icon icon={diceIcon} width="100" height="100"rotate = "60deg" />
            </div>
            </a>
            <hr className ="nav-hr"></hr>
            <div className= "container">
                {views}
            </div>
        </nav>)
    }
}