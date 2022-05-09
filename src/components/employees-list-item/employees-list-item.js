import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    render() {

        let {name, salary, onDelete, onToggleProp, increase, rise} = this.props;

        let itemClasses = "list-group-item d-flex justify-content-between";

        if (increase) {
            itemClasses += ' increase';
        }

        if (rise) {
            itemClasses += ' like';
        }

        return (
            <li className={itemClasses}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie" 
                        onClick={onToggleProp}
                        data-toggle="increase"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;