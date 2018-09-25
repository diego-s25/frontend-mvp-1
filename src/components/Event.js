import React, { Component } from 'react';
import upvoteButton from '../images/icons/up.svg';
import downvoteButton from '../images/icons/down.svg';
import locationIcon from '../images/location_white.png';
import clockIcon from '../images/clock.png';
import participantsIcon from '../images/people.png';

class Event extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="event">
                <div className="eventWrapper">
                    <div className="eventContent">
                        <div className="eventContentGrid">
                            <div className="imageContainer">
                                <img src={this.props.data.image} alt="event picture"/>
                            </div>
                            <div className="eventDescription">
                                <h2>{this.props.data.title}</h2>
                                <div className="contentSeperator"></div>
                                <p>{this.props.data.description}</p>
                            </div>
                            <div className="eventTools">
                                <div className="eventCreator">
                                    <a href="#">
                                        <img src={this.props.data.creator_pic} alt="creator pic"/>
                                        <h4>{this.props.data.creator_name}</h4>
                                    </a>
                                </div>
                                <div className="votingWrapper">
                                    <div className="voting">
                                        <img src={upvoteButton} alt="vote up"/>
                                        <div className="voteCounterWrapper">
                                            <h3>{this.props.data.points}</h3>
                                        </div>
                                        <img src={downvoteButton} alt="vote down"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eventFooter">
                        <div className="eventLocation">
                            <img src={locationIcon} alt="location icon"/>
                            <h3>{this.props.data.location}</h3>
                        </div>
                        <div className="eventTime">
                            <img src={clockIcon} alt="clock icon"/>
                            <h3>{this.props.data.dateStart} - {this.props.data.dateEnd}</h3>
                        </div>
                        <div className="eventParticipants">
                            <img src={participantsIcon} alt="participants icon"/>
                            <h3>{this.props.data.participants}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;