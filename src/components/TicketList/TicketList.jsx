import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSearchId } from '../../redux/actions';
import { ticketsLoad } from '../../redux/actions';

import classes from './TicketList.module.scss';

const TicketList = ({
  searchId,
  onGetSearchId,
  posts,
  onTicketsLoad,
  displayStackSize,
}) => {

  useEffect(() => {
    onGetSearchId();
  }, [onGetSearchId]);

  useEffect(() => {
    if (searchId && (!posts.posts || !posts.posts.stop)) {
      onTicketsLoad(searchId);
    }
  }, [searchId, posts, onTicketsLoad]);

  const generateKey = (ticket) => {
    const getThereStops = ticket.segments[0].stops.reduce(
      (sum, current) => sum + current,
      ''
    );
    const getReturnStops = ticket.segments[0].stops.reduce(
      (sum, current) => sum + current,
      ''
    );
    return `${ticket.carrier}${ticket.segments[0].origin}${ticket.segments[0].destination}${ticket.segments[0].date}${getThereStops}${ticket.segments[1].origin}${ticket.segments[1].destination}${ticket.segments[1].date}${getReturnStops}`;
  };

  const priceDisplay = (price) => {
    const thousands = Math.floor(price / 1000);
    const hundreds = price - thousands * 1000;
    return `${thousands} ${hundreds}`;
  };

  const fromToTime = (dateString, duration) => {
    const departureDate = new Date(Date.parse(dateString));
    let startTime = `${departureDate.getHours()}:${departureDate.getMinutes()}`;
    if (startTime[1] === ':') {
      startTime = `0${startTime}`;
    }
    if (startTime.length === 4) {
      startTime = `${startTime.slice(0, 3)}0${startTime.slice(3)}`;
    }
    const finishTimeStamp = Date.parse(dateString) + duration * 60000;
    const finishDate = new Date(finishTimeStamp);
    let finishTime = `${finishDate.getHours()}:${finishDate.getMinutes()}`;
    if (finishTime[1] === ':') {
      finishTime = `0${finishTime}`;
    }
    if (finishTime.length === 4) {
      finishTime = `${finishTime.slice(0, 3)}0${finishTime.slice(3)}`;
    }
    return `${startTime} - ${finishTime}`;
  };

  const durationTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const stopNumber = (stops) => {
    if (stops.length > 1) {
      return `${stops.length} пересадки`;
    }
    if (!stops.length) {
      return 'Без пересадок';
    }
    return `${stops.length} пересадка`;
  };

  const getIndex = (index) => {
    return {
      display: index < displayStackSize.displayStackSize ? 'block' : 'none',
    };
  };

  const ticketsParse = () => {
    const ticketArray = posts.tickets.map((element, index) => {
      return (
        <li key={generateKey(element)} style={getIndex(index)}>
          <div className={classes['ticket-block']}>
            <div className={classes['ticket-header']}>
              <div className={classes['ticket-price']}>
                <span>{priceDisplay(element.price)}</span>
              </div>
              <div className={classes['company-logo']}>
                <img
                  src={`//pics.avs.io/99/36/${element.carrier}.png`}
                  alt='S7 Logo'
                />
              </div>
            </div>
            <div className={classes['ticket-description']}>
              <div className={classes.route}>
                <ul
                  className={`${classes['route-list']} ${classes['description-list']}`}
                >
                  <li>
                    <p
                      className={`${classes['route-title']} ${classes['description-title']}`}
                    >
                      {element.segments[0].origin} -{' '}
                      {element.segments[0].destination}
                    </p>
                    <p
                      className={`${classes['route-time']} ${classes['description-details']}`}
                    >
                      {fromToTime(
                        element.segments[0].date,
                        element.segments[0].duration
                      )}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`${classes['route-title']} ${classes['description-title']}`}
                    >
                      {element.segments[1].origin} -{' '}
                      {element.segments[1].destination}
                    </p>
                    <p
                      className={`${classes['route-time']} ${classes['description-details']}`}
                    >
                      {fromToTime(
                        element.segments[1].date,
                        element.segments[1].duration
                      )}
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes.duration}>
                <ul
                  className={`${classes['duration-list']} ${classes['description-list']}`}
                >
                  <li>
                    <p
                      className={`${classes['duration-title']} ${classes['description-title']}`}
                    >
                      В пути
                    </p>
                    <p
                      className={`${classes['duration-time']} ${classes['description-details']}`}
                    >
                      {durationTime(element.segments[0].duration)}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`${classes['duration-title']} ${classes['description-title']}`}
                    >
                      В пути
                    </p>
                    <p
                      className={`${classes['duration-time']} ${classes['description-details']}`}
                    >
                      {durationTime(element.segments[1].duration)}
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes.tranfers}>
                <ul
                  className={`${classes['transfer-list']} ${classes['description-list']}`}
                >
                  <li>
                    <p
                      className={`${classes['transfer-title']} ${classes['description-title']}`}
                    >
                      {stopNumber(element.segments[0].stops)}
                    </p>
                    <p
                      className={`${classes['transfer-airports']} ${classes['description-details']}`}
                    >
                      {element.segments[0].stops.length ? (
                        element.segments[0].stops.join(', ')
                      ) : (
                        <br />
                      )}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`${classes['transfer-title']} ${classes['description-title']}`}
                    >
                      {stopNumber(element.segments[1].stops)}
                    </p>
                    <p
                      className={`${classes['transfer-airports']} ${classes['description-details']}`}
                    >
                      {element.segments[1].stops.length ? (
                        element.segments[1].stops.join(', ')
                      ) : (
                        <br />
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return ticketArray;
  };

  return <ul className={classes['ticket-list']}>{ticketsParse()}</ul>;
};

function mapStateToProps(state) {
  return {
    searchId: state.searchId.searchId,
    posts: state.posts,
    displayStackSize: state.displayStackSize,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSearchId: () => dispatch(getSearchId()),
    onTicketsLoad: (id) => dispatch(ticketsLoad(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
