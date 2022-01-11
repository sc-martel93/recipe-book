import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import InputForm from './InputForm/InputForm'

const NavBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="h-16 bg-emerald-900 ">
            <nav className="h-full container mx-auto max-w-6xl flex justify-around items-center">
                <h1 className="text-slate-200 text-4xl">Recipes</h1>
                <button 
                    className="bg-slate-300 hover:bg-cyan-600 transition-colors font-bold rounded px-5 py-1.5"
                >
                    Create
                </button>
                <form onSubmit={e => handleSubmit(e)} className="">
                    <input type="text" className="rounded px-2 py-1.5" />
                    <button
                        type="submit"
                        className="bg-slate-300 hover:bg-cyan-600 transition-colors rounded px-2 py-1.5"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </nav>
            <InputForm />
        </div>
    )
}

export default NavBar
