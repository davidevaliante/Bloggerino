import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = (props) => {
    // visto che si arriva qui da router abbiamo automaticamente della roba in props
    console.log(props);
    return(
        <div>
            <h1>
                {/* Link per ClientSide Rendering*/}
                404 Not found! <Link to='/'>Home Page</Link>
            </h1>
            <button onClick={props.history.goBack}>Go to previous page</button>        
        </div>
    );
};

export default NotFound;