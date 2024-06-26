import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    const homeLinkRef = useRef(null);
    const thingsToReadLinkRef = useRef(null);
    const interestsPageLinkRef = useRef(null);

    useEffect(() => {
        homeLinkRef.current.focus();
    }, [])

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                homeLinkRef.current.focus();
                break;

            case "ArrowRight":
                thingsToReadLinkRef.current.focus();
                break;
            
            case "ArrowDown":
                thingsToReadLinkRef.current.focus();
                break;
            
            default:
                break;
        }
    };

    const focusOnThingsToReadLink = () => {
        thingsToReadLinkRef.current.focus();
    };

    const focusOnInterestsLink = () => {
        interestsPageLinkRef.current.focus();
    }

    return (
        <nav onKeyDown={handleKeyDown}>
            <table>
                <th><Link to="/home" ref={homeLinkRef}>Home</Link></th>
                <th><Link to="/things-to-read" ref={thingsToReadLinkRef}>Things To Read</Link></th>
                <th><Link to="/interests-page" ref={interestsPageLinkRef}>My Favorite TV Shows</Link></th>
            </table>
        </nav>
    );
}

export default NavigationBar;