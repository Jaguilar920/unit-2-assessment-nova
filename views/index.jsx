const React = require('react');
const JS = require('../public/js.js')

class Index extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <h1>To-Do List</h1>
                    <h2>{this.props.item}</h2>
                    <form action={`${this.props._id}?_method=PUT`} method="POST">
                    Add: <input type="text" name="name" defaultValue={this.props.item}/>
                    <input type="submit" name="" value="Submit Changes"/>
                    </form>
                   
                <ul>
                    {lists.map((item, i) => {
                        return (
                            <li>
                                {this.props.item}
                                <form
                                action={`${this.props._id}?_method=DELETE`}
                                method='post'>
                                <input type="submit" value="delete"/>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                </body>
            </div>
        )
    }
}