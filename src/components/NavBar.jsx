import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    return (
        <nav>
            <h1>Recipes</h1>
            <button>Create</button>
            <form>
                <input type="text" />
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </nav>
    )
}

export default NavBar
