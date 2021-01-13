import React, {Component} from 'react'
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import Navbar from '../navbar.component'
import { Avatar } from '@material-ui/core';

class Tables extends Component{


    constructor(props){
        super(props);
        this.state={
            selected_id : [],
            selected_profile:[]
        
        }
    }

    getid = (id,key)=>{
        console.log(id)
        console.log(key)
        if (this.state.selected_id.includes(id)){
            this.setState({selected_id:this.state.selected_id.filter(atr => atr != id)}) 
            this.setState({selected_profile:this.state.selected_profile.filter(atr => atr.Name !== key.Name)})   
        }
        else{
        this.setState({selected_id:this.state.selected_id.concat(id)})
        this.setState({selected_profile:this.state.selected_profile.concat(key)})
        }
    
    }

    render(){
        const {selected_id,selected_profile} = this.state
        console.log(selected_id)
        console.log(selected_profile)
        return(
            <div>
                
                <div className="table-responsive tableFixHead table-sm">
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr className="table-row" >
                                <th> SELECT</th>
                                <th> PLAYER NAME </th>
                                <th> <AttachMoneyRoundedIcon style={{ color: 'yellow' }}/>PRICE</th>
                                <th> <PersonOutlinedIcon/> AVATAR</th>
                                <th> BET </th>
                                <th> WINS </th>
                                <th> LOST </th>
                                </tr>        
                            </thead>
                            <tbody>        
                            {this.props.players.map(atr=>{return(<tr className="table-row">
                            <td id ={atr.Name}><input type ="checkbox" onClick={() =>this.getid(atr.Name,{Name:atr.Name,Avatar: atr.['Profile Image'], Price : atr.Price})} ></input></td>
                                <td>{atr.Name}</td>
                                <td>{atr.Price}</td>
                                <td><img src={atr['Profile Image']} style={{widht:"50px",height:"50px"}}></img></td>
                                <td>{atr.Bet}</td>
                                <td></td>
                                <td></td>
                                 </tr>)})}

                            </tbody>
                        </table>
            </div>
            
      <Navbar selects = {selected_profile} />
            </div>
        )
    }

}
export default Tables