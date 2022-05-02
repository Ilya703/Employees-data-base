import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'John S.', salary: 500, increase: false, id: 1},
        {name: 'Jay R', salary: 8400, increase: true, id: 2},
        {name: 'Sophia A.', salary: 3500, increase: false, id: 3},
        {name: 'Robert D.', salary: 4200, increase: true, id: 4},
        {name: 'Alice W.', salary: 1800, increase: false, id: 5}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;