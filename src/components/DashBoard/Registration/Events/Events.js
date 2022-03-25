import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import styles from './Events.module.css';

const EventsDb = () => {
  const token = localStorage.getItem('token');
  const [showModals, setShowModals] = useState({
    Athletics_G: false,
    Boxing_G: false,
    Taekwondo_G: false,
    Volleyball_B: false,
    Volleyball_G: false,
    'Lawn Tennis_G': false,
    'Lawn Tennis_B': false,
    'Table Tennis_B': false,
    'Table Tennis_G': false,
    'Kho-Kho_G': false,
    'Kho-Kho_B': false,
    Kabaddi_B: false,
    Kabaddi_G: false,
    Badminton_G: false,
    Badminton_B: false,
    Squash_B: false,
    Weightlifting_B: false,
    Hockey_B: false,
    Handball_B: false,
    Football_B: false,
    Cricket_B: false,
    Taekwondo_B: false,
    Boxing_B: false,
    Athletics_B: false,
    Chess_M: false,
    Basketball_G: false,
    Basketball_B: false,
  });
  const [Athletics_G, setAthletics_G] = useState({});
  const [Boxing_G, setBoxing_G] = useState({});
  const [Taekwondo_G, setTaekwondo_G] = useState({});
  const [Volleyball_B, setVolleyball_B] = useState({});
  const [Volleyball_G, setVolleyball_G] = useState({});
  const [Tennis_G, setTennis_G] = useState({});
  const [Tennis_B, setTennis_B] = useState({});
  const [LTennis_B, setLTennis_B] = useState({});
  const [LTennis_G, setLTennis_G] = useState({});
  const [KhoKho_G, setKhoKho_G] = useState({});
  const [KhoKho_B, setKhoKho_B] = useState({});
  const [Kabaddi_B, setKabaddi_B] = useState({});
  const [Kabaddi_G, setKabaddi_G] = useState({});
  const [Badminton_G, setBadminton_G] = useState({});
  const [Badminton_B, setBadminton_B] = useState({});
  const [Squash_B, setSquash_B] = useState({});
  const [Weightlifting_B, setWeightlifting_B] = useState({});
  const [Hockey_B, setHockey_B] = useState({});
  const [Handball_B, setHandball_B] = useState({});
  const [Football_B, setFootball_B] = useState({});
  const [Cricket_B, setCricket_B] = useState({});
  const [Taekwondo_B, setTaekwondo_B] = useState({});
  const [Boxing_B, setBoxing_B] = useState({});
  const [Athletics_B, setAthletics_B] = useState({});
  const [Chess_M, setChess_M] = useState({});
  const [Basketball_G, setBasketball_G] = useState({});
  const [Basketball_B, setBasketball_B] = useState({});
  const [boyTeams, setBoyTeams] = useState([]);
  const [girlTeams, setGirlTeams] = useState([]);
  const [mixedTeams, setMixedTeams] = useState([]);

  const inputFields = {
    Athletics_G: [Athletics_G, setAthletics_G],
    Boxing_G: [Boxing_G, setBoxing_G],
    Taekwondo_G: [Taekwondo_G, setTaekwondo_G],
    Volleyball_B: [Volleyball_B, setVolleyball_B],
    Volleyball_G: [Volleyball_G, setVolleyball_G],
    'Lawn Tennis_G': [LTennis_G, setLTennis_G],
    'Lawn Tennis_B': [LTennis_B, setLTennis_B],
    'Table Tennis_B': [Tennis_B, setTennis_B],
    'Table Tennis_G': [Tennis_G, setTennis_G],
    'Kho-Kho_G': [KhoKho_G, setKhoKho_G],
    'Kho-Kho_B': [KhoKho_B, setKhoKho_B],
    Kabaddi_B: [Kabaddi_B, setKabaddi_B],
    Kabaddi_G: [Kabaddi_G, setKabaddi_G],
    Badminton_G: [Badminton_G, setBadminton_G],
    Badminton_B: [Badminton_B, setBadminton_B],
    Squash_B: [Squash_B, setSquash_B],
    Weightlifting_B: [Weightlifting_B, setWeightlifting_B],
    Hockey_B: [Hockey_B, setHockey_B],
    Handball_B: [Handball_B, setHandball_B],
    Football_B: [Football_B, setFootball_B],
    Cricket_B: [Cricket_B, setCricket_B],
    Taekwondo_B: [Taekwondo_B, setTaekwondo_B],
    Boxing_B: [Boxing_B, setBoxing_B],
    Athletics_B: [Athletics_B, setAthletics_B],
    Chess_M: [Chess_M, setChess_M],
    Basketball_G: [Basketball_G, setBasketball_G],
    Basketball_B: [Basketball_B, setBasketball_B],
  };
  useEffect(() => {
    axios
      .get('https://api.spardha.co.in/teams/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        for (const team of data) {
          const rows = team.players.reduce(function (rows, key, index) {
            return (
              (index % 2 === 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows
            );
          }, []);
          team.players = rows;
          console.log(team)
          inputFields[team.game][1](team);
          if (team.game.endsWith('_B')) {
            setBoyTeams((prevState) => {
              const newState = [...prevState];
              newState.push(team);
              return newState;
            });
          } else if (team.game.endsWith('_G')) {
            setGirlTeams((prevState) => {
              const newState = [...prevState];
              newState.push(team);
              return newState;
            });
          } else {
            setMixedTeams((prevState) => {
              const newState = [...prevState];
              newState.push(team);
              return newState;
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = (game) => {
    setShowModals((prevState) => {
      const newState = { ...prevState };
      newState[`${game}`] = !prevState[`${game}`];
      return newState;
    });
  };

  const inputChangeHandler = (e) => {
    const game = e.target.attributes['data-game'].value,
      name = e.target.name;
    console.log(game, name);
    if (name === 'player') {
    } else {
      inputFields[game][1]((prevState) => {
        const newState = { ...prevState };
        newState[name] = e.target.value;
        return newState;
      });
    }
  };

  return (
    <>
      <div className={`${styles['events-heading']}`}>Boys</div>
      <table
        className={`${styles['events-table']}`}
        align="center"
        cellpadding="20"
        border="1"
      >
        <tr>
          <th
            className={`${styles['left-column']}`}
            style={{ textAlign: 'center' }}
          >
            Event Name
          </th>
          <th
            className={`${styles['middle-column']}`}
            style={{ textAlign: 'center' }}
          >
            Players Name / Count
          </th>
          <th
            className={`${styles['right-column']}`}
            style={{ textAlign: 'center' }}
          >
            Edit Players
          </th>
        </tr>
        {boyTeams.length === 0 ? (
          <tr style={{ textAlign: 'center' }}>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        ) : (
          boyTeams.map((team, ind) => {
            return (
              <tr key={ind}>
                <td>
                  <b>{team.game.substr(0, team.game.length - 2)}</b>
                </td>
                <td style={{ textAlign: 'left' }}>
                  {team.captain_name && (
                    <b>
                      Captain / Leader: {team.captain_name}{' '}
                      {team.captain_phone && (
                        <span>({team.captain_phone})</span>
                      )}
                      <br />
                    </b>
                  )}
                  {team.players.some((s) => s.length) && (
                    <b>
                      {team.game.substr(0, team.game.length - 2) ===
                      'Athletics' ? (
                        <span>Total Number of Boys: </span>
                      ) : (
                        <span>Players Name: </span>
                      )}
                    </b>
                  )}
                  {team.players
                    .slice(0, team.players.length - 1)
                    .map((player) => {
                      return player ? <span>{player}, </span> : '';
                    })}
                  {team.players[team.players.length - 1] && (
                    <span>{team.players[team.players.length - 1]}</span>
                  )}
                </td>
                <td>
                  <Button
                    className={`${styles['register-now']}`}
                    data-toggle={team.game}
                    onClick={() => clickHandler(team.game)}
                  >
                    Add&nbsp;/&nbsp;Edit
                  </Button>
                  <Modal
                    isOpen={showModals[`${team.game}`]}
                    toggle={() => clickHandler(team.game)}
                    centered
                    scrollable
                    keyboard
                    size="lg"
                  >
                    <ModalHeader
                      className={`${styles['modal-header']} ${styles['login-header']}`}
                    >
                      Players - {team.game.substr(0, team.game.length - 2)} [
                      {team.game.endsWith('B') && 'BOYS'}
                      {team.game.endsWith('G') && 'GIRLS'}
                      {team.game.endsWith('M') && 'MIXED'}]
                    </ModalHeader>
                    <ModalBody className={`${styles['modal-body']}`}>
                      <table align="center" cellPadding="20">
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Captain / Leader Name"
                              data-game={team.game}
                              name="captain_name"
                              value={
                                inputFields[`${team.game}`][0]['captain_name']
                              }
                              onChange={inputChangeHandler}
                            ></input>
                          </td>
                          <td>
                            <input
                              type="tel"
                              className="form-control"
                              data-game={team.game}
                              name="captain_phone"
                              placeholder="Captain / Leader Phone No."
                              value={
                                inputFields[`${team.game}`][0]['captain_phone']
                              }
                              onChange={inputChangeHandler}
                            ></input>
                          </td>
                        </tr>
                      </table>
                      <table align="center" cellpadding="20">
                        {team.players.map((row, rowIndex) => {
                          return (
                            <tr>
                              {row.map((col, colIndex) => {
                                return (
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder={`Player ${
                                        2 * rowIndex + colIndex + 1
                                      }`}
                                      data-game={team.game}
                                      name={`${2 * rowIndex + colIndex}`}
                                      value={
                                        inputFields[`${team.game}`][0][
                                          'players'
                                        ][2 * rowIndex + colIndex]
                                      }
                                      onChange={inputChangeHandler}
                                    ></input>
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </table>
                    </ModalBody>
                  </Modal>
                </td>
              </tr>
            );
          })
        )}
      </table>
      <br />
      <div className={`${styles['events-heading']}`}>Girls</div>
      <table
        className={`${styles['events-table']}`}
        align="center"
        cellpadding="20"
        border="1"
      >
        <tr>
          <th
            className={`${styles['left-column']}`}
            style={{ textAlign: 'center' }}
          >
            Event Name
          </th>
          <th
            className={`${styles['middle-column']}`}
            style={{ textAlign: 'center' }}
          >
            Players Name / Count
          </th>
          <th
            className={`${styles['right-column']}`}
            style={{ textAlign: 'center' }}
          >
            Edit Players
          </th>
        </tr>
        {girlTeams.length === 0 ? (
          <tr style={{ textAlign: 'center' }}>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        ) : (
          girlTeams.map((team) => {
            return (
              <tr>
                <td>
                  <b>{team.game.substr(0, team.game.length - 2)}</b>
                </td>
                <td style={{ textAlign: 'left' }}>
                  {team.captain_name && (
                    <b>
                      Captain / Leader: {team.captain_name}{' '}
                      {team.captain_phone && (
                        <span>({team.captain_phone})</span>
                      )}
                      <br />
                    </b>
                  )}
                  {team.players.some((s) => s.length) && (
                    <b>
                      {team.game.substr(0, team.game.length - 2) ===
                      'Athletics' ? (
                        <span>Total Number of Girls: </span>
                      ) : (
                        <span>Players Name: </span>
                      )}
                    </b>
                  )}
                  {team.players
                    .slice(0, team.players.length - 1)
                    .map((player) => {
                      return player ? <span>{player}, </span> : '';
                    })}
                  {team.players[team.players.length - 1] && (
                    <span>{team.players[team.players.length - 1]}</span>
                  )}
                </td>
                <td>
                  <Button
                    className={`${styles['register-now']}`}
                    data-toggle={team.game}
                    onClick={() => clickHandler(team.game)}
                  >
                    Add&nbsp;/&nbsp;Edit
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </table>
      <br />
      <div className={`${styles['events-heading']}`}>Mixed</div>
      <table
        className={`${styles['events-table']}`}
        align="center"
        cellpadding="20"
        border="1"
      >
        <tr>
          <th
            className={`${styles['left-column']}`}
            style={{ textAlign: 'center' }}
          >
            Event Name
          </th>
          <th
            className={`${styles['middle-column']}`}
            style={{ textAlign: 'center' }}
          >
            Players Name / Count
          </th>
          <th
            className={`${styles['right-column']}`}
            style={{ textAlign: 'center' }}
          >
            Edit Players
          </th>
        </tr>
        {mixedTeams.length === 0 ? (
          <tr style={{ textAlign: 'center' }}>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        ) : (
          mixedTeams.map((team) => {
            return (
              <tr>
                <td>
                  <b>{team.game.substr(0, team.game.length - 2)}</b>
                </td>
                <td style={{ textAlign: 'left' }}>
                  {team.captain_name && (
                    <b>
                      Captain / Leader: {team.captain_name}{' '}
                      {team.captain_phone && (
                        <span>({team.captain_phone})</span>
                      )}
                      <br />
                    </b>
                  )}
                  {team.players.some((s) => s.length) && (
                    <b>{<span>Players Name: </span>}</b>
                  )}
                  {team.players
                    .slice(0, team.players.length - 1)
                    .map((player) => {
                      return player ? <span>{player}, </span> : '';
                    })}
                  {team.players[team.players.length - 1] && (
                    <span>{team.players[team.players.length - 1]}</span>
                  )}
                </td>
                <td>
                  <Button
                    className={`${styles['register-now']}`}
                    data-toggle={team.game}
                    onClick={() => clickHandler(team.game)}
                  >
                    Add&nbsp;/&nbsp;Edit
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </table>
      <br />
    </>
  );
};

export default EventsDb;
