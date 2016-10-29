import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css'

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

// my_news = [];
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false}
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e) {
        e.preventDefault();
        this.setState({visible: true})
    }

    render() {
        return (
            <div className='article'>
                <p className="news__author">{this.props.item.author}</p>
                <p className="news__text">{this.props.item.text}</p>
                <a href="#" className={'news__readmore ' + (this.state.visible ? 'hide' : '')}
                   onClick={this.handlerClick}>Подробнее</a>
                <p className={'news__big-text ' + (this.state.visible ? '' : 'hide')}>{this.props.item.bigText}</p>
            </div>
        )
    }
}

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
        this.countClick = this.countClick.bind(this);
    }

    countClick() {
        this.setState({counter: ++this.state.counter})
    }

    render() {
        let data = this.props.data;
        let list = <p>No news :(</p>;
        if (data.length > 0) {
            list = data.map((item, index) => {
                return (
                    <Article item={item} index1={index}/>
                )
            });
        }
        return (
            <div className="news">
                {list}
                <div className={data.length > 0 ? '' : 'none'} onClick={this.countClick}>
                    Total: {data.length}
                </div>
            </div>
        )
    }
}

class TestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ''}
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerChange(e) {
        this.setState({inputValue: e.currentTarget.value});
    }

    handlerClick() {
        alert(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <input
                    className="test-input"
                    value={this.state.inputValue}
                    onChange={this.handlerChange}
                />
                <button onClick={this.handlerClick}>show me</button>
            </div>);
    }
}

class TestInput2 extends Component {
    constructor(props) {
        super(props);
        this.handlerClick2 = this.handlerClick2.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.onchanges).focus();
    }

    handlerClick2() {
        alert(ReactDOM.findDOMNode(this.refs.onchanges).value);
    }

    render() {
        return (
            <div>
                <input
                    className="test-input"
                    defaultValue=""
                    ref="onchanges"
                />
                <button onClick={this.handlerClick2}>show me</button>
            </div>);
    }
}

class Add extends Component {
    constructor(props) {
        super(props);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }

    onBtnClickHandler(e) {
        e.preventDefault();
    }

    onCheckRuleClick(e) {
        ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.currentTarget.checked;
    }

    render() {
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                ></textarea>
                <label className='add__checkrule'>
                <input
                    type='checkbox'
                    defaultChecked={false}
                    ref='checkrule'
                    onChange={this.onCheckRuleClick}
                />Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled
                >
                    Показать alert
                </button>
            </form>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Add/>
                <h3>News</h3>
                <TestInput/>
                <TestInput2/>
                <News data={my_news}/>
            </div>
        );
    }
}

export default App;
