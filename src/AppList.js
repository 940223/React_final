import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {

    SubmitDelete (id) {
       //console.log(id);
        this.props.DeleteItemTop(id);
      }
    
      ChangeDone (id) {
        this.props.ChangeCompleteTop(id);
      }

  render () { 
    console.log(this.props.data);
    var value = this.props.choosevalue;
    //var deleteFlag = this.props.data["deleteFlag"];
    
    const a = this.props.data.map(({id, text, complete, deleteFlag}, index) => {
        if (value == '1' && deleteFlag !== true) {
            return  <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
        }
  
        if (value == '2' && complete === false && deleteFlag !== true) {
            return  <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
        }
  
        if (value == '3' && complete === true && deleteFlag !== true) {
            return  <AppTodos 
                            key={index} 
                            id={id} 
                            text={text} 
                            complete={complete} 
                            ChangeCompleteItem={this.ChangeDone.bind(this)}                         
                            DeleteItem={this.SubmitDelete.bind(this)}
                      />
        }
     })

   
    

    return (
      <div> { a } </div>
    )
  }
}

export default AppList;