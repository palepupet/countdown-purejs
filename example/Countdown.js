class Countdown {

    constructor(nameDivId, date, language = "english", expiredMessage = "timer is over") {
        this.nameDivId = nameDivId;
        this.date = date;
        this.language = language;
        this.expiredMessage = expiredMessage;

        this.typeOfDate = null;
        this.completeDate = null;
        this.completeTime = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.hour = null;
        this.minute = null;
        this.seconds = null;
        this.futurDate = null;
        this.actualDate = null;
        this.difference = null;

        this.textDay = "Day";
        this.textHour = "Hour";
        this.textMinute = "Minute";
        this.textSeconde = "Second";
        this.interval = null;

        this.spanDayText = null;
        this.spanDayNumber = null;
        this.spanHourText = null;
        this.spanHourNumber = null;
        this.spanMinuteText = null;
        this.spanMinuteNumber = null;
        this.spanSecondeText = null;
        this.spanSecondeNumber = null;
    }


    validationRessource() {
        if(typeof this.nameDivId !== "string") {
            throw "nameDivId must be to type : string";
        
        } else if(this.nameDivId.length <= 0) {
            throw "nameDivId must contain at least 1 character";
        }

        if(typeof this.date !== "string") {
            throw "Date must be to type : string like 'YYY-MM-DD:hh-mm'";
        }

        if(typeof this.language !== "string") {
            throw "language must be to type : string";
        }
    }


    checkLanguage() {

        if(this.language === "arab") {
            this.textDay = "يوم";
            this.textHour = "وقت";
            this.textMinute = "دقيقة";
            this.textSeconde = "الثانية";
        
        } else if(this.language === "bengali") {
            this.textDay = "দিন";
            this.textHour = "সময়";
            this.textMinute = "মিনিট";
            this.textSeconde = "দ্বিতীয়";
        
        } else if(this.language === "chinese") {
            this.textDay = "天";
            this.textHour = "时间";
            this.textMinute = "分钟";
            this.textSeconde = "第二";
        
        } else if(this.language === "english") {
            this.textDay = "Day";
            this.textHour = "Hour";
            this.textMinute = "Minute";
            this.textSeconde = "Second";
        
        } else if(this.language === "french") {
            this.textDay = "Jour";
            this.textHour = "Heure";
            this.textMinute = "Minute";
            this.textSeconde = "Seconde";
        
        } else if(this.language === "german") {
            this.textDay = "Tag";
            this.textHour = "Zeit";
            this.textMinute = "Minute";
            this.textSeconde = "zweite";
        
        } else if(this.language === "hindi") {
            this.textDay = "दिन";
            this.textHour = "समय";
            this.textMinute = "मिनट";
            this.textSeconde = "सेकंड";
        
        } else if(this.language === "italian") {
            this.textDay = "Giorno";
            this.textHour = "Tempo";
            this.textMinute = "Minuto";
            this.textSeconde = "Secondo";
        
        } else if(this.language === "japanese") {
            this.textDay = "日";
            this.textHour = "時間";
            this.textMinute = "分";
            this.textSeconde = "第2";
        
        } else if(this.language === "portuguese") {
            this.textDay = "Dia";
            this.textHour = "Tempo";
            this.textMinute = "Minuto";
            this.textSeconde = "Segundo";
        
        } else if(this.language === "russian") {
            this.textDay = "день";
            this.textHour = "время";
            this.textMinute = "минут";
            this.textSeconde = "второй";
        
        } else if(this.language === "spanish") {
            this.textDay = "Día";
            this.textHour = "Hora";
            this.textMinute = "Minuto";
            this.textSeconde = "Segundo";
        
        } else {
            this.textDay = "Day";
            this.textHour = "Hour";
            this.textMinute = "Minute";
            this.textSeconde = "Second";
        }
        
    }


    createDiv() {
        let nameDivId = document.querySelector("#"+this.nameDivId);

        let divDay = document.createElement("div");
        let spanDayText = document.createElement("span");
        let spanDayNumber = document.createElement("span");
        divDay.setAttribute("id", "countdown__divDay");
        spanDayText.setAttribute("id", "divDay__spanDayText");
        spanDayNumber.setAttribute("id", "divDay__spanDayNumber");
        spanDayText.textContent = this.textDay
        spanDayNumber.textContent = "00";

        let divHour = document.createElement("div");
        let spanHourText = document.createElement("span");
        let spanHourNumber = document.createElement("span");
        divHour.setAttribute("id", "countdown__divHour");
        spanHourText.setAttribute("id", "divHour__spanHourText");
        spanHourNumber.setAttribute("id", "divHour__spanHourNumber");
        spanHourText.textContent = this.textHour
        spanHourNumber.textContent = "00";

        let divMinute = document.createElement("div");
        let spanMinuteText = document.createElement("span");
        let spanMinuteNumber = document.createElement("span");
        divMinute.setAttribute("id", "countdown__divMinute");
        spanMinuteText.setAttribute("id", "divMinute__spanMinuteText");
        spanMinuteNumber.setAttribute("id", "divMinute__spanMinuteNumber");
        spanMinuteText.textContent = this.textMinute
        spanMinuteNumber.textContent = "00";

        let divSecond = document.createElement("div");
        let spanSecondText = document.createElement("span");
        let spanSecondNumber = document.createElement("span");
        divSecond.setAttribute("id", "countdown__divSecond");
        spanSecondText.setAttribute("id", "divSecond__spanSecondText");
        spanSecondNumber.setAttribute("id", "divSecond__spanSecondNumber");
        spanSecondText.textContent = this.textSeconde
        spanSecondNumber.textContent = "00";

        divDay.appendChild(spanDayText);
        divDay.appendChild(spanDayNumber);
        divHour.appendChild(spanHourText);
        divHour.appendChild(spanHourNumber);
        divMinute.appendChild(spanMinuteText);
        divMinute.appendChild(spanMinuteNumber);
        divSecond.appendChild(spanSecondText);
        divSecond.appendChild(spanSecondNumber);

        nameDivId.appendChild(divDay);
        nameDivId.appendChild(divHour);
        nameDivId.appendChild(divMinute);
        nameDivId.appendChild(divSecond);


        this.spanDayText = document.querySelector("#divDay__spanDayText");
        this.spanDayNumber = document.querySelector("#divDay__spanDayNumber");
        this.spanHourText = document.querySelector("#divHour__spanHourText");
        this.spanHourNumber = document.querySelector("#divHour__spanHourNumber");
        this.spanMinuteText = document.querySelector("#divMinute__spanMinuteText");
        this.spanMinuteNumber = document.querySelector("#divMinute__spanMinuteNumber");
        this.spanSecondeText = document.querySelector("#divSecond__spanSecondText");
        this.spanSecondeNumber = document.querySelector("#divSecond__spanSecondNumber");

        this.styleDiv();
    }


    styleDiv() {

        let divId = document.querySelector("#"+this.nameDivId);
        divId.style = "display:flex; justify-content:center; text-align:center; font-size:1.5rem;";

        this.spanDayText.style = "display:block; margin:0 10px;";

        this.spanHourText.style = "display:block; margin:0 10px;";

        this.spanMinuteText.style = "display:block; margin:0 10px;";

        this.spanSecondeText.style = "display:block; margin:0 10px;";

    }
    

    processString() {
        // Get date width Regexp
        let regexDate = new RegExp(/\d{4}-\d{2}-\d{2}/gm);
        let regexTime = new RegExp(/:\d{2}-\d{2}/gm);

               
        if(this.date.match(regexDate)) {
            this.completeDate = this.date.match(regexDate)[0].split("-");

            // Error
            if(this.completeDate.length < 3) {
                throw "date must contain YYY-MM-DD";
            }

            // Define var
            this.year = this.completeDate[0];
            this.month = this.completeDate[1]-1;
            this.day = this.completeDate[2];
        }

        if(this.date.match(regexTime)) {
            this.completeTime = this.date.match(regexTime)[0].split(/[:-]/);

            // Error
            if(this.completeTime.length < 3) {
                throw "time must contain hh:mm";
            }

            // Define var
            this.hour = this.completeTime[1];
            this.minute = this.completeTime[2];
        
        } else {
            this.hour = "00";
            this.minute = "00";
        }

        // Define future date
        this.futurDate = new Date(this.year, this.month, this.day, this.hour, this.minute).getTime();
        
        // If timer is expired or not
        if(this.futurDate <= new Date().getTime()) {
            this.messageExpired();
        
        } else {
            this.createDiv();
            this.calculeDate();
        }
        
    }


    messageExpired() {
        
        let nameDivId = document.querySelector("#"+this.nameDivId);
        let divExpired = document.createElement("div");
        let spanExpired = document.createElement("span");

        
        spanExpired.setAttribute("id", "timerExpired__span");
        spanExpired.textContent = this.expiredMessage
        spanExpired.style.fontSize = "2rem";
        spanExpired.style.padding = "5px";
        
        divExpired.setAttribute("id", "timerExpired");
        divExpired.style.textAlign = "center";

        divExpired.appendChild(spanExpired);
        nameDivId.appendChild(divExpired);
    }

    calculeDate() {

        let that = this;

        this.interval = setInterval(function() {

            that.actualDate = new Date().getTime();
            that.difference = that.futurDate - that.actualDate;

            // Transform time into human reading data
            that.seconds = Math.floor(that.difference / 1000);
            that.minute = Math.floor(that.seconds / 60);
            that.hour = Math.floor(that.minute / 60);
            that.day = Math.floor(that.hour / 24);

            that.hour %= 24;
            that.minute %= 60;
            that.seconds %= 60;

            // Add 0 in front of value if it's under 10
            that.day = (that.day < 10) ? "0" + that.day : that.day;
            that.hour = (that.hour < 10) ? "0" + that.hour : that.hour;
            that.minute = (that.minute < 10) ? "0" + that.minute : that.minute;
            that.seconds = (that.seconds < 10) ? "0" + that.seconds : that.seconds

            // Display countdown
            that.spanDayNumber.textContent = that.day;
            that.spanHourNumber.textContent = that.hour;
            that.spanMinuteNumber.textContent = that.minute;
            that.spanSecondeNumber.textContent = that.seconds;

        }, 1000);

               
    }


    createCountdown() {
        this.validationRessource();
        this.checkLanguage();
        this.processString();
    }

};