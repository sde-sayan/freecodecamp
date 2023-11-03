const NewQuoteButton = (props) => {
    
    return (
        <div className="new-quote-btn">
            <button id="new-quote" onClick={ props.onButtonClick }>New Quote</button>
        </div>
    )
}

export default NewQuoteButton;
