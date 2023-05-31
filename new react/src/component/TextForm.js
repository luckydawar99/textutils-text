import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")

    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Converted to clear!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.vale);
        document.getSelection().removeAllRanges()
        props.showAlert("Converted to copy!", "success")


    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove to extraspace!", "success")

    }
    const [text, setText] = useState(' ')
    return (

        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> Upercase Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}> Lowercase Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} word and {text.split(" ").filter((element) => { return element.length !== 0 }).length} character</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

