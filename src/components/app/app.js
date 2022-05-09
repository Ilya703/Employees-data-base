import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John S.', salary: 500, increase: false, rise: false, id: 1},
                {name: 'Jay R', salary: 8400, increase: true, rise: true, id: 2},
                {name: 'Sophia A.', salary: 3500, increase: false, rise: false, id: 3},
                {name: 'Robert D.', salary: 4200, increase: true, rise: false, id: 4},
                {name: 'Alice W.', salary: 1800, increase: false, rise: false, id: 5}
            ]
        };
        this.maxIndex = 5;
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex((item) => item.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                //data: newArr
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        if (name.length >= 3 && salary !== '') {
            this.setState(({data}) => {
                const item = {name, salary, increase: false, rise: false, id: this.maxIndex++};
    
                return {
                    data: [...data, item]
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            const newArr = data.map(i => {
                if (i.id === id) {
                    return {...i, [prop]: !i[prop]};
                } else {
                    return i;
                }
            }); 

            return {
                data: newArr
            };
        });
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.onDelete}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    addItem = {this.addItem}/>
            </div>
        );
    }
}

export default App;