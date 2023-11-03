import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Quote = (props) => {
    return (
        <div className="quote-area">
            {/* <i className="fas fa-quote-left"></i> */}
            <FontAwesomeIcon icon="fa-solid fa-quote-left" />
            <p className="quote" id="text">{ props.quote }</p>
            {/* <i className="fas fa-quote-right"></i> */}
            <FontAwesomeIcon icon="fa-solid fa-quote-right" />
        </div>
    )
}

export default Quote;