import React, { useEffect, useState } from 'react'
import css from './GridTable.css'
import trashIcon from '../../assets/icons/trash.png'
import axios from 'axios';

function GridTable(props) {
    var i = 1;
    const [data, setdata] = useState([])
    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [date, setdate] = useState("")
    const [start, setstart] = useState("")
    const [end, setend] = useState("")

    useEffect(() => {
        axios.get("https://heroku-mysql-node.herokuapp.com/getdata").then((res) => {
            setTimeout(() => {
                setdata(res.data)
                console.log(res.data)
            }, 500);
        });
        return () => {
        }
    }, [])
    function convertTo12Hour(oldFormatTime) {
        var oldFormatTimeArray = oldFormatTime.split(":");

        var HH = parseInt(oldFormatTimeArray[0]);
        var min = oldFormatTimeArray[1];

        var AMPM = HH >= 12 ? "PM" : "AM";
        var hours;
        if (HH == 0) {
            hours = HH + 12;
        } else if (HH > 12) {
            hours = HH - 12;
        } else {
            hours = HH;
        }
        var newFormatTime = hours + ":" + min + " " + AMPM;
        console.log(newFormatTime);
        return newFormatTime;
    }

    var handleDelete = (e) => {
        console.log(e.target.id);
        var arr;
        arr = data.filter(function (item) {
            return item.id != e.target.id;
        })

        var url = `https://heroku-mysql-node.herokuapp.com/delete?id="${e.target.id}"`;
        axios.get(url).then((res)=>{
            console.log(res.data);
        });

        setdata(arr);
    }

    var handleAdd = () => {
        var arr = data;

        if (name == "" || number == "" || date == "" || start == "" || end == "")
            return;

        var id = ("" + Math.random()).substring(2, 10)

        arr.push(
            {
                "Name": name,
                "Number": number,
                "Date": date,
                "Start": convertTo12Hour(start),
                "End": convertTo12Hour(end),
                "id": id,
            }
        );

        var url = `https://heroku-mysql-node.herokuapp.com/add?name="${name}"&number="${number}"&date="${date}"&start="${start}"&end="${end}"&id="${id}"`;
        axios.get(url).then((res)=>{
            console.log(res.data);
        });

        setTimeout(() => {
            setdata(arr);
        }, 500);

        setname("");
        setnumber("");
        setdate("");
        setstart("");
        setend("");
    }

    return (
        <div className="tableRoot">
            <table>
                <thead>
                    <tr>
                        <td>SL No.</td>
                        <td>Meeting name</td>
                        <td>No. of people attending</td>
                        <td>Date</td>
                        <td>Start time</td>
                        <td>End time</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((val) => {
                            if (props.searchText == "") {
                                return val;
                            } else if (val.Name.toLowerCase().includes(props.searchText.toLowerCase())) {
                                return val;
                            }
                        }
                        ).filter((val) => {
                            if (props.startDate == "") {
                                return val;
                            } else if (val.Date.substring(0,10) >= props.startDate.substring(0,10)) {
                                console.log(props.startDate)
                                return val;
                            }
                        }).filter((val) => {
                            if (props.endDate == "") {
                                return val;
                            } else if (val.Date.substring(0,10) <= props.endDate.substring(0,10)) {
                                return val;
                            }
                        }).map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{i++}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Number}</td>
                                    <td>{item.Date.substring(0,10)}</td>
                                    <td>{item.Start}</td>
                                    <td>{item.End}</td>
                                    <td>
                                        <button style={{ border: "none", backgroundColor: "white" }}>
                                            <img src={trashIcon} id={item.id} onClick={(e) => handleDelete(e)} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td></td>
                        <td><input id="name" placeholder="name" value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        </td>
                        <td><input id="number" placeholder="number" value={number}
                            onChange={(e) => setnumber(e.target.value)}
                        /></td>
                        <td><input id="date" placeholder="Date" value={date} type="date"
                            onChange={(e) => setdate(e.target.value)}
                        /></td>
                        <td><input id="start" placeholder="Start time" value={start} type="time"
                            onChange={(e) => setstart(e.target.value)}
                        /></td>
                        <td><input id="end" placeholder="End time" value={end} type="time"
                            onChange={(e) => setend(e.target.value)}
                        /></td>
                        <td>
                            <button
                                style={{ border: "none", backgroundColor: "#133B5C", color: "white" }}
                                onClick={() => { handleAdd() }}
                            >
                                ADD
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GridTable
