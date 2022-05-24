import React from "react"

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes to Yourself</h1>
            <button 
                className="save"
                onClick={() => 
                    handleToggleDarkMode(
                        (prev) => !prev)}>
                Toggle Mode
            </button>
        </div>
    )
}

export default Header