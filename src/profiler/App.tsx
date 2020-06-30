import React, { Component } from 'react';

interface PropsIF {

}
interface OwnStateIF {

}

class App extends Component<PropsIF, OwnStateIF> {
    constructor(props: PropsIF) {
        super(props);
    }
    render() {
        return (
            <div>
                Hi
            </div>
        );
    }
}

export default App;