import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright, faRegistered } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-900 h-72 text-center flex items-center justify-center flex-col mt-10">
        <ul className="text-white text-lg">
          <li className="mt-5">
            <a 
              href="mailto:scott.martel06@qc.quincycollege.edu"
              className="hover:text-yellow-300 focus:text-yellow-300 outline-none"
            >
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="mr-5"
              />
              Contact Us
            </a>
          </li>
          <li className="mt-5">
            <a
              href="https://www.scottadev.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-300 focus:text-yellow-300 outline-none"
            >
              <FontAwesomeIcon 
                icon={faCopyright}
                className="mr-5"
              />
              Scott Martel
            </a>            
          </li>
          <li className="mt-5">
            <FontAwesomeIcon 
                icon={faRegistered}
                className="mr-5"
            />
            June 2022
          </li>
        </ul>
      </footer>
  )
}

export default Footer