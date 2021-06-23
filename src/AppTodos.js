import React from 'react'; 
import Delete from '@material-ui/icons/DeleteForever';
import DoneAll from '@material-ui/icons/DoneAll';

var styles = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative'
  },
  'delete': {
    marginLeft: '0px',
    marginRight: '0px'
  }
}

class AppTodos extends React.Component {

    handleChangeComplete () {
        let newComplete = this.props;
        this.props.ChangeCompleteItem(this.props.id);
    }
    
    handleDelete () {
        this.props.DeleteItem(this.props.id);
    }

  render () {
    return (
      <div className='comment'>
        <div className='content'>

          <DoneAll className='author' 
                style={styles.delete}
                onClick={this.handleChangeComplete.bind(this)}>
                {this.props.complete ? '已完成' : '未完成'}
          </DoneAll>


          <span className='author' 
                style={styles.title} 
                >
              {this.props.text}
              <span className={this.props.complete ? 'line' : ''} />
          </span>
          

          <Delete className='ui blue button' 
                style={styles.delete} 
                color="secondary"
                style={{ fontSize: 21 }}
                onClick={this.handleDelete.bind(this)}>
                刪除
          </Delete>  
          
        </div>
      </div>
    )
  }
}

export default AppTodos;