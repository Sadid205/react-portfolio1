import React,{useState} from 'react';
import Heading from './../common/Heading';
import {portfolio,} from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"



const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))] 
export const Portfolio = () => {
    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)

    console.log(setCategory)

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setList(newItems)
        if (category === "all") {
            setList(portfolio)
            return
        }
    }


    return (
        <>
            <article className='portfolio'>
                <div className='container'>
                    <Heading title="Portfolio"/>
                </div>
                <div className='catButton'>
                    {category.map((category)=>(
                        <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down' >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="content container grid3">
                    {list.map((item) =>(
                        <div className='box' data-aos= 'zoom-in-right'>
                            <div className='img'>
                                <img src={item.cover} alt="" />
                            </div>
                            <div className='overlay'>
                                <h3>{item.title}</h3>
                                <span>{item.name}</span>
                                <VisibilityOutlinedIcon/>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}


