import React from 'react'

const InputForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className=" bg-emerald-600">
            <form onSubmit={(e) => handleSubmit(e)} className="container mx-auto flex flex-col w-2/3">
                <label className="mt-2">Name: </label>
                <input type="text" name="name" className="rounded px-2 py-1.5"/>
                <label className="mt-2">Ingredients: </label>
                <input type="text" name="ingredient" className="rounded px-2 py-1.5"/>
                <label className="mt-2">Directions: </label>
                <textarea name="directions" className="rounded px-2 py-1.5 resize-none" />
                <label className="mt-2">Notes: </label>
                <textarea name="notes" className="rounded px-2 py-1.5 resize-none" />
                <button 
                    type="submit"
                    className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors font-bold rounded px-5 py-1.5 my-3"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputForm
