import React from 'react';
 class Header extends React.Component { 
    constructor() {
    super(); this.state = {nom: "Mériadeck"};
    }
    render()
    { return <div>
        <h1>Le site de : {this.state.nom}</h1></div>;
    }
} export default Header