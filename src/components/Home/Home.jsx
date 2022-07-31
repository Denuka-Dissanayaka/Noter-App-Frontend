import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

import './home.css';
import {MdDelete} from 'react-icons/md'

function Home() {
    const [noteList, setNotes] = useState([]);

    const callFn = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/api/v1/notes`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setNotes(res.data.notes);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    useEffect(() => {
        callFn();
    }, [setNotes]);

  return (
    <div className="Home">
        <h1 className="HomeNotes">Notes</h1>

        <Link to="/create">
            <button className="AddBtn">+</button>
        </Link>

        {!noteList || (noteList.length === 0 && ( <h2 className="NoNotesFound">No Notes Found</h2> ))}

        <div className="NoteList">
            {noteList && (
                <div>
                    {noteList.map((note) => {
                            return (<div className="Note">
                                <div className="NoteContent">
                                    {note.content}
                                </div>
                                <Link to={`/delete/${note._id}`}>
                                    <span className="DelIcon"> <MdDelete /> </span>
                                </Link>
                            </div>)
                        })}
                </div>
            )}
        </div>
    </div>
  )
}

export default Home
