import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, width, heigth, borderRadius, marginTop, marginLeft, fontSize }) => {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color,
            width: width, 
            height: heigth,
            borderRadius: borderRadius,
            marginTop: marginTop,
            marginLeft: marginLeft,
            fontSize: fontSize,
            }}
            
            className='btn'
        >
            {text}
        </button>

    )
}

Button.defautProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;