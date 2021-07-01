import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Search } from 'carbon-components-react';
import { client } from '../../helpers/client';

const SearchAutocomplete = props => {

    const [suggest_list, setSuggestList] = useState([]);
    const ref = useRef(null);

    const escapeListener = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }, [])
    const clickListener = useCallback(
        (e) => {
            if (!(ref.current).contains(e.target)) {
                onClose?.()
            }
        },
        [ref.current],
    )

    const onClose = () => {
        setSuggestList([]);
    }

    useEffect(() => {
        // Attach the listeners on component mount.
        document.addEventListener('click', clickListener)
        document.addEventListener('keyup', escapeListener)
        // Detach the listeners on component unmount.
        return () => {
            document.removeEventListener('click', clickListener)
            document.removeEventListener('keyup', escapeListener)
        }
    }, []);

    const search_autocomplete_suggest_content = suggest_list && suggest_list.map((item) =>
        (<li className='list-item' onClick={() => { console.log('search item click >>>', item.id); setSuggestList([]) }} key={'search_' + item.id}>{item.title}</li>)
    );

    const do_search = async (val) => {
        if (val == '' || val == undefined) {
            setSuggestList([]);
            return;
        }
        const search_result = await client.post(`/`,
            `{
                "endpoint": "/patentSearchAutocomplete",
                "data": {
                    "query": "` + val + `"
                }
            }`
        );
        if (search_result.status == '200' && search_result.statusText == 'OK' && search_result.data != "No route found.") {
            let result = search_result.data;
            result = JSON.parse(result);
            setSuggestList(result);
        }

    }

    return (
        <div ref={ref} className='search-component'>
            <Search
                id="patent-search"
                placeHolderText="Patent Search"
                size='xl'
                labelText=''
                onChange={(e) => { do_search(e.target.value) }}
            />
            {suggest_list.length > 0 && <ul aria-labelledby="search-label" role="menu" id="search-menu" className="GlobalSearch-module--list">
                {search_autocomplete_suggest_content}
            </ul>}
        </div>
    )
}

export default SearchAutocomplete;