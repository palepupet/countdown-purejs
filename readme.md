
# RESPONSIVE COUNTDOWN

## Description

Simple responsive countdown to make a timer.

## Installation

    npm i countdown-purejs

## Usage

    import countdown from 'countdown-purejs';

    let countdown = new Countdown("countdown", "2032-10-20:14-30", "english", "Timer is Over");
    countdown.createCountdown();

| Name              | Value(s)                      | Require | Type   | Desc                                                                           |
|-------------------|-------------------------------|---------|--------|--------------------------------------------------------------------------------|
| nameDivId         | countdownDivId                                                                                                        | yes | string | The name of the div ID where the countdown will be show|
| date              | YYY-MM-DD / YYY-MM-DD:mm-ss                                                                                           | yes | string | The future date |
| language          | arab / bengali / chinese / english / french / german / hindi / italian / japanese / portuguese / russian / spanish    | no  | string | The language of the information displayed|
| expiredMessage    | Time is Over                                                                                                          | no  | string | The message that will be displayed when the timer is over |

> constructor(nameDivId, date, language = "english", expiredMessage = "timer is over")

## Example

![alt text](https://raw.githubusercontent.com/palepupet/countdown-purejs/master/example/countdown-example.JPG "Example of Countdown")