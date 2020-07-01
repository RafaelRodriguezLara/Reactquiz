import React from 'react';

export default class Question extends React.Component{

    title;
    titles;

    state={
        title: '',
        titles: null
    }



    constructor(props){
        super(props);
        this.state.title = this.props.title;
        this.state.titles = this.props.titles;

    }

    componentDidMount(){
        console.log(this.state.titles);
    }

    render(){
        return (

        );
    }
}
