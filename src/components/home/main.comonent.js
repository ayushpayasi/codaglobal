import React , {Component} from 'react'
import axios from 'axios'
import Tables from './table.component'
import TextField from '@material-ui/core/TextField';

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            players :[]

        };
        
    }
    componentDidMount(){
        const op = axios({
            method: 'get',
            url: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
          }).then(response=>{this.setState({players:response.data})},error=> console.log("there is an error in fetching data"))
    }

    render(){
        const {players} = this.state
        console.log(players)
        return(

            <main>
                <div className ="container box">
                    <h6> Select playing 9</h6>
                    <TextField id="standard-basic" label="search"/>
                </div>
                <Tables players = {players}/>
            </main>
        )
    }
}