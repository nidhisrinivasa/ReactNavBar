import React, { Component } from "react";
class List extends Component {
    state = {
        items: ["Cake", "Donut", "Apple", "Pizza"]
    };
    onDragStart = (e, index) => {
        this.draggedItem = this.state.items[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    }
    onDragOver = index => {
        const draggedOverItem = this.state.items[index];
        if (this.draggedItem === draggedOverItem) {
            return;
        }
        let items = this.state.items.filter(item => item !== this.draggedItem);

        items.splice(index, 0, this.draggedItem);

        this.setState({ items });

    }
    onDragEnd = () => {
        this.draggedIdx = null;
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                <h3> List of Items </h3>
                <ul>{this.state.items.map((item, index) => (
                    <li key={item} onDragOver={() => this.onDragOver(index)}>
                        <div className="drag"
                            draggable
                            onDragStart={e => this.onDragStart(e, index)}
                            onDragEnd={this.onDragEnd}>
                            DRAG
                        </div>
                        {item}</li>
                ))}
                </ul>
            </div>
        );
    }
}

export default List;
