import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }    

    onUpdate = (e) => {
        const {onUpdateData} = this.props;

        this.setState({
            term: e.target.value
        });

        onUpdateData(e.target.value);
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdate}/>
        )
    }
}

export default SearchPanel;