import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import Lock from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TutorialDataService from "../services/tutorial.service";





export default class login1 extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user:"",
            pw:"",
            back_user:"",
            back_pw:""
        };
      }
      handleChange(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({user: event.target.value});
        //alert(event.target.value);
      }
      handlepwChange(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({pw: event.target.value});
        
        //alert(event.target.value);
      }
      // form onSubmit 事件處理函式
      handleSubmit(event) {
        if(true){
            alert('登入 ' + this.state.user+'\n');
        
        //alert(this.back_user.pw);
        
        }
        else{
        }
        event.preventDefault();
      }
      
  setActiveTutorial(user) {
    this.setState({
        back_user: user,
      //currentIndex: index
    });
    alert(this.state.back_user);
  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="submit-form" >
                <IconButton color="primary" aria-label="Add a Lock icon"><Lock /></IconButton>
                <br></br>
                <TextField id="outlined-basic" value={this.state.value} onChange={this.handleChange} label="Id" variant="outlined" />
                <br></br>
                <p></p>
                <TextField id="outlined-basic"  label="Password" variant="outlined" />
                <br></br>
                <p></p>
                <input type="submit" value="Submit"  />
            </div>
            </form>
        );
    }
}
/*<Button variant="contained" color="primary">SIGN IN</Button> */