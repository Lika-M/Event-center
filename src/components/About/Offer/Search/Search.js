import { useState, } from 'react';
import { Link } from 'react-router-dom';

import { searchEvent } from '../../../../services/eventService.js';
import { Loader } from '../../../common/Loader/Loader.js';
import { EventItem } from '../../../Events/EventItem/EventItem.js';
import { PageNotFound } from '../../../common/PageNotFound/PageNotFound.js';
import './Search.css';

export const Search = () => {

    const [search, setSearch] = useState('');
    const [criteria, setCriteria] = useState('');
    const [selected, setSelected] = useState({ items: [], style: { display: 'none' } });
    const [isLoad, setIsLoad] = useState(false);
    const [err, setErr] = useState('');

    const onSearchChange = (ev) => {
        setSearch(ev.target.value);
        setSelected({ items: [], style: { display: 'none' } });
    };

    const onCriteriaChange = (ev) => {
        setCriteria(ev.target.value);
        setSearch('');
        setSelected({ items: [], style: { display: 'none' } });
    };

    const onSubmitSearch = (ev) => {
        ev.preventDefault();

        if (criteria === '' || search === '') {
            setIsLoad(false);
            setSelected({ items: [], style: { display: 'block' } });
            return;
        }

        setIsLoad(true);

        searchEvent(criteria, search.toLowerCase())
            .then(res => {
                setIsLoad(false);
                if (res.length > 0) {
                    setSelected({ items: res, style: { display: 'none' } });
                } else {
                    setSelected({ items: [], style: { display: 'block' } })
                }
            })
            .catch(error => {
                setErr(error.message)
            })
    }

    const onCloseBtn = () => {
        setSearch('');
        setSelected({ items: [], style: { display: 'none' } });
    };

    if (err) {
        return (
            <PageNotFound err={err} />
        );
    }

    return (
        <section className="search">
            <form className="search-form" onSubmit={onSubmitSearch}>
                <div className="filter">
                    <span>Search criteria:</span>
                    <select name="criteria" className="criteria" onChange={onCriteriaChange} value={criteria}>
                        <option value="">Select option</option>
                        <option value="date">Date</option>
                        <option value="topic">Topic</option>
                        <option value="company">Company</option>

                    </select>
                </div>
                <div className="search-input-container">
                    {criteria === '' && <input type="text" placeholder="Please, select the search criteria"
                        name="search" onChange={onSearchChange} value={search} />}
                    {criteria === 'topic' && <input type="text" placeholder="Please, enter the topic or key word"
                        name="search" onChange={onSearchChange} value={search} />}
                    {criteria === 'date' && <input type="date"
                        name="search" onChange={onSearchChange} value={search} />}
                    {criteria === 'company' && <input type="text" placeholder="Please, enter the company name"
                        name="search" onChange={onSearchChange} value={search} />}

                    {search.length > 0 &&
                        <button className="close-btn" onClick={onCloseBtn}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>}

                    <button type="submit" className="btn" title="Please, select the search criteria">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
            {isLoad && <Loader />}
            {selected.items.length > 0 &&
                (<ul className="search-event-list">
                    {selected.items.map(x => <EventItem key={x.objectId} {...x} />)}
                </ul>)}
            {!isLoad &&
                <>
                    <div className="search-result">
                        <p style={selected.style}>No results found.</p>
                    </div>
                    <Link to="/calendar" className="visitor-btn">See all events</Link>
                </>}
        </section>
    );
};