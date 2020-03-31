import React from "react";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  // Adding an item to the list
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      }
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      });
    }
  }

  // Deleting an item from the list
  deleteItem(id) {
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this.setState({
      list: updatedList
    });
  }

  updateInput(input) {
    this.setState({ newItem: input })
  }


  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="Logo" width="170" height="100" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item ....<br />
          <input
            type="text"
            name=""
            placeholder="Write to do ...."
            className="input-text"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >Add ToDo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => { }}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Record youtube video
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
