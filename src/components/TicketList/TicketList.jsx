import React from "react";

import classes from "./TicketList.module.scss";
import image from "../../assets/images/S7 Logo.png";

const TicketList = () => {
  return (
    <ul className={classes["ticket-list"]}>
      <li>
        <div className={classes["ticket-block"]}>
          <div className={classes["ticket-header"]}>
            <div className={classes["ticket-price"]}>
              <span>13 400 Р</span>
            </div>
            <div className={classes["company-logo"]}>
              <img src={image} alt='S7 Logo' />
            </div>
          </div>
          <div className={classes["ticket-description"]}>
            <div className={classes.route}>
              <ul
                className={`${classes["route-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    10:45 - 08:00
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    11:20 - 00:50
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.duration}>
              <ul
                className={`${classes["duration-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    21ч 15м
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    13ч 30м
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.tranfers}>
              <ul
                className={`${classes["transfer-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    2 пересадки
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG, JNB
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    1 пересадка
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className={classes["ticket-block"]}>
          <div className={classes["ticket-header"]}>
            <div className={classes["ticket-price"]}>
              <span>13 400 Р</span>
            </div>
            <div className={classes["company-logo"]}>
              <img src={image} alt='S7 Logo' />
            </div>
          </div>
          <div className={classes["ticket-description"]}>
            <div className={classes.route}>
              <ul
                className={`${classes["route-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    10:45 - 08:00
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    11:20 - 00:50
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.duration}>
              <ul
                className={`${classes["duration-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    21ч 15м
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    13ч 30м
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.tranfers}>
              <ul
                className={`${classes["transfer-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    2 пересадки
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG, JNB
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    1 пересадка
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className={classes["ticket-block"]}>
          <div className={classes["ticket-header"]}>
            <div className={classes["ticket-price"]}>
              <span>13 400 Р</span>
            </div>
            <div className={classes["company-logo"]}>
              <img src={image} alt='S7 Logo' />
            </div>
          </div>
          <div className={classes["ticket-description"]}>
            <div className={classes.route}>
              <ul
                className={`${classes["route-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    10:45 - 08:00
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    11:20 - 00:50
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.duration}>
              <ul
                className={`${classes["duration-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    21ч 15м
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    13ч 30м
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.tranfers}>
              <ul
                className={`${classes["transfer-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    2 пересадки
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG, JNB
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    1 пересадка
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className={classes["ticket-block"]}>
          <div className={classes["ticket-header"]}>
            <div className={classes["ticket-price"]}>
              <span>13 400 Р</span>
            </div>
            <div className={classes["company-logo"]}>
              <img src={image} alt='S7 Logo' />
            </div>
          </div>
          <div className={classes["ticket-description"]}>
            <div className={classes.route}>
              <ul
                className={`${classes["route-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    10:45 - 08:00
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    11:20 - 00:50
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.duration}>
              <ul
                className={`${classes["duration-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    21ч 15м
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    13ч 30м
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.tranfers}>
              <ul
                className={`${classes["transfer-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    2 пересадки
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG, JNB
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    1 пересадка
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className={classes["ticket-block"]}>
          <div className={classes["ticket-header"]}>
            <div className={classes["ticket-price"]}>
              <span>13 400 Р</span>
            </div>
            <div className={classes["company-logo"]}>
              <img src={image} alt='S7 Logo' />
            </div>
          </div>
          <div className={classes["ticket-description"]}>
            <div className={classes.route}>
              <ul
                className={`${classes["route-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    10:45 - 08:00
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["route-title"]} ${classes["description-title"]}`}
                  >
                    MOW - HKT
                  </p>
                  <p
                    className={`${classes["route-time"]} ${classes["description-details"]}`}
                  >
                    11:20 - 00:50
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.duration}>
              <ul
                className={`${classes["duration-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    21ч 15м
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["duration-title"]} ${classes["description-title"]}`}
                  >
                    В пути
                  </p>
                  <p
                    className={`${classes["duration-time"]} ${classes["description-details"]}`}
                  >
                    13ч 30м
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.tranfers}>
              <ul
                className={`${classes["transfer-list"]} ${classes["description-list"]}`}
              >
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    2 пересадки
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG, JNB
                  </p>
                </li>
                <li>
                  <p
                    className={`${classes["transfer-title"]} ${classes["description-title"]}`}
                  >
                    1 пересадка
                  </p>
                  <p
                    className={`${classes["transfer-airports"]} ${classes["description-details"]}`}
                  >
                    HKG
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TicketList;
