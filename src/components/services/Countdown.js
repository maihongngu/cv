import React from 'react'
import './Countdown.css'
//

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    }

    componentDidMount(){
        const then = Math.floor(new Date("2021-02-12 16:00").getTime())
        this.interval = setInterval(() => {
            const now =  Math.floor(new Date().getTime())
            const countdown = (then - now)
            const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
            const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

            this.setState({ days, hours, minutes, seconds })
        },1000)
    }

    componentWillUnmount(){
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    
    render(){
        const { days, hours, minutes, seconds } = this.state;
        return(
            <div className="section is-flex" style={{backgroundImage:"url(/images/background_new_year.svg)", objectFit: "cover", backgroundRepeat: 'no-repeat', height: '50vh', width: '100%', backgroundPosition: 'center center', backgroundSize:'100vw'}}>
                <div className="countdown-wrapper is-justify-content-space-around" style={{margin: 'auto'}}>
                    <div className="countdown-item">
                        {days}
                        <span className="has-text-white">Days</span>
                    </div>
                    <div className="countdown-item">
                        {hours}
                        <span className="has-text-white">Hours</span>
                    </div>
                    <div className="countdown-item">
                        {minutes}
                        <span className="has-text-white">Minutes</span>
                    </div>
                    <div className="countdown-item">
                        {seconds}
                        <span className="has-text-white">Seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}