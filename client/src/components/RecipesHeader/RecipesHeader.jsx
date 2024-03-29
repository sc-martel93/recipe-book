import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDoorClosed, faEnvelope, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import { logout } from "../../state/actions/users";
import InputForm from "./InputForm/InputForm";
import SearchBar from "./SearchBar/SearchBar";


const HomeHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const loggedIn = useSelector((state) => state.user.isLoggedIn);

  const [isCreating, setIsCreating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateRecipe = () => {
    setIsCreating(isCreating => !isCreating);
    setIsOpen(isOpen => !isOpen);
  }

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("RECIPE_USER");
    navigate("/");
  }

  return (
    <header
      id="navBar"
      className="bg-primary shadow-lg shadow-slate-600"
    >
      <nav className="max-w-3xl w-3/4 mx-auto flex justify-between items-center h-16">
        <h1 className="text-yellow-400 text-4xl">Recipes</h1>

        <Menu 
          right 
          noOverlay
          disableAutoFocus
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          {loggedIn ?
          <>
            <button
              onClick={handleCreateRecipe}
              title="Create Recipe"   
              className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider focus:tracking-wider outline-none focusmt-5"
            >
              {isCreating ?(
                <>
                  <FontAwesomeIcon 
                    icon={faXmarkCircle} 
                    className="mr-5" 
                  />
                  Close Form
              </>
              )
              : (
                <>
                  <FontAwesomeIcon 
                    icon={faPlusCircle}
                    className="mr-5"
                  />
                  Create Recipe
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              title="Logout"
              className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider focus:tracking-wider outline-none mt-5"
            >
              <FontAwesomeIcon 
                icon={faCircleRight} className=
                "mr-5" 
              />
              Logout 
            </button>
          </>
          :
            <button
              onClick={() => navigate("/")}
              title="Login"
              className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider focus:tracking-wider outline-none mt-5"
            >
              <FontAwesomeIcon 
                icon={faDoorClosed} 
                className="mr-5" 
              />
              Login
            </button>
          }
          <a 
            href="mailto:scmartel2022@gmail.com"
            className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider focus:tracking-wider outline-none mt-5"
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="mr-5"
            />
            Contact Us
          </a>
          <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Menu>
      </nav>

      {isCreating && <InputForm setIsCreating={setIsCreating} />}
    </header>
  );
};

export default HomeHeader;
