import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <input className="add_thing" type={'text'} value={this.props.thing} placeholder={'Add a thing to do'}></input>
        <button className="adb_Button" onClick={this.props.FuncAdd('wwwww')}>Add thing</button>

      </div>
    );

  }

}

export default Todo
