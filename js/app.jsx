import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from	'react-router-dom';
import reset from '../sass/reset.css';
import styles from '../sass/style.scss';


document.addEventListener('DOMContentLoaded', function(){

    class Admin extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: null,
                password: ""
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=> {
                console.log( data );
                const reservations = {};
                data.forEach(el => {
                    if (!reservations[el.day]) {
                        reservations[el.day] = {};
                    }

                    if (!reservations[el.day][el.hour]) {
                        reservations[el.day][el.hour] = [];
                    }

                    reservations[el.day][el.hour].push(el);
                });
                this.setState({
                    reservations: reservations
                })

            })

        };
        handleClick = (e) => {
            console.log(e.target);
            if(e.target === e.currentTarget){
                if (e.target.querySelector(".list").style.display === "block"){
                    e.target.querySelector(".list").style.display = "none"
                } else {
                    e.target.querySelector(".list").style.display = "block"
                }
            }
        };
        handlePassword = (e) => {
            this.setState({
                password: e.target.value,
            })
        };
        render() {
            if(this.state.password !== "admin") {
                return (
                    <div className="pass">
                        <p>Wpisz hasło aby zalogować się do panelu administracyjnegooo:</p>
                        <form >
                            <input value={ this.state.password } onChange={ this.handlePassword } placeholder="Wpisz hasło..."/>
                        </form>
                    </div>
                )
            } else {
                if(this.state.reservations === null) {
                    return null;
                }
                return (
                    <div className="adminContainer">
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Poniedziałek:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Poniedziałek, godzina 10</u>{ this.state.reservations.mon && this.state.reservations.mon[10] ? this.state.reservations.mon[10].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Poniedziałek, godzina 14</u> { this.state.reservations.mon && this.state.reservations.mon[14] ? this.state.reservations.mon[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Poniedziałek, godzina 16</u> { this.state.reservations.mon && this.state.reservations.mon[16] ? this.state.reservations.mon[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Wtorek:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Wtorek, godzina 10</u> { this.state.reservations.tue && this.state.reservations.tue[10] ? this.state.reservations.tue[10].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Wtorek, godzina 14</u>{ this.state.reservations.tue && this.state.reservations.tue[14] ? this.state.reservations.tue[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Wtorek, godzina 16</u> { this.state.reservations.tue && this.state.reservations.tue[16] ? this.state.reservations.tue[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Środę:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Środa, godzina 10</u> { this.state.reservations.wed && this.state.reservations.wed[10] ? this.state.reservations.wed[10].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Środa, godzina 14</u> { this.state.reservations.wed && this.state.reservations.wed[14] ? this.state.reservations.wed[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Środa, godzina 16</u> { this.state.reservations.wed && this.state.reservations.wed[16] ? this.state.reservations.wed[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Czwartek:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Czwartek, godzina 10</u> { this.state.reservations.thu && this.state.reservations.thu[10] ? this.state.reservations.thu[10].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Czwartek, godzina 14</u> { this.state.reservations.thu && this.state.reservations.thu[14] ? this.state.reservations.thu[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Czwartek, godzina 16</u> { this.state.reservations.thu && this.state.reservations.thu[16] ? this.state.reservations.thu[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Piątek:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Piątek, godzina 10</u> { this.state.reservations.fri && this.state.reservations.fri[10] ? this.state.reservations.fri[10].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Piątek, godzina 14</u> { this.state.reservations.fri && this.state.reservations.fri[14] ? this.state.reservations.fri[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Piątek, godzina 16</u> { this.state.reservations.fri && this.state.reservations.fri[16] ? this.state.reservations.fri[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Sobotę:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Sobota, godzina 14</u> { this.state.reservations.sat && this.state.reservations.sat[14] ? this.state.reservations.sat[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Sobota, godzina 16</u> { this.state.reservations.sat && this.state.reservations.sat[16] ? this.state.reservations.sat[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Sobota, godzina 18</u> { this.state.reservations.sat && this.state.reservations.sat[18] ? this.state.reservations.sat[18].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                        <div className="adminDay" onClick={ this.handleClick }>Lista rezerwacji na Niedzielę:
                            <div className="list" style={{display: "none"}}>
                                <div><u>Niedziela, godzina 14</u> { this.state.reservations.sun && this.state.reservations.sun[14] ? this.state.reservations.sun[14].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Niedziela, godzina 16</u> { this.state.reservations.sun && this.state.reservations.sun[16] ? this.state.reservations.sun[16].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                                <div><u>Niedziela, godzina 18</u> { this.state.reservations.sun && this.state.reservations.sun[18] ? this.state.reservations.sun[18].map( el => {
                                    return <li>{ el.name }, tel: { el.number }, email: { el.email }, notka: { el.note }</li>
                                }):"brak rezerwacji na ten termin"}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
    //formularz rezerwacyjny
    class Form extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                number: "",
                email: "",
                note: "",
            }
        }

        handleClick = (e) => {
            e.preventDefault();
            const newReservation = {
                name: this.state.name,
                number: this.state.number,
                email: this.state.email,
                note: this.state.note,
                day: this.props.match.params.day,
                hour: this.props.match.params.hour
            };
            fetch('http://localhost:3000/contacts',	{
                method:'POST',
                body: JSON.stringify(newReservation),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then( resp => {
                console.log(resp, "wrzucono");
            }).catch( error => {
                console.log(error, "error")
            })
        };
        handleChangeName = (e) => {
            this.setState ({
                name: e.target.value,
            })
        };
        handleChangeNumber = (e) => {
            this.setState ({
                number: e.target.value,
            })
        };
        handleChangeEmail = (e) => {
            this.setState ({
                email: e.target.value,
            })
        };
        handleChangeNote = (e) => {
            this.setState ({
                note: e.target.value,
            })
        };
        render() {
            console.log(this.props);
            return(
                <div className="reservation">
                    <form>
                        <label> Imię i nazwisko:
                            <p><input value={ this.state.name } onChange={ this.handleChangeName } placeholder="Jak się nazywasz?..." /><br/></p>
                        </label>
                        <label>Numer telefonu:
                            <p><input value={ this.state.number } onChange={ this.handleChangeNumber } placeholder="Twój numer..." /><br/></p>
                        </label>
                        <label>Email:
                            <p><input value={ this.state.email } onChange={ this.handleChangeEmail } type="email" placeholder="Twój email..." /><br/></p>
                        </label>
                        <label>Dodatkowe uwagi?
                            <p><textarea value={ this.state.note } onChange={ this.handleChangeNote } cols="16" rows="3" placeholder="wiadomość..."/></p>
                        </label>
                        <input onClick={ this.handleClick } id="submit" type="submit" value="Rezerwuję"/>
                    </form>
                </div>
            )
        }
    }
    //komponenty z terminami dla dni tygodnia

    class ScheduleMonday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "mon") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
    };
        render(){
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/mon/10">Teren - dla początkujących 10:00 - 12:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h10? this.state.reservations.h10.length: 0})</u></span><br/>
                        <span><Link	to="/Form/mon/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/mon/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleTuesday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "tue") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/tue/10">Teren - dla zaawansowanych 10:00 - 12:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h10? this.state.reservations.h10.length: 0})</u></span><br/>
                        <span><Link	to="/Form/tue/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/tue/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleWednesday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "wed") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/wed/10">Teren - dla początkujących 10:00 - 12:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h10? this.state.reservations.h10.length: 0})</u></span><br/>
                        <span><Link	to="/Form/wed/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/wed/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleThursday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "thu") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/thu/10">Teren - dla zaawansowanych 10:00 - 12:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h10? this.state.reservations.h10.length: 0})</u></span><br/>
                        <span><Link	to="/Form/thu/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/thu/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleFriday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "fri") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/fri/10">Teren - dla początkujących 10:00 - 12:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h10? this.state.reservations.h10.length: 0})</u></span><br/>
                        <span><Link	to="/Form/fri/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/fri/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleSaturday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "sat") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/sat/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/sat/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span><br/>
                        <span><Link	to="/Form/sat/18">Teren z ogniskiem - dla zaawansowanych 18:00 - 21:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h18? this.state.reservations.h18.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    class ScheduleSunday extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                reservations: {},
            }
        }
        componentDidMount(){
            fetch('http://localhost:3000/contacts',	{
            }).then(resp =>	resp.json()
            ).then(data	=>{
                console.log( data );
                const reservations = {};
                data.forEach( item => {
                    if (item.day === "sun") {
                        if (!reservations["h" + item.hour]) {
                            reservations["h" + item.hour] = [];
                        }
                        reservations["h" + item.hour].push(item)
                    }
                });
                this.setState({
                    reservations: reservations
                });
                console.log(reservations);
            })
        };
        render() {
            return(
                <div className= "scheduleContainer">
                    <div className= "scheduleBox">
                        <span>Aby zarezerwować termin, wybierz ten który Cię interesuje</span><br/>
                        <span><Link	to="/Form/sun/14">Maneż - dla początkujących 14:00 - 15:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h14? this.state.reservations.h14.length: 0})</u></span><br/>
                        <span><Link	to="/Form/sun/16">Maneż - dla zaawansowanych 16:00 - 17:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h16? this.state.reservations.h16.length: 0})</u></span><br/>
                        <span><Link	to="/Form/sun/18">Teren z ogniskiem - dla początkujących 18:00 - 21:00</Link>  <u>(Liczba rezerwacji: {this.state.reservations.h18? this.state.reservations.h18.length: 0})</u></span>
                    </div>
                </div>
            )
        }
    }
    // wybór dnia tygodnia
    class DayOfWeek extends React.Component {
        render() {
            return (
                <div className="box days clearfix">
                    <p className="text">Aby zobaczyć grafik oraz zarezerwować termin wybierz dzień tygodnia</p>
                    <div className="daysContainer">
                        <div><Link	to="/ScheduleMonday">Poniedziałek</Link></div>
                        <div><Link	to="/ScheduleTuesday">Wtorek</Link></div>
                        <div><Link	to="/ScheduleWednesday">Środa</Link></div>
                        <div><Link	to="/ScheduleThursday">Czwartek</Link></div>
                        <div><Link	to="/ScheduleFriday">Piątek</Link></div>
                        <div><Link	to="/ScheduleSaturday">Sobota</Link></div>
                        <div><Link	to="/ScheduleSunday">Niedziela</Link></div>
                    </div>
                </div>
            )
        }
    }
    class WelcomeBanner extends React.Component {
        render(){
            return (
                <div className="box">
                    <div className="admin"><Link to="/Admin">panel administracyjny</Link></div>
                    <div className="return"><Link to="/">Wróc do strony głównej</Link></div>
                    <h3 className="text" id="welcome">Witaj w stajni Nowy Narakort!
                    </h3>
                    <p className="text">
                        Balans jest ważny - zadbaj o niego terapią ciszy i przestrzeni<br/>
                    </p>
                </div>
            )
        }
    }
    class App extends React.Component {
        render(){
            return (
                <HashRouter>
                    <div id="main">
                        <WelcomeBanner />
                        <DayOfWeek />
                        <Switch>
                            <Route path='/ScheduleMonday' component={ScheduleMonday}/>
                            <Route path='/ScheduleTuesday' component={ScheduleTuesday}/>
                            <Route path='/ScheduleWednesday' component={ScheduleWednesday}/>
                            <Route path='/ScheduleThursday' component={ScheduleThursday}/>
                            <Route path='/ScheduleFriday' component={ScheduleFriday}/>
                            <Route path='/ScheduleSaturday' component={ScheduleSaturday}/>
                            <Route path='/ScheduleSunday' component={ScheduleSunday}/>
                            <Route path='/Form/:day/:hour' component={Form}/>
                            <Route path='/Admin' component={Admin}/>
                        </Switch>
                    </div>
                </HashRouter>
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});