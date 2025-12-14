import React from 'react';

const Task = (props) => {
    // Function to get priority styling
    const getPriorityStyle = (priority) => {
        switch(priority) {
            case 'high':
                return { color: '#ff4757', fontWeight: 'bold' };
            case 'medium':
                return { color: '#ffa502', fontWeight: 'bold' };
            case 'low':
                return { color: '#2ed573', fontWeight: 'bold' };
            default:
                return { color: '#747d8c' };
        }
    };

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p style={getPriorityStyle(props.priority)}>
                Priority: {props.priority ? props.priority.toUpperCase() : 'NONE'}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;
