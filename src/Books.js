import React,{Component} from 'react'
import Card from './Card.js'

export default class Books extends Component{

    constructor(props){
        super(props);

        this.state = {
            book : []
        }
    }

    componentDidMount(){
        fetch('./Books.json').then((response) => {
            return response.json();
        }).then((data) => {
            data.map((value) => {
                if(value.type === this.props.type){
                    this.setState({book : [...this.state.book,value]})
                    
                }
            })
        })
    }

    

    componentWillReceiveProps (newProps) {
        if( newProps.type !== this.props.type ){
            fetch('/Books.json').then((response) => {
                        return response.json();
                    }).then((data) => {
                        this.setState({book : []})
                        data.map((value) => {
                            if(value.type === this.props.type){
                                this.setState({book : [...this.state.book,value]})
                                
                            }
                        })
                    })
        }
      }

    render(){
        return(
            <>
                <div className='row'>
                <Card data = {this.state.book} />
                </div>
            </>
        )
        
    }
}



