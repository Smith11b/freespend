import React, { Component } from 'react';
import axios from 'axios';

export default class SendMoney extends Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    async getData(){
       let res = await axios.get("https://jobs.github.com/positions.json?description=python&location=sf").catch(err => {
            console.log('Sorry, please try again');
        })
        let data = res.data
        this.setState({data})
     }

    

    componentDidMount(){
        this.getData();
    }
      
    render() {
        return (
            <div className = "job-mid">
                <h1 className = "job-h1">Get a Job!</h1>
                {this.state.data.map(job => {
                    return (<div className = "job-card">
                        <h1>{job.title}</h1>
                        <h2>{job.company}</h2>
                        <p>{job.location}</p>
                        <img src = {job.company_logo} />
                        
                </div>)
                })}
                
            </div>
        )
    }
}

