import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UerImg src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/54142997_1319516998205158_4061516100972576768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qsi7qLb5ifkAX9n2d9Z&_nc_ht=scontent.fhan5-3.fna&oh=00_AT_lq2h6vSjYWaSNEA5AEB4VjvjLK68AoCRxk-THUULpLA&oe=620FA2B2"/>

        </Nav>
    )
}



export default Header;

const Nav = styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
`

const Logo =styled.img`
    width: 80px;
`
const NavMenu =styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        
        img{
            height:20px;
        }

        span {

            font-size:13px;
            letter-spacing:1.42px;
            position: relative;

            &:after{
                content:"";
                height: 2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
            }
        }

        &:hover{
            span:after {
                opacity:1;
                transform:scaleX(1); 
            }
        }
    }
`

const UerImg = styled.img`
    width:40px;
    height: 40px;
    border-radius:50%;
    cursor:pointer;
`