import React from 'react';
import './PlayersScreen.css';
import defaultavatar from '../assets/defaultavatar.png';
import ReactPaginate from 'react-paginate';
import Spinner from 'react-bootstrap/Spinner';

class PlayersScreen extends React.Component {
    constructor() {
      super();

      this.state = {
        data: [],
      };
    }
  
    componentDidMount() {
      this.apiCall(1);
    }

    handlePageClick = (data) => {
        this.setState(() => ({
            data: [],
        }));  
        window.scroll(0,0)
        let num = data.selected + 1;
        this.apiCall(num)
    }

    tokenCall = async () => {
        let resp = await fetch("https://oauth2.elenasport.io/oauth2/token", {
          method: "POST",
          headers: {
            Authorization:
              "Basic N3RxZXBnMDM0Z2dtdWVwcTdoYWJsN2M3M2k6Zmd1ajlhNzJkMTEyNmZxdXIwajQyMGZkOXZhcHRiMXFmdjFlYnBnNWtvNGJqNDhyNGNw",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
          }),
        });
    
        let respJson = await resp.json();
    
        localStorage.setItem("token", respJson.access_token);
      };
  
    apiCall = async (pageNumber) => {

        if(!localStorage.getItem("token")){
            await this.tokenCall();
        }

        let token = localStorage.getItem('token')

        let resp = await fetch(`https://football.elenasport.io/v2/seasons/${pageNumber}/players`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        let respJson = await resp.json();

        this.setState(() => ({
            data: [respJson],
        }));  

    }

    list(initNum) {
        for(let i = 0; i<4; i++){
             return(
                <div>
                    <div className="column">
                        <div className="card">
                        <img className="card-image" src={this.state.data[0].data[initNum].photoURL?this.state.data[0].data[initNum].photoURL:defaultavatar}/>
                        <h5>{this.state.data[0].data[initNum].fullName}</h5>
                        <hr/>
                        <p>{this.state.data[0].data[initNum].nationalities ? this.state.data[0].data[initNum].nationalities[0] : 'NA'}</p>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum].height ? this.state.data[0].data[initNum].height : 'NA'} cm </p>
                                <p>{this.state.data[0].data[initNum].weight ? this.state.data[0].data[initNum].weight : 'NA'} kg </p>
                            </div>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum].dob ? this.state.data[0].data[initNum].dob : 'NA'}</p>
                                <p>Foot: {this.state.data[0].data[initNum].foot ? this.state.data[0].data[initNum].foot : 'NA'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img className="card-image" src={this.state.data[0].data[initNum+1].photoURL?this.state.data[0].data[initNum+1].photoURL:defaultavatar}/>
                            <h5>{this.state.data[0].data[initNum+1].fullName}</h5>
                            <hr/>
                            <p>{this.state.data[0].data[initNum+1].nationalities ? this.state.data[0].data[initNum+1].nationalities[0] : 'NA'}</p>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum+1].height ? this.state.data[0].data[initNum+1].height : 'NA'} cm </p>
                                <p>{this.state.data[0].data[initNum+1].weight ? this.state.data[0].data[initNum+1].weight : 'NA'} kg </p>
                            </div>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum].dob ? this.state.data[0].data[initNum+1].dob : 'NA'}</p>
                                <p>Foot: {this.state.data[0].data[initNum+1].foot ? this.state.data[0].data[initNum+1].foot : 'NA'}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="card">
                        <img className="card-image" src={this.state.data[0].data[initNum+2].photoURL?this.state.data[0].data[initNum+2].photoURL:defaultavatar}/>
                        <h5>{this.state.data[0].data[initNum+2].fullName}</h5>
                        <hr/>
                        <p>{this.state.data[0].data[initNum+2].nationalities ? this.state.data[0].data[initNum+2].nationalities[0] : 'NA'} </p>
                        <div className="same-line">
                            <p>{this.state.data[0].data[initNum+2].height ? this.state.data[0].data[initNum+2].height : 'NA'} cm </p>
                            <p>{this.state.data[0].data[initNum+2].weight ? this.state.data[0].data[initNum+2].weight : 'NA'} kg </p>
                            </div>
                            <div className="same-line">
                            <p>{this.state.data[0].data[initNum+2].dob ? this.state.data[0].data[initNum+2].dob : 'NA'} </p>
                            <p>Foot: {this.state.data[0].data[initNum+2].foot ? this.state.data[0].data[initNum+2].foot : 'NA'}</p>
                        </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img className="card-image" src={this.state.data[0].data[initNum+3].photoURL?this.state.data[0].data[initNum+3].photoURL:defaultavatar}/>
                            <h5>{this.state.data[0].data[initNum+3].fullName}</h5>
                            <hr/>
                            <p>{this.state.data[0].data[initNum].nationalities ? this.state.data[0].data[initNum+3].nationalities[0] : 'NA'}</p>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum+3].height ? this.state.data[0].data[initNum+3].height : 'NA'} cm </p>
                                <p>{this.state.data[0].data[initNum+3].weight ? this.state.data[0].data[initNum+3].weight : 'NA'} kg </p>
                            </div>
                            <div className="same-line">
                                <p>{this.state.data[0].data[initNum+3].dob ? this.state.data[0].data[initNum+3].dob : 'NA'}</p>
                                <p>Foot: {this.state.data[0].data[initNum+3].foot ? this.state.data[0].data[initNum+3].foot : 'NA'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }

    loading = () => {
        return(
            <Spinner className="d-flex justify-content-center" animation="border"/>
        )
    }

    render() {
        return (
            <div className="player-container">
                <div className="loading-spinner">
                    {!this.state.data[0]?this.loading():''}
                </div>
                <div className="row">
                    {this.state.data[0]?this.list(0):''}
                </div>
                <div className="row">
                    {this.state.data[0]?this.list(4):''}
                </div>
                <div className="row">
                    {this.state.data[0]?this.list(8):''}
                </div>
                <div className="row">
                    {this.state.data[0]?this.list(12):''}
                </div>
                <div className="row">
                    {this.state.data[0]?this.list(16):''}
                </div>
                <ReactPaginate
                    previousLabel={'Anterior'}
                    nextLabel={'Siguiente'}
                    breakLabel={'...'}
                    pageCount={6}
                    onPageChange={this.handlePageClick} 
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

export default PlayersScreen;  