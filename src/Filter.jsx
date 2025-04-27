import PropTypes from 'prop-types';

export default function Filter({ todos }) {
    const length = todos.length;
    return (
        <>
            <div><span className="filterItem"> {length} items left </span></div>
            {/* <div>
                <span className="filterItem"> All </span>
                <span className="filterItem"> Active </span>
                <span className="filterItem"> Completed </span>
            </div>
            <div>
                <span className="filterItem"> Clear Completed </span>
            </div> */}
        </>
    )
}

Filter.propTypes = {
    todos: PropTypes.func.isRequired
  };