var Counter = React.createClass({
    getDefaultProps: function() {
        return {
            default: 0
        }
    },
    
    getInitialState: function() {
        return {
            counter: this.props.default,
        };
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    componentWillMount: function() {
        console.log('Trwa ładowanie danych');
    },
    
    componentWillReceiveProps: function() {
        console.log('Aktualizacja stanu licznika');
    },
    
   /*
    shouldComponentUpdate: function() {
        console.log('Sprawdzenie optymalizacji komponentu');
    },
    */
    
    componentWillUpdate: function() {
        console.log('Komponent został zoptymalizowany');
    },

    render: function() {
        return React.createElement('div', {className: 'counters'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('br', {}),
            React.createElement('br', {}),
            React.createElement('button', {onClick: this.increment}, '   +1   '),
            React.createElement('button', {onClick: this.decrement}, '   -1   ')
        );
    },
    
    componentDidMount: function() {
        console.log('Wyświetlono komponent, jest już widoczny w drzewie DOM');
    },
    
    componentWillUnmount: function() {
        console.log('Kompontent został odmontowany');
}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));