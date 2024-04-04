import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {FaChevronUp} from "react-icons/fa"

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Div>
            {visible && (
                <a href="#">
                    <FaChevronUp />
                </a>
            )}
        </Div>
    );
}

const Div = styled.div`
    max-width: 100vw; 
    a{
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: #2d69fd;
        padding: 1rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;
        z-index: 25;
        svg{
            color: white;
            font-size: 1.3rem;
        }
        @media screen and (min-width: 280px) and (max-width: 1080px) {
            left: 75vw;
            right: initial;
        }
    }
`;

export default ScrollToTop;
