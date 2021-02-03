import React,{useState, useContext} from 'react'
import githubContext from '../../Context/Github/githubContext'
import alertContext from '../../Context/Alert/alertContext'

const Search = () => {
    const context = useContext(githubContext);
    const context_alert = useContext(alertContext);
    const[text,setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '')
        {
            context_alert.setAlert('Please enter something...','alt');
        }
        else
        {
            context.userSearch(text);
            setText('');
        }    
    }

    const onChange = (e) => {
        setText(e.target.value); 
    };

    return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search users..." 
                    autoComplete="off" 
                    value={text}
                    onChange={onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block btn-new"/>
                </form>
                
                {context.default_ && (<button className="btn btn-light btn-block btn-new" style={{marginBottom:'20px'}} onClick={context.clearUsers}> Clear </button>) 
                }
            </div>
    )
}

export default Search
