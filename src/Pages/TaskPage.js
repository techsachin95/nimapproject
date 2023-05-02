import React, { useRef } from 'react'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import './TaskPage.css'
import _ from "lodash";
import Navbar from '../Components/HomePage_Components/Navbar'
import { useState, useEffect } from 'react'
const TaskPage = () => {
    //show dynamic id of api link
    var count = 0;

    //stor a api data into array state
    const [data, setdata] = useState([]);

    // const [nopage, setnopage] = useState(1);

    //show pagination
    const [showpage, setshowpage] = useState(true);

    //show input field
    const [inputfield, setinputfield] = useState("");

    //retrieve a user data which is inter in inputfield
    const inputdata = useRef();

    //fatching a data from api link
    const fetchinfo = () => {
        fetch("http://jsonplaceholder.typicode.com/todos")
            .then(responce => responce.json())
            .then(result => setdata(result));
    }

    //fetched data should rendered only first rendering
    useEffect(() => {
        fetchinfo();
    }, []);

    //delete data from array state
    const delete1 = (index) => {
        setdata((existingdata) => {
            return existingdata.filter((item, currentindex) => currentindex !== index)
        })
    }

    //display input field
    const adddata = () => {
        setinputfield(true);
    }

    //save data to array state
    const savedata = () => {
        setdata([{ id: 1, title: inputdata.current.value }, ...data])
        setinputfield(false)
    }

    //pagination
    const [currentpage, setcurrentpage] = useState(1);
    const recordperpage = 3;
    const lastindex = currentpage * recordperpage;
    const firstindex = lastindex - recordperpage;
    let npage = Math.ceil(data.length / recordperpage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    let pages = _.range(1, npage - 61);

    return (
        <>
            <Navbar />
            {
                inputfield && <div className='inputfield'><input type="text" autoFocus ref={inputdata} /><button onClick={savedata}>Save</button></div>
            }

            <table>
                {

                    data.slice(firstindex, lastindex).map((item, index) => {

                        return (
                            <>

                                <tr key={index}>
                                    {/* <td>{item.id}</td> */}
                                    <td>{count += 1}</td>
                                    <td className='title'>{item.title}</td>
                                    <td>{item.completed ? "true" : "false"}</td>
                                    <td><button onClick={() => delete1(index)} className='delete'>Delete</button></td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
            <div className="btns">
                <div className="add"><button onClick={adddata} className='save'>Add</button></div>
                <div className="pagination">
                    <div className="div">
                        <button onClick={previouspage}><AiOutlineDoubleLeft /></button>
                    </div>
                    <div className="div">
                        {
                            pages.map((n, index,) => (
                                <div className="div">
                                    <button onClick={() => changepage(n)} className={`${currentpage == n ? "active" : ""}`} key={index}>{n}</button>
                                </div>
                            ))
                        }
                    </div>
                    <div><button onClick={nextpage}><AiOutlineDoubleRight /></button></div>
                </div>
            </div>
        </>
    )

    //nextpage function
    function nextpage() {
        if (currentpage !== npage) {
            setcurrentpage(currentpage + 1)

        }
    }
    //changepage fn
    function changepage(n) {
        setcurrentpage(n);
        console.log(n)
    }
    //previouspage fn
    function previouspage() {
        if (currentpage !== 1) {
            setcurrentpage(currentpage - 1)
        }
    }




}
export default TaskPage