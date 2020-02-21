import React, { Component } from 'react';

class Pokedex extends Component {
    const[next, setNext] = '';
    const[previous, setPrevious] = '';
    const[showcase, setShowcase] =[];

    useEffect(() => {
        getInfo("https://pokeapi.co/api/v2/pokemon/?limit=9")
            .then(data => {
                let pokemon = data.results;
                pokemon.forEach(mon => {
                    getInfo(mon.url).then(json => {
                        setShowcase([...showcase, { name: json.name, url: json.sprites.front_default }]);
                    });
                });
            }
            )
    })

const getInfo = (url) => {
    //https://pokeapi.co/api/v2/pokemon/?limit=1000
    try {
        return fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return "error";
                }
            })
    } catch (error) {
        console.log(error)
    }
}

return (
    <div className="dex-container">
        <img className="dex-img" src="https://www.pinclipart.com/picdir/big/257-2576119_pokedex-icon-free-png-and-svg-download-clipart.png" alt="dex" />
        <div className="dex">{props.pokemon}</div>
    </div>
)
}

export default Pokedex;