import Styled, { styled } from "styled-components";
import logo from "../assets/react.svg";
import { v } from "../styles/Variables";
import {AiOutlineLeft, AiOutlineHome, AiOutlineOrderedList, AiOutlinePartition} from "react-icons/ai";
import {NavLink, useLocation} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
export function Sidebar({ sidebarOPen,setSidebarOPen }) {
    const ModSidebaropen=()=>{
        setSidebarOPen(!sidebarOPen);
    };
    const {setTheme,theme} = useContext(ThemeContext);
    const cambiarTheme=()=>{
        setTheme((theme)=>(theme==="light"?"dark":"light"))
    };
    return (
        <Container isopen={sidebarOPen} themeuse={theme} >
            <button className="Sidebarbutton" onClick={ModSidebaropen}>
                <AiOutlineLeft />
            </button>
            <div className="Logocontent">
                <div className="imgcontent">
                    <img src={logo}/>
                </div>
            </div>
            <h2>
                Danna Lozano
            </h2>
            {linksArray.map(({label, icon, to})=>(
                <div className="linkContainer" key={label}>
                <NavLink to={to} className={({isActive})=>`links${isActive?` active`:``}`} >
                    <div className="linkicon">
                        {icon}
                    </div>
                    {sidebarOPen &&(
                        <span>{label}</span>
                    )
                    }
                </NavLink>
                </div>
            ))}
            <Divider />
            <div className="Themecontent">
                {sidebarOPen && <span>Dark mode</span>}
                <div className="togglecontent">
                    <div className="grid theme-container">
                        <div className="content">
                            <div className="demo">
                                <label className="switch">
                                    <input type="checkbox" className="theme-swither" onClick={cambiarTheme}>
                                    </input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
//region Data links
const linksArray=[
    {
        label:"Home",
        icon:<AiOutlineHome/>,
        to: "/",
    },
    {
        label:"caracteristicas",
        icon:<AiOutlineOrderedList/>,
        to: "/caracteristicas",
    },
    {
        label:"components",
        icon:<AiOutlinePartition/>,
        to: "/components",
    },
]

//region Styled Components
const Container = Styled.div`
    color:${(props)=>props.theme.text};
    background:${(props)=>props.theme.bg};
    position:sticky;
    padding-top:20px;
    .Sidebarbutton {
        position: absolute;
        top: ${v.xxlSpacing};
        right:-18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background:${(props)=>props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props)=>props.theme.bg3}, 0 0 7px ${(props)=>props.theme.bg};
        display: flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({isopen})=>(isopen?`initial`:`rotate(180deg)`)};
    }
    .Logocontent {
        display: flex;
        justify-content:center;
        align-items:center;
        padding-bottom:${v.lgSpacing}
        .imgcontent{
            display: flex;
            img{
                max-width: 100%;
                heigt: auto;
            }
            cursor:pointer;
            transition: all 0.3s;
            transform: ${({isopen})=>(isopen?`scala(0.7)`:`scala(1.5)`)};
        }
        h2{
            display:${({isopen})=>(!isopen?`block`:`none`)};
        }
    }
    .linkContainer{
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background: ${(props)=>props.theme.bg3};
        }
        .links{
            display: flex;
            align-items:center;
            text-decoration: none
            padding:calc(${v.smSpacing}-2px) 0;
            .linkicon{
                padding:${v.smSpacing} ${v.mdSpacing};
                display: flex;
                svg{
                    font-size:25px;
                }
            }
            &.active{
                .linkicon{
                    svg{
                        color:${(props)=>props.theme.bg4}
                    }
                }
            }
        }
    }
    .Themecontent{
        display: flex;
        align-items:center;
        justify-content: space-between;
        span{
            display: block;
            padding: 10px;
            font-weight: 700;
        }
        .togglecontent{
            margin: ${({isopen}) =>(!isopen?`auto 40px`:`auto 15px`)};
            width: 36px;
            height: 20px;
            border-radius: 10px;
            transition: all 0.3s;
            position: relative;
            .theme-container{
                background-blend-mode: multiply, multiply;
                transition: 0.4s;
                .grid{
                    display: flex;
                    align-items:center;
                    align-content:center;
                    height: 100vh;
                    width: 100vh;
                    font-family: "Lato", sans-serif;
                }
                .demo{
                    font-size: 32px;
                    .switch{
                        position: relative;
                        display: inline-block;
                        height: 60px;
                        width: 34px;
                        .theme-swither{
                            opacity: 0;
                            width: 0;
                            height: 0;
                            &:checked +.slider:before{
                                left: 4px;
                                content: "☑️";
                                transform:translatex(10px);
                            }
                        }
                        .slider{
                            position: relative;
                            cursor: pointer;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: ${({themeuse})=>(themeuse==="light"?v.lightchckbox:v.chckbox)};
                            opacity: 60%;
                            backdrop-filter: blur(30px);
                            transition: 0.4s;
                            &::before{
                                position: absolute;
                                content: "☑️";
                                width: 0;
                                height: 0;
                                left: -15px;
                                top: 10px;
                                line-height: 0px;
                                transition: 0.4s;
                            }
                            .round{
                                border-radius: 34px;
                                &::before{
                                    border-radius: 50%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Divider = Styled.div`
    height: 10px;
    width: 100%
    background: ${(props)=>props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
