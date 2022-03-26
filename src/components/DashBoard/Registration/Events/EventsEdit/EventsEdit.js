import React, { useState, useEffect } from 'react';
import styles from './EventsEdit.module.css';
import { FaMale, FaFemale } from 'react-icons/fa';
import { Button, Collapse, FormGroup, Input, Label, Spinner } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

function EventsEdit() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const selectedGames = {
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
  };
  const [showBoys, setShowBoys] = useState(true);
  const [showGirls, setShowGirls] = useState(true);
  const [showMixed, setShowMixed] = useState(true);
  const [showBoysSpinner, setShowBoysSpinner] = useState(false);
  const [showGirlsSpinner, setShowGirlsSpinner] = useState(false);
  const [showMixedSpinner, setShowMixedSpinner] = useState(false);
  const [games, setGames] = useState(selectedGames);

  useEffect(() => {
    axios
      .get('https://api.spardha.co.in/teams/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        const newGames = { ...selectedGames };
        for (const team of data) {
          newGames[`${team.game}`] = true;
        }
        setGames(newGames);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    const game = e.target.id;
    if (game.endsWith('_B')) setShowBoysSpinner(true);
    else if (game.endsWith('_G')) setShowGirlsSpinner(true);
    else setShowMixedSpinner(true);
    if (games[game]) {
      axios
        .delete(`https://api.spardha.co.in/teams/${game}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          setGames((prevState) => {
            const newGames = { ...prevState };
            newGames[game] = false;
            return newGames;
          });
          if (game.endsWith('_B')) setShowBoysSpinner(false);
          else if (game.endsWith('_G')) setShowGirlsSpinner(false);
          else setShowMixedSpinner(false);
        })
        .catch((err) => {
          console.error(err);
          if (game.endsWith('_B')) setShowBoysSpinner(false);
          else if (game.endsWith('_G')) setShowGirlsSpinner(false);
          else setShowMixedSpinner(false);
        });
    } else {
      axios
        .post(
          'https://api.spardha.co.in/teams/',
          { game },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((res) => {
          setGames((prevState) => {
            const newGames = { ...prevState };
            newGames[game] = true;
            return newGames;
          });
          if (game.endsWith('_B')) setShowBoysSpinner(false);
          else if (game.endsWith('_G')) setShowGirlsSpinner(false);
          else setShowMixedSpinner(false);
        })
        .catch((err) => {
          console.error(err);
          if (game.endsWith('_B')) setShowBoysSpinner(false);
          else if (game.endsWith('_G')) setShowGirlsSpinner(false);
          else setShowMixedSpinner(false);
        });
    }
  };

  const submitHandler = () => {
    navigate('/dashboard/registration');
  };

  return (
    <div className={`${styles['user-dashboard']}`}>
      <div className={`${styles['welcome-text']}`}>
        <div className="col-sm-12">
          <div className="row xs-1 sm-2">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className={`${styles.panel}`} style={{ height: '100%' }}>
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowBoys((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#59ba00' }}
                  >
                    <FaMale /> <b>Boys </b>
                    {showBoysSpinner && <Spinner size="sm" />}
                  </h4>
                </div>
                <Collapse isOpen={showBoys}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Athletics_B"
                            checked={games['Athletics_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Athletics_B"
                          >
                            {' '}
                            Athletics{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Badminton_B"
                            checked={games['Badminton_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Badminton_B"
                          >
                            {' '}
                            Badminton{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Basketball_B"
                            checked={games['Basketball_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Basketball_B"
                          >
                            {' '}
                            Basketball{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Boxing_B"
                            checked={games['Boxing_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Boxing_B"
                          >
                            {' '}
                            Boxing{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Cricket_B"
                            checked={games['Cricket_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Cricket_B"
                          >
                            {' '}
                            Cricket{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Football_B"
                            checked={games['Football_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Football_B"
                          >
                            {' '}
                            Football{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Handball_B"
                            checked={games['Handball_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Handball_B"
                          >
                            {' '}
                            Handball{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Hockey_B"
                            checked={games['Hockey_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Hockey_B"
                          >
                            {' '}
                            Hockey{' '}
                          </Label>
                        </FormGroup>
                      </div>
                      <div className={`col-sm-6 ${styles.container}`}>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Kabaddi_B"
                            checked={games['Kabaddi_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Kabaddi_B"
                          >
                            {' '}
                            Kabaddi{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Kho-Kho_B"
                            checked={games['Kho-Kho_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Kho-Kho_B"
                          >
                            {' '}
                            Kho-Kho{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Squash_B"
                            checked={games['Squash_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Squash_B"
                          >
                            {' '}
                            Squash{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Taekwondo_B"
                            checked={games['Taekwondo_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Taekwondo_B"
                          >
                            {' '}
                            Taekwondo{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Lawn Tennis_B"
                            checked={games['Lawn Tennis_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Lawn Tennis_B"
                          >
                            {' '}
                            Lawn Tennis{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Table Tennis_B"
                            checked={games['Table Tennis_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Table Tennis_B"
                          >
                            {' '}
                            Table Tennis{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Volleyball_B"
                            checked={games['Volleyball_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Volleyball_B"
                          >
                            {' '}
                            Volleyball{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Weightlifting_B"
                            checked={games['Weightlifting_B']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Weightlifting_B"
                          >
                            {' '}
                            Weightlifting{' '}
                          </Label>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`${styles.panel}`}>
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowGirls((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#59ba00' }}
                  >
                    <FaFemale /> <b>Girls </b>
                    {showGirlsSpinner && <Spinner size="sm" />}
                  </h4>
                </div>
                <Collapse isOpen={showGirls}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Athletics_G"
                            checked={games['Athletics_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Athletics_G"
                          >
                            {' '}
                            Athletics{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Badminton_G"
                            checked={games['Badminton_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Badminton_G"
                          >
                            {' '}
                            Badminton{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Basketball_G"
                            checked={games['Basketball_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Basketball_G"
                          >
                            {' '}
                            Basketball{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Boxing_G"
                            checked={games['Boxing_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Boxing_G"
                          >
                            {' '}
                            Boxing{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Kabaddi_G"
                            checked={games['Kabaddi_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Kabaddi_G"
                          >
                            {' '}
                            Kabaddi{' '}
                          </Label>
                        </FormGroup>
                      </div>
                      <div className={`col-sm-6 ${styles.container}`}>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Kho-Kho_G"
                            checked={games['Kho-Kho_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Kho-Kho_G"
                          >
                            {' '}
                            Kho-Kho{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Taekwondo_G"
                            checked={games['Taekwondo_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Taekwondo_G"
                          >
                            {' '}
                            Taekwondo{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Lawn Tennis_G"
                            checked={games['Lawn Tennis_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Lawn Tennis_G"
                          >
                            {' '}
                            Lawn Tennis{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Table Tennis_G"
                            checked={games['Table Tennis_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Table Tennis_G"
                          >
                            {' '}
                            Table Tennis{' '}
                          </Label>
                        </FormGroup>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Volleyball_G"
                            checked={games['Volleyball_G']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Volleyball_G"
                          >
                            {' '}
                            Volleyball{' '}
                          </Label>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div
                className={`${styles.panel}`}
                style={{ marginBottom: '0', marginTop: '25px' }}
              >
                <div className={`${styles['panel-heading']}`}>
                  <h4
                    onClick={() => {
                      setShowMixed((prevState) => !prevState);
                    }}
                    className={`${styles['panel-title']} text-center align-items-center`}
                    style={{ color: '#59ba00' }}
                  >
                    <b>Mixed </b>
                    {showMixedSpinner && <Spinner size="sm" />}
                  </h4>
                </div>
                <Collapse isOpen={showMixed}>
                  <div className={`${styles['panel-body']}`}>
                    <div className="row xs-1 sm-2">
                      <div className={`col-sm-6 ${styles.container}`}>
                        <FormGroup className={`${styles['input-wrapper']}`}>
                          <Input
                            type="checkbox"
                            id="Chess_M"
                            checked={games['Chess_M']}
                            onChange={changeHandler}
                          />
                          <Label
                            className={`${styles['sports-label']}`}
                            for="Chess_M"
                          >
                            {' '}
                            Chess{' '}
                          </Label>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <Button
          color="success"
          style={{ fontWeight: 'bold', width: 'fit-content' }}
          className="mt-4"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default EventsEdit;
