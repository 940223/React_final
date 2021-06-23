import React from 'react';
//import uuid from 'uuid';

var styles = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top'
  }
}

class AppForm extends React.Component {
    handleSubmit (event) {
        event.preventDefault()
        let text = this.refs.text.value
        
        if (!text.trim()) {
          alert("Input can't be null")
          return
        }
        
        let id = Math.floor(Math.random()*10000);
        this.props.AddTodoItem({id,text,complete:false, deleteFlag:false});
      }
    
      render () {
        return (
          <form 
                  className='ui reply form' 
                  onSubmit={this.handleSubmit.bind(this)}>
            <div 
              className='field' 
                style={styles.title}>
              <input type='text' placeholder='Add a new todo....' ref='text' />
            </div>
            <button type='submit' className='ui blue button'>
                Add
            </button>
          </form>
        )
      }
    }
    
    export default AppForm;