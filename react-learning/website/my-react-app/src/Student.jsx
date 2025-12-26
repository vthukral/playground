import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>Is Student: {props.isStudent ? "true": "false"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    grade: PropTypes.string,
    isStudent: PropTypes.bool
};
Student.defaultProps = {
    name: "John Doe",
    age: 18,
    grade: "C",
    isStudent: true
};

export default Student;