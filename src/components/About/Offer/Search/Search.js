import { useState, useEffect } from 'react';
import { searchEvent } from '../../../../services/eventService.js';
import './Search.css';

export const Search = () => {

    const [search, setSearch] = useState('');
    const [criteria, setCriteria] = useState('');

    // useEffect(() => {
    //     searchEvent(search.type, search.param)
    //         .then(res => console.log(res))
    // }, [search.type, search.param])

    const onSearchChange = (ev) => {
        setSearch(ev.target.value)
    };

    const onCriteriaChange = (ev) => {
        setCriteria(ev.target.value)
    };

    const onSubmitSearch = (ev) => {
        ev.preventDefault();
        searchEvent(criteria, search.toLowerCase())
        .then(res => {
            console.log(res.map(x => x.topic))
        })
        .catch(res => alert(res))
        console.log(search);
        console.log(criteria);

    }

    const onCloseBtn = () => {
        setSearch('')
    };


    return (
        <form className="search-form" onSubmit={onSubmitSearch}>
            <div className="filter">
                <span>Search criteria:</span>
                <select name="criteria" className="criteria" onChange={onCriteriaChange} value={criteria}>
                    <option value="">Select option</option>
                    <option value="date">Date</option>
                    <option value="topic">Topic</option>

                </select>
            </div>
            <div className="search-input-container">
                <input type="text" placeholder="Please, select the search criteria"
                    name="search" onChange={onSearchChange} value={search}
                />
                {search.length > 0 &&
                    <button className="close-btn" onClick={onCloseBtn}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                }

                <button className="btn" title="Please, select the search criteria">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    );
};