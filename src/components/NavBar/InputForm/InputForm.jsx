import React from 'react'

const InputForm = () => {
    return (
        <form className="container mx-auto flex flex-col w-2/3">
            <label>Name: </label>
            <input type="text" name="name" className="rounded px-2 py-1.5"/>
            <label>Ingredients: </label>
            <input type="text" name="ingredient" className="rounded px-2 py-1.5"/>
            <label>Directions: </label>
            <textarea name="directions" className="rounded px-2 py-1.5 resize-none" />
            <label>Notes: </label>
            <textarea name="notes" className="rounded px-2 py-1.5 resize-none" />
        </form>
    )
}

export default InputForm
