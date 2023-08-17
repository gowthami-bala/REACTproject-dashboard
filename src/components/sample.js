import React, { useEffect, useState } from "react";

const Sample = () => {
    const [post, setPosts] = useState()
    const [show, setShow] = useState(false)
    const url = "http://localhost:3000/data"
    const getdata = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch(url, requestOptions)
            .then((res) => res.json())
            .then((result) => {
                setPosts(result)
                setShow(true)
            })
            .catch((error) => console.log("error", error));
    }
    return (
        <>
            <button onClick={getdata}>Click</button>
            {show &&
                <div>
                    <h1>Data</h1>
                    {post.map((data, i) => (
                        <div key={i}>
                            <div>id: {data.id} </div>
                        <div> Name: {data.name}</div>
                        <div> Username: {data.username}</div>
                        <div> Email: {data.email}</div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Sample