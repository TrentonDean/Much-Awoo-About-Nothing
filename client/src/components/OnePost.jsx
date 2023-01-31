import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const OnePost = () => {
    const {id} = useParams();

    const[onePost, setOnePost] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        // axios here
    }, [id]);

    // I'm not sure if you want to add the delete feature here or elsewhere
    const deleteFilter = () => {

    }

    return (
        <div>

        </div>
    )
}

export default OnePost;