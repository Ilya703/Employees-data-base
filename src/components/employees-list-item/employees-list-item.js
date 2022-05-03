import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        };
    }

    onIncrease = () => {
        this.setState((state) => ({
            increase: !state.increase
        }));
    }

    like = () => {
        this.setState((state) => ({
            like: !state.like
        }));
    }

    render() {

        let {name, salary} = this.props;
        let {increase, like} = this.state;

        let itemClasses = "list-group-item d-flex justify-content-between";

        if (increase) {
            itemClasses += ' increase';
        }

        if (like) {
            itemClasses += ' like';
        }

        return (
            <li className={itemClasses}>
                <span className="list-group-item-label" onClick={this.like}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie" 
                        onClick={this.onIncrease}></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;